import React from "react";
import {Select, Tooltip} from "antd";
import {FaAngleDown} from "react-icons/fa";

interface SelectComponentProps {
  label?: string;
  values: { value: any, item: string }[];
  tooltip?: string
  onChange(value: any): void
}

const SelectComponent = ({label, values, tooltip, onChange}: SelectComponentProps) => {
  const {Option} = Select;
  const items = () => {
    return values?.map(value => {
      return (
        <Option value={value.value} key={label + (value.value)}>{value.item}</Option>
      )
    })
  };
  const icon = <div>
    <FaAngleDown style={{color: "#4D4D4D", fontSize: 18, fontWeight: 700}}/>
  </div>;
  return (
    <>
      <div className={"select"}
           style={{maxWidth: 500, width: "100%", display: "flex", flexDirection:"column", alignItems: "left"}}>
        <span className={"select-label"}>{label}</span>
        <div style={{display:"flex", alignItems:"center"}}>
        <Select style={{width:"100%"}}
                defaultValue={values[0].value}
                onChange={(e) => onChange(e)}
                suffixIcon={icon}>
          {items()}
        </Select>
          { !!tooltip &&
        <Tooltip title={tooltip} placement="left" color={"#fff"} overlayStyle={{color: "#000"}}>
          <span className={"inputTooltip"}>?</span>
        </Tooltip>}
        </div>
      </div>
    </>
  )
};

export default SelectComponent
