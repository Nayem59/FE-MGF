import React from "react";
import { FaEdit } from "react-icons/fa";

const AllContacts = () => {
  return (
    <div className="all-contacts">
      <h2>All Contacts</h2>
      <div className="contacts-container">
        <table class="contacts-table">
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
            <tr>
              <td>1</td>
              <td>Simohamed</td>
              <td>Akniouene</td>
              <td>akniouene.s@example.com</td>
              <td>Example Design Ltd</td>
              <td>
                <FaEdit />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllContacts;
