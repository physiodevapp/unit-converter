import http from "./base-api";

const list = () => http.get("/measures");

const create = (measure) => http.post("/measures/new", measure);

const erase = (measureId) => http.delete(`/measures/${measureId}`);

export default {
  list,
  create,
  erase,
};
