import React from "react";
import { Button } from "../styled";

const data = [
  {
    name: "Dusyant",
    surname: "Goolab",
    email: "dusyant@mail.com",
    jobTitle: "React Developer",
    status: "ACTIVE",
    birthDate: "3/9/1993",
  },
  {
    name: "John",
    surname: "Doe",
    email: "john@mail.com",
    jobTitle: "Java Developer",
    status: "ACTIVE",
    birthDate: "21/11/1995",
  },
];

const EmployeeList = () => {
  return (
    <div className="App">
      <table>
        <tr>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Job Title</th>
          <th>Status</th>
          <th>Birth Date</th>
          <th> - </th>
          <th> - </th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.surname}</td>
              <td>{val.email}</td>
              <td>{val.jobTitle}</td>
              <td>{val.status}</td>
              <td>{val.birthDate}</td>
              <td>
                <Button data-cy="edit-record">Edit</Button>
              </td>
              <td>
                <Button data-cy="delete-record">Delete</Button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default EmployeeList;
