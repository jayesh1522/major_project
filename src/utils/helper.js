import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

let HELPERS = {
  log: (...args) => {
    if (process.env.NODE_ENV !== "production") {
      console.log("$$edly$$", ...args);
    }
  },
  error: (...args) => {
    if (process.env.NODE_ENV !== "production") {
      console.error("$$edly$$", ...args);
    }
  },
  getCookie: (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  },
  request: (config) => {
    config.headers = config.headers ? config.headers : {};
    const csrfTokenEl = document.querySelector("[name=csrfmiddlewaretoken]");
    const csrfToken =
      HELPERS.getCookie("csrftoken") || (csrfTokenEl && csrfTokenEl.value);
    if (csrfToken) {
      config.headers["X-CSRFToken"] = csrfToken;
    }

    console.log("$$medibox$$", config);
    return axios
      .request(config)
      .then((response) => {
        console.log("in resp");
        return response;
      })
      .catch((err) => {
        console.log("err in helper...................", err);
        throw err;
      });
  },
  secureRequest: (config) => {
    config.headers = config.headers ? config.headers : {};
    const token = JSON.parse(
      localStorage.getItem("userAdminInfo")
    ).access_token;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return HELPERS.request(config);
  },
  studentSecureRequest: (config) => {
    config.headers = config.headers ? config.headers : {};
    const token = JSON.parse(localStorage.getItem("userStudentInfo")).data
      .access_token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return HELPERS.request(config);
  },
  debounce: (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  },
  debounceFormChanges: (func) => {
    return HELPERS.debounce(func, 1000);
  },
  getFirstName: () => localStorage.getItem("first_name"),
  getLastName: () => localStorage.getItem("last_name"),

  converToFormData: (obj, rootName, ignoreList) => {
    var formData = new FormData();
    function appendFormData(data, root) {
      if (!ignore(root)) {
        root = root || "";
        if (data instanceof File) {
          formData.append(root, data);
        } else if (Array.isArray(data)) {
          for (var i = 0; i < data.length; i++) {
            appendFormData(data[i], root + "[" + i + "]");
          }
        } else if (typeof data === "object" && data) {
          for (var key in data) {
            if (data.hasOwnProperty(key)) {
              if (root === "") {
                appendFormData(data[key], key);
              } else {
                appendFormData(data[key], root + "." + key);
              }
            }
          }
        } else {
          if (data !== null && typeof data !== "undefined") {
            formData.append(root, data);
          }
        }
      }
    }
    function ignore(root) {
      return (
        Array.isArray(ignoreList) &&
        ignoreList.some(function (x) {
          return x === root;
        })
      );
    }
    appendFormData(obj, rootName);
    return formData;
  },
};

export default HELPERS;
