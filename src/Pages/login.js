import React, { useState, useEffect } from "react";
import "../CSS/login.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate(); // 컴포넌트 본문 내에서 훅 호출

  const toggle = () => {
    setIsSignIn(!isSignIn);
    setLoginError(loginError);
    setUsername(""); // 사용자 이름 초기화
    setEmail(""); // 이메일 초기화
    setPassword(""); // 비밀번호 초기화
    setConfirmPassword(""); // 비밀번호 확인 초기화
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSignIn(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log('Login attempt:', { username, password }); 로그인 정보 노출 방지를 위해 주석처리
    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      console.log("Login response:", data); // 서버 응답 로그
      if (response.status === 401) {
        setLoginError(data.message); // 상태 업데이트
        alert(
          "사용자 ID와 PW가 일치하지 않습니다. \nAMS와 동일한 계정 사용 부탁드립니다!"
        ); // 메시지 박스 띄우기
      } else if (response.status === 200) {
        // JWT를 로컬 스토리지에 저장
        localStorage.setItem("token", data.accessToken);
        setLoginError(""); // 상태 업데이트
        navigate("/mainPage");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    // 서버로 회원가입 요청 보내기
    // 예: fetch('/api/signup', { ... })
  };

  return (
    <div
      id="container"
      className={`container ${isSignIn ? "sign-in" : "sign-up"}`}
    >
      {/* FORM SECTION */}
      <div className="row">
        {/* SIGN UP */}
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <form className="form sign-up" onSubmit={handleSignUp}>
              <div className="input-group">
                <i className="bx bxs-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-group">
                <i className="bx bx-mail-send"></i>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit">Sign up</button>
              <p>
                <span>Already have an account?</span>
                <b onClick={toggle} className="pointer">
                  Sign in here
                </b>
              </p>
            </form>
          </div>
        </div>
        {/* END SIGN UP */}
        {/* SIGN IN */}
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <form className="form sign-in" onSubmit={handleLogin}>
              <div className="input-group">
                <i className="bx bxs-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">Sign in</button>
              <p>
                <b>Forgot password?</b>
              </p>
              <p>
                <span>Don't have an account?</span>
                <b onClick={toggle} className="pointer">
                  Sign up here
                </b>
              </p>
            </form>
          </div>
        </div>
        {/* END SIGN IN */}
      </div>
      {/* END FORM SECTION */}
      {/* CONTENT SECTION */}
      <div className="row content-row">
        {/* SIGN IN CONTENT */}
        <div className="col align-items-center flex-col">
          <div className="text sign-in">
            <h2>Welcome Anritsu!</h2>
          </div>
        </div>
        {/* END SIGN IN CONTENT */}
        {/* SIGN UP CONTENT */}
        <div className="col align-items-center flex-col">
          <div className="text sign-up">
            <h2>Join with Anritsu</h2>
          </div>
        </div>
        {/* END SIGN UP CONTENT */}
      </div>
      {/* END CONTENT SECTION */}
    </div>
  );
}

export default App;
