import DateField from "../../dateField";
import TextField from "../../textField";
import TimeField from "../../timeField";
import SubmitButton from "../../submitButton";
import API_Manager from "../../../API/MediboxAPI";
import { Form, message } from "antd";
import moment from "moment";

import "./index.css";

function UserInfoContent() {
    const UserCreate = (values) => {
        values.user_id = 1;
        values.dob = moment(values.dob).format("YYYY-MM-DD");
        values.breakfast = moment(values.breakfast).format("HH:mm:ss");
        values.lunch = moment(values.lunch).format("HH:mm:ss");
        values.dinner = moment(values.dinner).format("HH:mm:ss");
        console.log(values);
        API_Manager.userCreate(values)
            .then((response) => {
                console.log(response);
                message.success(response.data.message);
            })
            .catch((error) => {
                console.log(error);
                message.error(error.data.message);
            });
    };
    return ( <
        div className = "user-info-content-div" >
        <
        Form layout = "vertical"
        hideRequiredMark onFinish = { UserCreate } >
        <
        TextField name = "name"
        data = {
            { placeholder: "Name" }
        }
        /> <
        TextField name = "email"
        data = {
            { placeholder: "Email" }
        }
        /> <
        DateField name = "dob"
        data = {
            { placeholder: "Date of Birth" }
        }
        /> <
        h6 className = "user-info-subhead" > Timings < /h6> <
        TimeField data = {
            { placeholder: "Wake Time" }
        }
        /> <
        TimeField data = {
            { placeholder: "Sleep Time" }
        }
        /> <
        TimeField name = "breakfast"
        data = {
            { placeholder: "Breakfast Time" }
        }
        /> <
        TimeField name = "lunch"
        data = {
            { placeholder: "Lunch Time" }
        }
        /> <
        TimeField name = "dinner"
        data = {
            { placeholder: "Dinner Time" }
        }
        /> <
        SubmitButton > Update < /SubmitButton> < /
        Form > <
        /div>
    );
}

export default UserInfoContent;