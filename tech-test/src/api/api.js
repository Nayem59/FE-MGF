import axios from "axios";

const beMGF = axios.create({
  baseURL: "http://localhost:9090/api",
});

export const getContacts = () => {
  return beMGF.get("/contacts").then(({ data }) => {
    return data.contacts;
  });
};
