import React from "react";
import "./index.css";
import Dot from "./dot";

function MedicalPanel({ data }) {
    console.log(data);
    const dotColorFilter = (value) => {
        if (value === null) {
            return "#fff";
        } else if (value === "true" || value === "True" || value === "1") {
            return "#01F219";
        } else if (value === "false" || value === "False" || value === "0") {
            return "#ff0000";
        }
    };
    return ( <
        div className = "panel-content" >
        <
        div className = "panel-row" >
        <
        span className = "panel-col" >
        <
        Dot color = { dotColorFilter(data.before_breakfast) }
        />
        Before BreakFast <
        /span>

        <
        span className = "panel-col" >
        <
        Dot color = { dotColorFilter(data.after_breakfast) }
        />
        After BreakFast <
        /span> < /
        div >

        <
        div className = "panel-row" >
        <
        span className = "panel-col" >
        <
        Dot color = { dotColorFilter(data.before_lunch) }
        />
        Before Lunch <
        /span>

        <
        span className = "panel-col" >
        <
        Dot color = { dotColorFilter(data.after_lunch) }
        />
        After Lunch <
        /span> < /
        div >

        <
        div className = "panel-row" >
        <
        span className = "panel-col" >
        <
        Dot color = { dotColorFilter(data.before_dinner) }
        />
        Before Dinner <
        /span>

        <
        span className = "panel-col" >
        <
        Dot color = { dotColorFilter(data.after_dinner) }
        />
        After Dinner <
        /span> < /
        div > <
        /div>
    );
}

export default MedicalPanel;