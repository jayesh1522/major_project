import { Col, Form, message, Row } from "antd";
import { useState } from "react";
import API_Manager from "../../API/MediboxAPI";
import CheckBoxField from "../checkBox";
import DescField from "../descField";
import DropDownMenu from "../dropdownMenu";
import NumField from "../numField";
import Rect from "../rectangle";
import SubmitButton from "../submitButton";
import TextField from "../textField";
import "./index.css";

function MedicalInfo(props) {
  const [beforeBreakfast, setBeforeBreakfast] = useState("False");
  const [afterBreakfast, setAfterBreakfast] = useState("False");
  const [beforeLunch, setBeforeLunch] = useState("False");
  const [afterLunch, setAfterLunch] = useState("False");
  const [beforeDinner, setBeforeDinner] = useState("False");
  const [afterDinner, setAfterDinner] = useState("False");

  const onBeforeBreakfastChange = () => {
    if (beforeBreakfast === "False") {
      setBeforeBreakfast("True");
    } else {
      setBeforeBreakfast("False");
    }
  };
  const onAfterBreakfastChange = () => {
    if (afterBreakfast === "False") {
      setAfterBreakfast("True");
    } else {
      setAfterBreakfast("False");
    }
  };

  const onBeforeLunchChange = () => {
    if (beforeLunch === "False") {
      setBeforeLunch("True");
    } else {
      setBeforeLunch("False");
    }
  };
  const onAfterLunchChange = () => {
    if (afterLunch === "False") {
      setAfterLunch("True");
    } else {
      setAfterLunch("False");
    }
  };

  const onBeforeDinnerChange = () => {
    if (beforeDinner === "False") {
      setBeforeDinner("True");
    } else {
      setBeforeDinner("False");
    }
  };
  const onAfterDinnerChange = () => {
    if (afterDinner === "False") {
      setAfterDinner("True");
    } else {
      setAfterDinner("False");
    }
  };

  const MedicineCreate = (values) => {
    values.medicine_id = props.data.id;
    values.person = 1;
    values.before_breakfast = beforeBreakfast;
    values.after_breakfast = afterBreakfast;
    values.before_lunch = beforeLunch;
    values.after_lunch = afterLunch;
    values.before_dinner = beforeDinner;
    values.after_dinner = afterDinner;
    values.count = parseInt(values.count);
    values.dosage = parseInt(values.dosage);
    console.log(values);
    API_Manager.medicineCreate(values)
      .then((response) => {
        console.log(response);
        message.success(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Rect>
      <div className="medical-info-div">
        <h1>Medicine {props.data.id}</h1>
        <Form layout="vertical" hi onFinish={MedicineCreate}>
          <TextField name="name" data={{ placeholder: "Medicine Name" }} />
          <DescField name="description" data={{ placeholder: "Description" }} />
          <NumField name="count" data={{ placeholder: "Count" }} />
          <NumField name="dosage" data={{ placeholder: "Dosage" }} />
          <h5>Prescription</h5>
          <DropDownMenu name="repeat" />
          <div className="check-box-group-main-div">
            <Row justify="space-between" className="check-box-group">
              <Col span={12}>
                <CheckBoxField
                  checkChange={() => onBeforeBreakfastChange()}
                  name="before_breakfast"
                  data={{ label: "Before Breakfast" }}
                />
              </Col>
              <Col span={12}>
                <CheckBoxField
                  checkChange={() => onAfterBreakfastChange()}
                  name="after_breakfast"
                  data={{ label: "After Breakfast" }}
                />
              </Col>
            </Row>
            <Row justify="space-between" className="check-box-group">
              <Col span={12}>
                <CheckBoxField
                  checkChange={() => onBeforeLunchChange()}
                  name="before_lunch"
                  data={{ label: "Before Lunch" }}
                />
              </Col>
              <Col span={12}>
                <CheckBoxField
                  checkChange={() => onAfterLunchChange()}
                  name="after_lunch"
                  data={{ label: "After Lunch" }}
                />
              </Col>
            </Row>
            <Row justify="space-between" className="check-box-group">
              <Col span={12}>
                <CheckBoxField
                  checkChange={() => onBeforeDinnerChange()}
                  name="before_dinner"
                  data={{ label: "Before Dinner" }}
                />
              </Col>
              <Col span={12}>
                <CheckBoxField
                  checkChange={() => onAfterDinnerChange()}
                  name="after_dinner"
                  data={{ label: "After Dinner" }}
                />
              </Col>
            </Row>
          </div>
          <SubmitButton>Update</SubmitButton>
        </Form>
      </div>
    </Rect>
  );
}

export default MedicalInfo;
