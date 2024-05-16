import { Collapse, DatePicker } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import API_Manager from "../../../API/MediboxAPI";
import "./index.css";
import MedicalPanel from "./medicalRecordPanel";

const { Panel } = Collapse;
function MedicalRecordData() {
  const [recordData, setRecordData] = useState([]);
  const [newDate, setNewDate] = useState(new Date());

  const MedicalData = async (values) => {
    values = moment(values).format("YYYY-MM-DD");
    console.log(values);
    setNewDate(values);
    // const data = { date: values };
    try {
      const res = await API_Manager.medicalRecord(values);
      console.log(res.data.data);
      await setRecordData(res.data.data);
    } catch (err) {
      console.log(err);
    }
    console.log(recordData);
  };
  useEffect(() => {
    MedicalData(
      `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
    );
  }, []);
  return (
    <div className="medical-record-content-div">
      {/* <Form onValuesChange={MedicalData}> */}
      {/* <Form.Item name="date"> */}
      <DatePicker
        size="large"
        onChange={(value) => MedicalData(value)}
        value={moment(newDate)}
      />
      {/* </Form.Item> */}
      {/* </Form> */}
      {recordData.length === 0 ? (
        <h4>No Data</h4>
      ) : (
        <Collapse
          expandIconPosition="right"
          ghost
          className="medical-record-collapse-class"
        >
          {console.log(recordData)}
          {recordData.length &&
            recordData.map((data) => {
              return (
                <Panel
                  className="collapse-panel"
                  header={
                    <span className="collapse-panel-header">
                      Medicine {data.medicine}
                    </span>
                  }
                  expandIconPosition="right"
                >
                  <MedicalPanel data={data} />
                </Panel>
              );
            })}
        </Collapse>
      )}
    </div>
  );
}

export default MedicalRecordData;
