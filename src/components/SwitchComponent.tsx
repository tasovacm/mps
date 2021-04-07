import React, {useState} from "react";
import Switch from "react-switch";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons/lib";
import {Tooltip} from "antd";

interface SwitchComponentProps {
  handleChange(): void;

  label?: string | JSX.Element;
  tooltip?: string | JSX.Element;
  color?: string | undefined
  offHandleColor?: string
}

const SwitchComponent = ({label, tooltip, handleChange, color = "#4b4b4b", offHandleColor = "#4B4B4B"}: SwitchComponentProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const checkedIcon = <div
    style={{display: "flex", justifyContent: "center", alignItems: "center", width: "23px", height: "23px"}}>
    <CheckOutlined
      style={{color: "#fff"}}/></div>;
  const uncheckedIcon = <div
    style={{display: "flex", justifyContent: "center", alignItems: "center", width: "23px", height: "23px"}}>
    <CloseOutlined
      style={{color: "#fff"}}/></div>;

  return (
    <div style={{display: "flex", flexDirection: "column", width: "100%", alignItems: "center", marginBottom: 20}}>
      <div className={"max-width"}>
        <div style={{display: "flex", justifyContent: !!tooltip ? "space-between" : "center", alignItems: "center"}}>
          <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Switch
              checked={checked}
              onChange={() => {
                handleChange();
                setChecked(!checked)
              }}
              uncheckedIcon={false}
              checkedIcon={false}
              offColor="transparent"
              onColor="transparent"
              offHandleColor={offHandleColor}
              onHandleColor="#34B233"
              uncheckedHandleIcon={uncheckedIcon}
              checkedHandleIcon={checkedIcon}
            />
            {label &&
            <span style={{
              textAlign: "left",
              marginLeft: 15,
              fontSize: 16,
              fontWeight: 600,
              color: color,
              textTransform: "capitalize",
            }}>{label}</span>
            }
          </div>
          {!!tooltip &&
          <div style={{flex: 1, display: "flex", justifyContent: "flex-end"}}>
              <Tooltip title={tooltip} placement="left" color={"#fff"} overlayStyle={{color: "#000"}}>
                  <div className={"inputTooltip"}>?</div>
              </Tooltip>
          </div>}
        </div>
      </div>
    </div>
  )
};

export default SwitchComponent;
