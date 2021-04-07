import React from "react";
import {Button} from "antd";
import {ImFilePdf} from "react-icons/im";

interface DocumentListProps {
  data: any[]
  title?: string
}

const DocumentList = ({data, title}: DocumentListProps) => {

  const listData = () => {
    return data.map((item: any) => {
      return (
        <div style={{marginBottom: 30}}>
          <Button type="link" ghost icon={<ImFilePdf style={{color: "white", fontSize: 32}}/>}
                  style={{display: "flex", alignItems:"center"}}>
            <div style={{
              color: "white",
              fontSize: "0.8rem",
              textTransform: "none",
              marginLeft: 20,
            }}>{`    ${item.title}`}</div>
          </Button>
        </div>)
    })
  };

  return (
    <div className={"documentList"}>
      {title && <h4 className={"white-h4 uppercase"} style={{textAlign: "center", width:"100%"}}>{title}</h4>}
      {listData()}
    </div>
  )
};

export default DocumentList
