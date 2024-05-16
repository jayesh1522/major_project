import Rect from "../rectangle";
import "./index.css";

function AddButton() {
  return (
    <div>
      <Rect>
        <div className="add-medicine-btn">
          <span className="add-medicine-span-btn">Add Medicine</span>
        </div>
      </Rect>
    </div>
  );
}

export default AddButton;
