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
      .delete(`${process.env.REACT_APP_API_URL}/api/dava/${id}`)
      .then((res) => {
        console.log("User deleted successfully");
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeHirsiz = (e) => {
    setScreen(["active", "name"]);
  };
  const changeUrun = (e) => {
    setScreen(["designnumber", "designname", "productlink"]);
  };
  const changeKurumsal = (e) => {
    setScreen([
      "vergino",
      "adress",
      "ticarisicil",
      "telefonno",
      "email",
      "domainregistrantaddress",
      "tpekayitlimarka",
      "notlar",
    ]);
  };

  const changeTasarım = (e) => {
    setScreen(["calinantasarim", "sergilendigiyer", "tahminisatis"]);
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
        <button className="dava-btn" onClick={changeTasarım}>
          Tasarım Bilgileri
        </button>
      </div>
      <div className="rightPanel">
        <div className="content">
          <div className="data">
            <div>
              {screen.map((data, index) =>
                data === "active" ? (
                  <div key={index} className="info">
                    <h5 className="info-text">{data} : </h5>
                    <input
                      className="info-text"
                      type="checkbox"
                      checked={props.obj[data]}
                    />
                  </div>
                ) : (
                  <div key={index} className="info">
                    <h5 className="info-text">{data} : </h5>
                    <div className="info-text">{props.obj[data]}</div>
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
