require('dotenv').config();
const mssql = require('mssql');

const config = {
    user: 'eusr_anritsu',
    password: 'pwd_anritsu_1206',
    server: '61.251.168.100',
    database: 'ZEX_ANRITSU',
    port : 1433,
    options: {
      encrypt: true, // 또는 서버의 요구 사항에 따라 false로 설정
      trustServerCertificate: true // 이 줄을 추가
  }
};

const db = new mssql.ConnectionPool(config);

// 연결 테스트 함수
async function testConnection() {
  try {
    await db.connect();
    console.log('Connected to the database successfully.');
    // 간단한 쿼리 실행
    const result = await db.request().query('SELECT 1 AS number');
    console.log('Query result:', result.recordset);
  } catch (error) {
    console.error('Database connection error:', error);
  } 
    // finally {
    // db.close(); // 연결 종료
  }


testConnection(); // 연결 테스트 실행

module.exports = db;



