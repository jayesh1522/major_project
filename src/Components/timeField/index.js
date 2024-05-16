import { TimePicker, Form } from "antd";
import "./index.css";
function TimeField(props) {
  return (
    <div className="time-field-class">
      <h7>{props.data.placeholder}</h7>
      <Form.Item name={props.name} className="form-itm-time">
        <TimePicker size="large" placeholder={props.data.placeholder} />
      </Form.Item>
    </div>
  );
}

export default TimeField;
