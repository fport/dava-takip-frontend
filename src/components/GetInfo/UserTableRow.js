import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

const UserTableRow = (props) => {
  const id = props.obj._id;
  const deleteUser = () => {
    axios
      .delete(`http://localhost:5000/api/dava/${id}`)
      .then((res) => {
        console.log("User deleted successfully");
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <tr>
        <td>{props.obj.name}</td>
        <td>{props.obj.email}</td>
        <td>
          <Link
            className="edit-link btn btn-dark btn-sm mr-1"
            to={`/edit/${id}`}
          >
            <i className="fa fa-edit text-info"></i>Edit
          </Link>
          <Button onClick={deleteUser} size="sm" variant="dark">
            <i className="fa fa-trash text-danger"></i> Delete
          </Button>
        </td>
      </tr>
    </>
  );
};

export default UserTableRow;
