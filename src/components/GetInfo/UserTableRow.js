/*eslint-disable*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "./style.css";

const UserTableRow = (props) => {
  const [screen, setScreen] = useState(["name"]);

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

  const changeHirsiz = (e) => {
    setScreen(["name"]);
  };
  const changeUrun = (e) => {
    setScreen(["designnumber", "designname", "active"]);
  };
  const changeKurumsal = (e) => {
    setScreen(["productlink", "vergino", "adress"]);
  };
  return (
    <div className="mainContainer">
      <div className="leftPanel">
        <button className="dava-btn" onClick={changeHirsiz}>
          Hırsızın İsmi / Markası
        </button>
        <button className="dava-btn" onClick={changeUrun}>
          Ürünler
        </button>
        <button className="dava-btn" onClick={changeKurumsal}>
          Hırsızın Kurumsal Bilgileri
        </button>
      </div>
      <div className="rightPanel">
        <div className="content">
          <div className="data">
            <div>
              {screen.map((data, index) =>
                data == "active" ? (
                  <div
                    key={index}
                    style={{ border: "1px solid green", padding: "0.5rem" }}
                  >
                    <input type="checkbox" checked={props.obj[data]} />
                  </div>
                ) : (
                  <div
                    key={index}
                    style={{ border: "1px solid green", padding: "0.5rem" }}
                  >
                    <h5 style={{ color: "white" }}>{data}</h5>
                    {props.obj[data]}
                  </div>
                )
              )}
            </div>
          </div>
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
