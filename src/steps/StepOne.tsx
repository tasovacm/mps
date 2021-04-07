import * as React from "react";
import {TemplatesEnum} from "../model/enums/TemplatesEnum";
import Coverage from "../components/Coverage";
import {useState} from "react";
import SelectComponent from "../components/SelectComponent";
import {values} from "../values/coverage";
import {accident} from "../values/accident";
import SwitchComponent from "../components/SwitchComponent";
import moment from "moment";
import DatePickerComponent from "../components/DatepickerComponent";
import InputComponent from "../components/InputComponent";
import {Divider} from "antd";


const StepOneComponent = () => {
  const [accidentItem, setAccident] = useState<string>("option1");
  const [isHull, setHull] = useState<boolean>();
  const [preseted, presetHull] = useState<boolean>();

  const subjectSelect = [
    {
      value: TemplatesEnum.BICIKLO,
      item: "Biciklo"
    },
    {
      value: TemplatesEnum.DRUGO,
      item: "Drugo"
    }
  ];
  const accidentSelect = [
    {
      value: "option1",
      item: "Pokriće 10.000",
    },
    {
      value: "option2",
      item: "Pokriće 20.000"
    }
  ];

  function handleMPSTypeChange(value: TemplatesEnum) {
    console.log(value);
  }

  function handleAccidentChange(value: string) {
    setAccident(value);
  }

  function disabledDateHull(current: any) {
    // Can not select days after today and 7 days earlier
    return moment().add(-7, 'days') >= current ||
      moment().add(0, 'days') <= current;
  }
  function disabledDate(current: any) {
    // Can not select days before today and today
    return moment().add(0, 'days') >= current;
  }

  const hullClass = () => {
    let x = "";
    if (!preseted) {
      x = "hull-hide"
    } else {
      x = "hull-show"
    }
    return x;
  };
  return (
    <div>
      <h1>Izbor mikro prevoznog sredstva</h1>
      <div className={"column"} style={{padding: "0 20px"}}>
        <SelectComponent
          label={"Izaberite mikro prevozno sredstvo"}
          tooltip={"osiguranje bicikala i drugih mikro prevoznih sredstava (do 25 km/h) "}
          values={subjectSelect}
          onChange={(e) => handleMPSTypeChange(e)}
        />
        <SelectComponent
          label={"Izaberite pokriće nezgode"}
          values={accidentSelect}
          onChange={(e) => handleAccidentChange(e)}
        />
        <DatePickerComponent
          label={"Početak Osiguranja"}
          disabledDate={disabledDate}
          placeholder={"Datum početka osiguranja"}
        />
      </div>
      <div style={{backgroundColor: "#f5f5f5", padding: "0 20px"}}>
        <h1>Osiguravajuće pokriće</h1>
        <Coverage values={values.liability}/>
        <Coverage
          //@ts-ignore
          values={accident[accidentItem]}/>
        <SwitchComponent
          handleChange={() => {
            if (isHull) {
              presetHull(false);
              setTimeout(function () {
                setHull(false);
                setHull(undefined)
              }, 600);
            } else {
              setHull(true);
                presetHull(true)
            }
          }}
          label={<div>Kasko osiguranje mikro prevoznog sredstva</div>}
          tooltip={"Osiguranje pokriva štetu na biciklima i drugim mikro prevoznim sredstvima usled saobraćajne nesreće," +
          " požara, udara groma, eksplozije, oluje, grada, pada aviona, demonstracija i manifestacija, provalne krađe" +
          " i razbojništva i zemljotresa na teritoriji Crne Gore. Učešće osiguranika u šteti iznosi 50 €."}
        />
        {isHull &&
        <div className={" " + hullClass()}>
            <DatePickerComponent
                disabledDate={disabledDateHull}
                placeholder={"Datum kupovine mikro prevoznog sredstva"}
            />
            <InputComponent
                suffix={"EUR"}
                tooltip={") Predmet osiguranja je mikro prevozno sredstvo navedeno u polisi osiguranja sa svim pripadajućim sastavnim djelovima i dodatna oprema (nadogradnja) navedena na polisi (kao npr. dodatne felne). Na polisi mora biti naveden serijski broj mikro prevoznog sredstva i serijski broj dodatne opreme, koja je predmet osiguranja. Ako je mikro prevozno sredstvo sastavljeno, specifikacija sastavnih djelova (tip i model okvira, felne, zupčanik, mjenjači, sistem kočenja, upravljač, sjedište, poluge s ležajevima, i slično) mora biti sastavni dio polise. \n" +
                " Iz osiguranja je u svakom slučaju isključena oprema, koja je montirana na mikro prevozno sredstvo kao dodatak, koja nije u funkciji sastavnih djelova mikro prevoznog sredstva (kao npr. dječije sjedište, navigacijski sistem, brojila i drugi slični dodatni ugrađeni djelovi)."}
            />
        </div>
        }
        <Divider style={{margin: 0}}/>
      </div>
    </div>
  )
};

export default StepOneComponent;

