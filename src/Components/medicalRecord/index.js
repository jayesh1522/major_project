import { Col, Collapse } from "antd";
import React from "react";
import Rect from "../rectangle";
import MedicalRecordData from "./medicalRecordData";
import "./index.css";
const { Panel } = Collapse;

function MedicalRecord() {
  return (
    <>
      <Rect>
        <Collapse className="collapse-class" ghost>
          <Panel header="Medical Record" showArrow={false}>
            <MedicalRecordData />
          </Panel>
        </Collapse>
      </Rect>
    </>
  );
}

export default MedicalRecord;
