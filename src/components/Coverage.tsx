import React from "react";
import {CoverageItemClass} from "../model/clases/CoverageItemClass";
import {CoverageClass} from "../model/clases/CoverageClass";
import {Divider, Tooltip} from "antd";

interface CoverageProps {
  values: CoverageClass
}

const Coverage = ({values}: CoverageProps) => {

  const items = () => {
    return values?.values?.map((value: CoverageItemClass) => {
      return (
        <div key={
          //@ts-ignore
          (value.title) + (value.value) + (values.title)
        }
             style={{
               display: "flex", justifyContent: "space-between", padding: "0 30px", color: "#858585", height: "2rem",
             }}
        >
          <div className={"lo-table-item"}>{value.title}</div>
          <div className={"lo-table-item"}>{value.value} EUR
            {!!value.tooltip &&
            <Tooltip title={value.tooltip} placement="left" color={"#fff"} overlayStyle={{color: "#000"}}>
                <span className={"inputTooltip"}>?</span>
            </Tooltip>
            }
          </div>
        </div>
      )
    })
  };
  return (
    <div style={{display: "flex", flexDirection: "column", width: "100%", alignItems: "center", marginBottom: 80}}>
      <div className={"max-width"}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div style={{
            display: "flex",
            borderRadius: "100%",
            borderColor: "#c0cec0",
            borderWidth: 2,
            borderStyle: "solid",
            width: 24,
            height: 24,
          }}>
            <div>
              <div style={{
                color: "#34B233",
                backgroundColor: "#34B233",
                borderRadius: "100%",
                width: 20,
                height: 20,
                border: "2px solid white",
              }}/>
            </div>
            <div style={{
              whiteSpace: "nowrap",
              marginLeft: 15,
              lineHeight: "16px",
              fontSize: 16,
              fontWeight: 600,
              color: "#4b4b4b",
              textTransform: "capitalize",
            }}>{values.title}</div>
          </div>
          {!!values.tooltip &&
          <Tooltip title={values.tooltip} placement="left" color={"#fff"} overlayStyle={{color: "#000"}}>
              <span className={"inputTooltip"}>?</span>
          </Tooltip>}
        </div>
        <Divider style={{margin: "15px 0"}}/>
        {items()}
      </div>
    </div>
  )
};
export default Coverage
