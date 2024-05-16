import { Collapse } from "antd";
import Rect from "../rectangle";

import "./index.css";
import UserInfoContent from "./userInfoContent";

const { Panel } = Collapse;

const UserInfo = () => {
  return (
    <>
      {/* <Rect>
        <div className="user-info-div">
          <span className="user-info-span">User Info</span>
        </div>
      </Rect> */}
      <Rect>
        <Collapse className="collapse-class" ghost>
          <Panel header="User Info" showArrow={false}>
            <UserInfoContent />
          </Panel>
        </Collapse>
      </Rect>
    </>
  );
};

export default UserInfo;
