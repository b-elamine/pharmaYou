import axios from "axios";

const instance = axios.create({
  baseURL: "https://ordo.pharmayou.fr:3003/",
});

export default instance;
