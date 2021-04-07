import React from "react";
import {DatePicker} from "antd";
import {IoCalendarOutline} from "react-icons/io5";

interface DatepickerComponentProps {
  disabledDate?: any;
  placeholder?: string;
  label?: string;
}

const DatePickerComponent = ({disabledDate, placeholder, label}: DatepickerComponentProps) => {
  return (
    <div className={"select"}
         style={{maxWidth: 500, width: "100%", display: "flex", flexDirection: "column", alignItems: "left"}}>
      {label && <span className={"select-label"}>{label}</span> }
      <DatePicker
        style={{
          width: "100%",
          borderRadius: "30px",
          padding: "4px 4px 4px 20px",
        }}
        disabledDate={disabledDate}
        placeholder={placeholder}
        format={'DD.MM.YYYY'}
        suffixIcon={<div className={"input-tooltip"}
                         style={{backgroundColor: "#4B4B4B", borderRadius: "100%", padding: 5}}>
          <IoCalendarOutline
            style={{color: "#fff", fontSize: "1.5rem"}}/></div>}
      />
    </div>
  )
};

export default DatePickerComponent;
