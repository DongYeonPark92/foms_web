require("dotenv").config(); // 환경 변수를 불러오는 모듈
const mssql = require("mssql");
const db = require("../config/db"); // DB 연결 설정 파일

// FMS 데이터를 가져오는 함수
exports.fmsData = async (req, res) => {
  try {
    // DB 연결
    await db.connect();
    // 저장 프로시저 호출
    const request = new mssql.Request(db);

    request.input("IN_처리구분", mssql.Numeric, 1);
    request.input("IN_상태", mssql.Numeric, 1);
    request.input("IN_Status", mssql.NVarChar, "Ongoing");
    request.input("IN_SE", mssql.NVarChar, "[전체]");
    request.input("IN_ACKRDept", mssql.NVarChar, "[전체]");
    request.input("IN_Model", mssql.NVarChar, "");
    request.input("IN_Customer", mssql.NVarChar, "");
    request.input("IN_EndUserName", mssql.NVarChar, "");
    request.input("IN_EndUserDIV", mssql.NVarChar, "");
    request.input("IN_Flag", mssql.NVarChar, "[전체]");
    request.input("IN_Channel", mssql.NVarChar, "[전체]");
    request.input("IN_LogNo", mssql.NVarChar, "");
    request.input("IN_QuoNo", mssql.NVarChar, "");
    request.input("IN_CloseYear", mssql.NVarChar, "[전체]");
    request.input("IN_CloseQuarter", mssql.NVarChar, "[전체]");
    request.input("IN_CloseMonth", mssql.NVarChar, "[전체]");
    request.input("IN_CloseHalf", mssql.NVarChar, "[전체]");
    request.input("IN_Marcom2", mssql.NVarChar, "[전체]");
    request.input("IN_Demo여부", mssql.NVarChar, "[전체]");
    request.input("IN_ProbAnritsu", mssql.NVarChar, "0");
    request.input("IN_FY", mssql.NVarChar, "FY24");
    request.input("IN_Save_Title", mssql.NVarChar, "[전체]");
    request.input("IN_Save_PO포함여부", mssql.NVarChar, "2");
    request.input("IN_Save_Date1", mssql.NVarChar, "[전체]");
    request.input("IN_Save_Date2", mssql.NVarChar, "[전체]");
    request.input("IN_SN", mssql.NVarChar, "[전체]");
    request.input("IN_SE확인", mssql.NVarChar, "[전체]");
    request.input("IN_SE확인날짜", mssql.NVarChar, "[전체]");
    request.input("IN_SE_Group", mssql.NVarChar, "[전체]");
    request.input("IN_ROF", mssql.NVarChar, "ALL");
    request.input("IN_Real여부", mssql.NVarChar, "0");
    request.input("IN_CS_여부", mssql.NVarChar, "ALL");
    request.input("IN_CS_Dept", mssql.NVarChar, "ALL");
    request.input("IN_CS_Type", mssql.NVarChar, "ALL");
    request.input("IN_BDSC_PRJT", mssql.NVarChar, "ALL");

    const result = await request.execute("[dbo].[SP01_FUN_검색]");

    // 결과가 있을 경우 응답으로 전송
    if (result.recordset && result.recordset.length > 0) {
      res.status(200).json({
        message: "FMS data OK",
        data: result.recordset,
      });
    } else {
      res.status(404).json({ message: "FMS 데이터를 찾을 수 없습니다." });
    }
  } catch (err) {
    console.error("FMS 데이터를 불러오는 중 오류 발생:", err);
    res.status(500).json({ message: "서버 오류", error: err.message });
  }
};
