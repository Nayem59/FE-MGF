import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getContact, patchContact } from "../api/api";

const EditContact = () => {
  const navigate = useNavigate();
  const { contact_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");

  const [companyId, setCompanyId] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getContact(contact_id)
      .then((data) => {
        setCompanyId(data.company.id);
        setFirstName(data.firstname);
        setLastName(data.lastname);
        setEmail(data.email);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.message);
        setIsLoading(false);
      });
  }, [contact_id]);

  const handleBack = () => {
    navigate("/");
  };

  if (err) {
    return <h2>{err}</h2>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

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
      patchContact(contact_id, contactObj).then((contact) => {
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
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={handleFirstName} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastName} />
        </label>
        <label>
          Email:
          <input type="text" value={email} onChange={handleEmail} />
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
        <input type="submit" value="Save" />
      </form>
      <button onClick={handleBack}>back</button>
    </div>
  );
};

export default EditContact;
