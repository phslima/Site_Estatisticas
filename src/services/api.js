import axios from "axios";

const api = axios.create({
  baseURL: "https://apiestatisticas.pet.inf.ufes.br/",
});

export default api;
