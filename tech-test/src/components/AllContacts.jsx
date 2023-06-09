import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { getContacts } from "../api/api";
import { Link } from "react-router-dom";

const AllContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getContacts()
      .then((data) => {
        setContacts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.message);
        setIsLoading(false);
      });
  }, []);

  if (err) {
    return <h2>{err}</h2>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="all-contacts">
      <h2>All Contacts</h2>
      <div className="contacts-container">
        <table className="contacts-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              return (
                <tr key={contact.contact_id}>
                  <td>{contact.contact_id}</td>
                  <td>{contact.firstname}</td>
                  <td>{contact.lastname}</td>
                  <td>{contact.email}</td>
                  <td>{contact.company.name}</td>
                  <td>
                    <Link to={`/editcontact/${contact.contact_id}`} className="link">
                      <FaEdit size="25px" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllContacts;
