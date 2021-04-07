import React from "react"
import {Divider} from "antd";
import TableComponent from "../components/TableComponent";
import DocumentList from "../components/DocumentList";
import {legalDocuments} from "../values/legalDocuments";
import {insuranceDocuments} from "../values/InsuraceDocument";
import SwitchComponent from "../components/SwitchComponent";

const StepTwoComponent = () => {

  const data = [{title: "Premija bez poreza", value: "55.60"}, {title: "Porez", value: "5.80"}];
  const riskData = [{
    risk: "Osiguranje odgovornost mikro prevoznih sredstava",
    insuredSum: "50000",
    premium: "35.15",
  },
    {risk: "Smrt usljed nezgode", insuredSum: 50000, premium: 55.60},
    {risk: "Nezgoda", insuredSum: 10000, premium: 4.22},
    {risk: "Prelomi, dislokacije, opekotine i povrede mekih tkiva", insuredSum: 2000, premium: 1.84},];

  const columns = [
    {
      title: 'title',
      dataIndex: 'title',
      key: (rec: any) => {
        return rec
      },

    }, {
      title: "value",
      dataIndex: "value",
      render: (rec: any) => <div>{`${rec} EUR`}</div>,
      key: (rec: any) => {
        return rec
      },

    }];
  const columnsInsurance = [
    {
      title: 'Rizik',
      dataIndex: 'risk',
      key: (rec: any) => {
        return rec
      },

    }, {
      title: "Suma osiguranja",
      dataIndex: "insuredSum",
      render: (rec: any) => <div style={{textAlign: "right"}}>{`${rec} EUR`}</div>,
      key: (rec: any) => {
        return rec
      },

    }, {
      title: "Premija",
      dataIndex: "premium",
      render: (rec: any) => <div style={{textAlign: "right"}}>{`${rec} EUR`}</div>,
      key: (rec: any) => {
        return rec
      },
    }];
  const total = () => {
    let totalValue = 0;
    // eslint-disable-next-line array-callback-return
    data.map(item => {
      totalValue = totalValue + Number(item.value)
    });
    return totalValue.toFixed(2)
  };
  return (
    <>
      <h1>Informativni obračun</h1>
      <div className={"step-two-white"}>
        <div className={"max-width-medium"}>
          <TableComponent
            columns={columns}
            dataSource={data}
            tableLayout={"fixed"}
          />
          <div className={"totalValue"}>
            <p>Premija sa porezom</p>
            <p className={"value"} style={{marginBottom: 0}}>{`${total()} EUR`}</p>
          </div>
        </div>
        <Divider/>
        <div className={"max-width-max"}>
          <h3 className={"uppercase"}>Izabrano osiguranje</h3>
          <TableComponent
            columns={columnsInsurance}
            dataSource={riskData}
            tableLayout={"auto"}
            showHeader={true}
          />
        </div>
      </div>
      <div className={"dark-background"}>
        <h2 className={"white-h2"}>Uslovi osiguranja</h2>
        <div>Za pregled dokumenata preporučujemo <a href={"https://get.adobe.com/reader/"} target={"_blank"} rel={"noreferrer"}> Adobe
          Acrobat Reader.</a></div>
        <div className={"documentListGroup"}>
          <DocumentList
            title={"uslovi osiguranja"}
            data={insuranceDocuments}
          />
          <DocumentList
            title={"ostali dokumenti"}
            data={legalDocuments}/>
        </div>
        <SwitchComponent
          handleChange={() => {
          }}
          label={"Slažem se sa uslovima osiguranja"}
          offHandleColor={"#ED2939"}
          color={"#ffffff"}/>
      </div>
    </>
  )
};

export default StepTwoComponent;
