const mssql = require('mssql');
const db = require('../config/db');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    await db.connect();
    const request = new mssql.Request(db);
    request.input('IN_사용자ID', mssql.NVarChar, username);
    request.input('IN_Password', mssql.NVarChar, password);
    const result = await request.execute('[dbo].[SP100_User접속]');

    if (result.recordset && result.recordset.length > 0) {
      res.status(200).json({
        message: 'Login successful',
        user: result.recordset[0]
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  } 
  //   finally {
  //   db.close();
  // }
};

