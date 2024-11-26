import axios from "axios";
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useTable, useBlockLayout, useResizeColumns } from "react-table";
import "../../CSS/fms/FMSTable.css";

const FMSTable = () => {
  const [fmsData, setFmsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/fms-data");
        setFmsData(response.data.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columnData = [
    "ID",
    "LogNo_Full",
    "CS_여부",
    "Real여부",
    "ROF",
    "Status",
    "Project",
    "Customer",
    "Customer_KR",
    "CustomerSegment",
    "CustomerSegment2",
    "Model",
    "Group1",
    "Group2",
    "Flag",
    "Comm_Resale",
    "DIV_FY",
    "DIV",
    "Qty",
    "견적가",
    "EUP_CCY",
    "EUP",
    "K_KRW",
    "ProbAnritsu",
    "CloseDate",
    "MYR_금액출처",
    "MYR_금액",
    "예상매출월",
    "SE",
    "CloseYear",
    "CloseMonth",
    "CloseHalf",
    "Quarter",
    "Type",
    "AckrDept",
    "UnitPrice",
    "UnitPrice_Qty",
    "국가기관여부",
    "CS_Type",
    "CS_Engineer",
    "CS_Dept",
    "Sales_amount",
    "BDSC_PRJT",
    "ORB여부",
    "ORBPrice",
    "ORBPriceQty",
    "수정여부",
    "조정용_삭제여부",
  ];

  const getStoredColumnWidths = () => {
    const stored = localStorage.getItem("fmsTableColumnWidths");
    return stored ? JSON.parse(stored) : {};
  };

  const columnHeaders = useMemo(() => {
    const storedWidths = getStoredColumnWidths();
    return columnData.map((column) => ({
      Header: column,
      accessor: column,
      width: storedWidths[column] || 150, // Default width if not stored
    }));
  }, []);

  const defaultColumn = useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 400,
    }),
    []
  );

  // Debouncing resize events to prevent excessive re-renders
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const handleResize = useCallback(
    debounce((columnId, newWidth) => {
      const storedWidths = getStoredColumnWidths();
      storedWidths[columnId] = newWidth;
      localStorage.setItem(
        "fmsTableColumnWidths",
        JSON.stringify(storedWidths)
      );
    }, 200),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { columnResizing },
  } = useTable(
    {
      columns: columnHeaders,
      data: fmsData,
      defaultColumn,
    },
    useBlockLayout,
    useResizeColumns
  );

  // Save resized column widths in localStorage after resizing
  useEffect(() => {
    if (!columnResizing.isResizingColumn) {
      const newColumnWidths = headerGroups[0].headers.reduce((acc, header) => {
        acc[header.id] = header.width;
        return acc;
      }, {});
      localStorage.setItem(
        "fmsTableColumnWidths",
        JSON.stringify(newColumnWidths)
      );
    }
  }, [columnResizing, headerGroups]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (fmsData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="table-container">
      <div className="table-scroll">
        <table {...getTableProps()} className="fms-table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                    <div
                      {...column.getResizerProps()}
                      className={`resizer ${
                        column.isResizing ? "isResizing" : ""
                      }`}
                      onClick={() => handleResize(column.id, column.width)} // Apply debounced resize
                    />
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FMSTable;
