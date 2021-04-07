import React from "react";
import {Input, Tooltip} from "antd";

interface InputComponentProps {
  tooltip?: string | JSX.Element
  suffix?: string | JSX.Element
  label?: string
}

const InputComponent = ({tooltip, suffix, label}: InputComponentProps) => {
  return (
    <div style={{display: "flex", flexDirection: "column", width: "100%", alignItems: "center", marginBottom: 20}}>
      <div className={"max-width"}>
        {!!label && <span className={"select-label"}>{label}</span>}
        <Input
          style={{
            width: "100%",
            borderRadius: "30px",
            padding: "8px 4px 8px 20px",
          }}
          suffix={<div style={{display: "flex"}}>
            {!!suffix && suffix}
            {!!tooltip &&
            <Tooltip title={tooltip} placement="left" color={"#fff"} overlayStyle={{color: "#000"}}>
                <span className={"inputTooltip"} style={{marginLeft: 5}}>?</span>
            </Tooltip>}</div>}
        />
      </div>
    </div>
  )
};

export default InputComponent
