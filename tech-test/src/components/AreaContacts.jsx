import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAreaContacts } from "../api/api";

const AreaContacts = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getAreaContacts()
      .then((data) => {
        setCompanies(data);
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

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Area Report</h2>
      <div className="contacts-container">
        <table className="contacts-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Company Name</th>
              <th>Area</th>
              <th>Contacts</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => {
              return (
                <tr key={company.company_id}>
                  <td>{company.company_id}</td>
                  <td>{company.name}</td>
                  <td>{company.area}</td>
                  <td>{company.contact_count}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button onClick={handleBack} className="back">back</button>
    </div>
  );
};

export default AreaContacts;
