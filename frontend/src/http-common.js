import axios from "axios";

export default axios.create({
    baseURL: "https://voyagee-travel.herokuapp.com/api",
    headers: {
        "Content-type": "application/json"
    }
});