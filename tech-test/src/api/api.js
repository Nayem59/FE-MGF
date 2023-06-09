import axios from "axios";

const beMGF = axios.create({
  baseURL: "http://localhost:9090/api",
});

export const getContacts = () => {
  return beMGF.get("/contacts").then(({ data }) => {
    return data.contacts;
  });
};

export const getContact = (id) => {
  return beMGF.get(`/contacts/${id}`).then(({ data }) => {
    return data.contact;
  });
};

export const postContact = (obj) => {
  return beMGF.post("/contacts", obj).then(({ data }) => {
    return data.contact;
  });
};

export const patchContact = (id, obj) => {
  return beMGF.patch(`/contacts/${id}`, obj).then(({ data }) => {
    return data.contact;
  });
};

export const getAreaContacts = () => {
  return beMGF.get("/area").then(({ data }) => {
    return data.companies;
  });
};
