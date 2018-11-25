import axios from "axios";

export const api = axios.create({
  baseURL: "https://conduit.productionready.io/api"
});

export function setJwt(jwt) {
  api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function clearJwt() {
  delete api.defaults.headers.common["Authorization"];
}
