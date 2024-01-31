const express = require('express');
const app = express()

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('Requested URL:', req.url);
  next();})
  
const PORT = process.env.PORT || 4000
const db=require('./config/db.js')


// 'about' 페이지에 대한 라우트 설정
app.get('/index', (req, res) => {
        res.sendFile(__dirname + '/views/index.html');
      });

// 'about' 페이지에 대한 라우트 설정
app.get('/about', (req, res) => {
        res.sendFile(__dirname + '/views/about.html');
      });

app.listen(PORT, () => {
    console.log(`server On : http://localhost:${PORT}`);
});
