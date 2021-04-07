import React from "react";
import {Button, Steps} from "antd";
import StepOneComponent from "./StepOne";
import StepTwoComponent from "./StepTwo";
const { Step } = Steps;
const Stepper = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      content: <StepOneComponent/>,
    },
    {
      content: <StepTwoComponent/>,
    },
    {
      content: 'Last-content',
    },
  ];

  const onChange = (current:any) => {
    console.log('onChange:', current);
    setCurrent( current );
  };
  return (
    <div className={"step-window"}>
      <div style={{display:"flex", justifyContent: "space-evenly", maxWidth: 700, margin: "auto"}}>
        <div className={"step-title " + (current!==0 && "step-title-inactive")}>Unos Podataka</div>
        <div className={"step-title " + (current!==1 && "step-title-inactive")}>Obračun</div>
        <div className={"step-title " + (current!==2 && "step-title-inactive")}>Zaključivanje</div>
      </div>
      <Steps
        current={current}
        onChange={(e)=>onChange(e)}
      >
        {steps.map((item, no) => (
          <Step key={no + "step"}  status={no<current ? "wait": no>current ? "wait" : "process"} />
        ))}
      </Steps>
      <div>{steps[current].content}</div>
      <div className={"steps-action bottom-border-radius "+ (current>0 && "dark-background" )}>
        <div style={{display: "flex", flexGrow: 1,}}>
        {current > 0 && (
          <Button className={"button-open-grey"} onClick={() => prev()}>
            Prethodno
          </Button>
        )}
        </div>
        <div style={{display: "flex", flexGrow: 1,}}>
        {current < steps.length - 1 && (
          <button className={"button-green "+(current>0 && "margin-shift")}  onClick={() => next()}>
            Sljedeće
          </button>
        )}
        </div>
      </div>
    </div>
  )
};

export default Stepper;
