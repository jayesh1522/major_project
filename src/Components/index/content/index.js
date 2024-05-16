import { Button } from "antd";
import { useState } from "react";
import AddButton from "../../addButton";
import MedicalInfo from "../../medicalInfo";
import MedicalRecord from "../../medicalRecord";
import UserInfo from "../../userInfo";

import "./index.css";

function MainContent() {
  const [index, setIndex] = useState(1);
  const [medicine, setMedicine] = useState([<MedicalInfo data={{ id: 1 }} />]);

  const addMedicine = () => {
    if (index + 1 <= 6) {
      setMedicine([...medicine, <MedicalInfo data={{ id: index + 1 }} />]);
      setIndex(index + 1);
    }
  };
  return (
    <div className="content-center-class">
      <div className="content-class">
        <UserInfo />
        <MedicalRecord />
        {medicine}
        <Button
          type="text"
          size="large"
          onClick={() => addMedicine()}
          className="add-btn-class"
        >
          {index + 1 <= 6 ? <AddButton /> : ""}
        </Button>
      </div>
    </div>
  );
}

export default MainContent;
