require("dotenv").config(); // 환경 변수를 불러오는데 필요
const mssql = require("mssql");
const db = require("../config/db");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    await db.connect();
    const request = new mssql.Request(db);
    request.input("IN_사용자ID", mssql.NVarChar, username);
    request.input("IN_Password", mssql.NVarChar, password);
    const result = await request.execute("[dbo].[SP100_User접속]");

    if (result.recordset && result.recordset.length > 0) {
      const user = result.recordset[0]; // 사용자 정보
      console.log(process.env.ACCESS_TOKEN_SECRET);
      const accessToken = jwt.sign(
        { userId: user.사용자ID, username: user.사용자명 }, // Payload
        process.env.ACCESS_TOKEN_SECRET, // .env에서 설정한 비밀키
        { expiresIn: "1h" } // 옵션: 토큰의 유효 시간
      );

      res.json({
        accessToken, // 클라이언트에 accessToken 전송
      });
      // res.status(200).json({
      //   message: 'Login successful',
      //   user: result.recordset[0]
      // });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
  //   finally {
  //   db.close();
  // }
};
