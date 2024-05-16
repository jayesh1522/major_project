import { Form, Select } from "antd";
import "./index.css";

const { Option } = Select;

function DropDownMenu(props) {
  return (
    <div className="drop-down-menu-class">
      <h7>Repeat</h7>
      <div className="select-class">
        <Form.Item name={props.name}>
          <Select size="large" placeholder="Repeat daily">
            <Option key={"daily"}>Daily</Option>
            <Option key={"alter"}>Alternate</Option>
          </Select>
        </Form.Item>
      </div>
    </div>
  );
}

export default DropDownMenu;
