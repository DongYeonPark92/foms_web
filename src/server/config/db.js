
// mssql 연동
var mssql = require('mssql');
const config = {
    user: 'eusr_anritsu',
    password: 'pwd_anritsu_1206',
    server: '61.251.168.100',
    database: 'ZEX_ANRITSU',
    port : 1433,
}
const db = new mssql.ConnectionPool(config);

module.exprots = db;

