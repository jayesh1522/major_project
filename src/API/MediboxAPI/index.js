import HELPERS from "../../utils/helper";

 const baseURL = "https://medicinebox.pythonanywhere.com";
//const baseURL = "http://127.0.0.1:8000/";
// const baseURL = "https://medicaldispenser.pythonanywhere.com";

const API_Manager = {
    userCreate: (data) => {
        return HELPERS.request({
            baseURL: baseURL,
            url: `/user/`,
            method: "POST",
            data: data,
        });
    },

    medicineCreate: (data) => {
        return HELPERS.request({
            baseURL: baseURL,
            url: `/medicine/`,
            method: "POST",
            data: data,
        });
    },

    medicalRecord: (data) => {
        return HELPERS.request({
            baseURL: baseURL,
            url: `/record?date=${data}`,
            method: "GET",
            data: data,
        });
    },
};

export default API_Manager;