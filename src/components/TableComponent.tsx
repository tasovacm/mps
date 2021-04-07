import React from "react";
import {Table} from "antd";
interface TableComponentProps {
  columns: any;
  dataSource:any;
  showHeader?: boolean
  tableLayout?: "auto"|"fixed"
}
const TableComponent = ({columns, dataSource, showHeader=false, tableLayout}:TableComponentProps) => {
  return (
    <>
      <div style={{display: "flex", alignItems: "center"}}>
        <Table
          className="table-striped-rows"
          size={"small"}
          showHeader={showHeader}
          pagination={false}
          columns={columns}
          dataSource={dataSource}
          tableLayout={tableLayout}
        />
      </div>
    </>
  )
};

export default TableComponent
