import { Input, Form } from "antd";
import "./index.css";

const { TextArea } = Input;

function DescField(props) {
  return (
    <div className="text-area">
      <Form.Item name={props.name} className="form-itm-desc">
        <TextArea
          size="large"
          autoSize={{ minRows: 3, maxRows: 6 }}
          placeholder={props.data.placeholder}
        />
      </Form.Item>
    </div>
  );
}

export default DescField;
