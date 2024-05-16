import { Checkbox, Form } from "antd";
import "./index.css";

function CheckBoxField(props) {
  return (
    <div className="check-box-class">
      <Form.Item name={props.name} className="form-itm-check">
        <Checkbox name={props.name} onChange={props.checkChange}>
          <span className="check-box-label">{props.data.label}</span>
        </Checkbox>
      </Form.Item>
    </div>
  );
}

export default CheckBoxField;
