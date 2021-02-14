/*eslint-disable*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "./style.css";

const UserTableRow = (props) => {
  const [screen, setScreen] = useState("name");

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

  const changeState = (e) => {
    setScreen("email");
  };
  const changeStatex = (e) => {
    setScreen("name");
  };
  // const deneme = `props.obj.${screen}`;
  // console.log(deneme);

  console.log(screen);
  return (
    <div className="mainContainer">
      <div className="leftPanel">
        <button className="dava-btn" onClick={changeStatex}>
          Name
        </button>
        <button className="dava-btn" onClick={changeState}>
          Email
        </button>
      </div>
      <div className="rightPanel">
        <div className="content">
          <div className="data">{props.obj.name}</div>
          <div className="rightPanelBottom">
            <Link
              className="edit-link btn btn-dark btn-sm mr-1"
              to={`/edit/${id}`}
            >
              <i className="fa fa-edit text-info"></i>Edit
            </Link>
            <Button onClick={deleteUser} size="sm" variant="dark">
              <i className="fa fa-trash text-danger"></i> Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTableRow;
