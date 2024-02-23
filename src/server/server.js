const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// const express = require('express');
// const mssql = require('mssql'); // MSSQL 모듈을 가져옵니다.
// const cors = require('cors'); // CORS 미들웨어를 가져옵니다.
// const app = express();

// app.use(express.json());
// app.use(cors()); // 모든 출처에서의 요청을 허용합니다.

// app.use((req, res, next) => {
//   console.log('Requested URL:', req.url);
//   next();})
  
// const PORT = process.env.PORT || 4000
// const db = require('./config/db.js')

// // 로그인 라우트
// app.post('/login', async (req, res) => {
//   try {
//       console.log('Login request received:', req.body); // 요청 본문 로그
//       const { username, password } = req.body;

//       // 데이터베이스 연결
//       await db.connect(); // 연결 풀이 활성화되었는지 확인하고, 필요한 경우 연결합니다.
//       const pool = db;
//       const request = new mssql.Request(pool);

//       // 저장 프로시저 매개변수 설정
//       request.input('IN_사용자ID', mssql.NVarChar, username);
//       request.input('IN_Password', mssql.NVarChar, password);

//       // [dbo].[SP100_User접속] 저장 프로시저 호출
//       const result = await request.execute('[dbo].[SP100_User접속]'); 

//       // 결과 처리
//       if (result.recordset && result.recordset.length > 0) {
//         // 사용자 정보가 반환된 경우 (인증 성공)
//         res.json({
//           message: 'Login successful',
//           user: result.recordset[0] // 반환된 사용자 정보
//         });
//       } else {
//         // 사용자 정보가 반환되지 않은 경우 (인증 실패)
//         res.status(401).json({ message: 'Invalid credentials' });
//       }
//     } catch (err) {
//       console.error('Error during login:', err); // 에러 로그
//       res.status(500).json({ message: 'Server error', error: err.message });
//      } 
//     //finally {
//     //   pool.close(); // 연결 종료
//     // }
//   });

// // 서버시작 코드
// app.listen(PORT, () => {
//     console.log(`server On : http://localhost:${PORT}`);
// });
