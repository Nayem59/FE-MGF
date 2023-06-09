import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postContact } from "../api/api";

const NewContact = () => {
  const navigate = useNavigate();
  const [companyId, setCompanyId] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleBack = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactObj = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      company_id: companyId,
    };

    if (
      contactObj.firstname &&
      contactObj.lastname &&
      contactObj.email &&
      contactObj.company_id
    ) {
      postContact(contactObj).then((contact) => {
        handleBack();
      });
    }
  };

  const handleSelect = (e) => {
    setCompanyId(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h2>Add a new Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" onChange={handleFirstName} />
        </label>
        <label>
          Last Name:
          <input type="text" onChange={handleLastName} />
        </label>
        <label>
          Email:
          <input type="text" onChange={handleEmail} />
        </label>
        <label>
          Select Company:
          <select value={companyId} onChange={handleSelect}>
            <option value={1}>Test Design Ltd</option>
            <option value={2}>Untitled Construction Ltd</option>
            <option value={3}>PlaceHolder Service Ltd</option>
            <option value={4}>PlaceHolder Excavation PLC</option>
            <option value={5}>Example Excavation PLC</option>
            <option value={6}>Test Building PLC</option>
            <option value={7}>Example Construction PLC</option>
            <option value={8}>Example Design Ltd</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={handleBack}>back</button>
    </div>
  );
};

export default NewContact;
