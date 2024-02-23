import React from 'react';
import Navigation from '../components/Navigation'; // Navigation 컴포넌트 import
import { useState } from 'react';

function Header(props) {
  console.log('props', props, props.title)
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Navigate(props) {
  const lis=[]
  for (let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
      </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props) {
  console.log('props',props,props.title)
  return <article>
    <h1>{props.title}</h1>
         {props.body}
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Create(){
  return <article>
    <h2>Create</h2>
    <form>
      <input type='text' name='title' placeholder='title' />
      <textarea name='body' placeholder='body'></textarea>
    </form>
  </article>
}

function Oms() {
    // const _mode = useState('WELCOME');
    // const mode = _mode[0];
    // const setmode = _mode[1]; usestate를 풀어서 적으면 옆 3가지 코드로 적힌다.
    
    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);

    const topics =[
      {id:1, title:'test1', body:'test1'},
      {id:2, title:'test2', body:'test2'},
      {id:3, title:'test3', body:'test3'}
  ]
  let content = null;
  if(mode==='WELCOME'){
    content = <Article title='WELCOME' body='WELCOME'></Article>
  } else if(mode==='READ'){
    let title,body = null;
    for (let i=0; i<topics.length; i++){
      console.log(topics[i].id, id);
        if(topics[i].id === id){
           title = topics[i].title;
           body = topics[i].body;
        }
    }
    content = <Article title={title} body={body}></Article>
  } else if(mode==='CREATE'){
    content = <Create></Create>
  }
  return (
    <div>
    <Header title='바보1' onChangeMode={()=>{
      setMode('WELCOME');
    }}></Header>
    <Navigate topics={topics} onChangeMode={(_id)=>{
      setMode('READ');
      setId(_id);
    }}></Navigate>
    {content}
    <a href="/create" onClick={event=>{
      event.preventDefault();
      setMode('CREATE');
    }}>Create 바보바보바보</a>
    </div>
  );
}

export default Oms;
