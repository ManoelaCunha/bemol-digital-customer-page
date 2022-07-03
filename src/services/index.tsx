import axios from "axios";

const customersApi = axios.create({
  baseURL: "https://bemol-digital-customers-api.herokuapp.com/",
});

const cepApi = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export { cepApi, customersApi };
