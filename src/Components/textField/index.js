import { Input, Form } from "antd";
import "./index.css";

function TextField(props) {
  return (
    <div className="text-field">
      <Form.Item name={props.name} className="form-itm-text">
        <Input size="large" placeholder={props.data.placeholder} />
      </Form.Item>
    </div>
  );
}

export default TextField;
