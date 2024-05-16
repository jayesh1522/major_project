import { DatePicker, Form } from "antd";
import "./index.css";

function DateField(props) {
  return (
    <div className="date-field">
      <Form.Item name={props.name}>
        <DatePicker placeholder={props.data.placeholder} size="large" />
      </Form.Item>
    </div>
  );
}

export default DateField;
