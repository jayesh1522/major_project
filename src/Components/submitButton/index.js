import { Button, Form } from "antd";
import "./index.css";

function SubmitButton(props) {
  return (
    <Form.Item className="form-itm-submit-btn">
      <Button
        htmlType="submit"
        type="primary"
        shape="round"
        size="large"
        className="submit-btn"
      >
        {props.children}
      </Button>
    </Form.Item>
  );
}

export default SubmitButton;
