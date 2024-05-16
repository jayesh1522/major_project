import { Form, Input } from "antd";
import React from "react";
import "./index.css";

function NumField(props) {
  return (
    <div className="text-field">
      <Form.Item name={props.name} className="form-itm-text">
        <Input type="number" placeholder={props.data.placeholder} />
      </Form.Item>
    </div>
  );
}

export default NumField;
