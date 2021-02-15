import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "./style.css";
import { Navbar } from "../index";

const EditUser = (props) => {
  const pathname = props.location.pathname;
  const id = pathname.split("/")[2];

  const [active, setActive] = useState(true);
  const [name, setName] = useState("");
  const [designnumber, setDesignnumber] = useState("");
  const [designname, setDesignname] = useState("");
  const [productlink, setProductlink] = useState("");
  const [vergino, setVergino] = useState("");
  const [adress, setAdress] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/dava/${id}`).then((res) => {
      setActive(res.data.student.active);
      setName(res.data.student.name);
      setDesignnumber(res.data.student.designnumber);
      setDesignname(res.data.student.designname);
      setProductlink(res.data.student.productlink);
      setVergino(res.data.student.vergino);
      setAdress(res.data.student.adress);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEdit = (event) => {
    event.preventDefault();

    const userObject = {
      active: active,
      name: name,
      designnumber: designnumber,
      designname: designname,
      productlink: productlink,
      vergino: vergino,
      adress: adress,
    };
    axios
      .put(`http://localhost:5000/api/dava/${id}`, userObject)
      .then((res) => {
        console.log("User updated successfully");
      })
      .catch((err) => {
        console.log(err);
      });

    // // Redirect to User List
    props.history.push("/main");
  };

  return (
    <>
      <Navbar />
      <div className="sayfa-bilgilendirme">
        <h1>Dava Güncelleme</h1>
      </div>
      <div className="containerx">
        <div className="formlar">
          <div className="row">
            <div className="grup">
              <div className="form-group">
                <div className="aktif-checkbox"></div>
                <label htmlFor="active">Dava Aktif mi?</label>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  checked={active}
                  onClick={() => setActive(!active)}
                />
              </div>
            </div>
            <div className="grup">
              <div className="form-group">
                <label htmlFor="name">Hırsızın Ismi / Markası</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="İsim Soyisim veya Markanin ismini giriniz."
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
            </div>
            <div className="grup">
              <div className="form-group">
                <label htmlFor="email">Design Number</label>
                <input
                  className="input-box"
                  id="designnumber"
                  placeholder="design number"
                  onChange={(e) => setDesignnumber(e.target.value)}
                  value={designnumber}
                />
                <label htmlFor="designname">Design name</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="design name "
                  onChange={(e) => setDesignname(e.target.value)}
                  value={designname}
                />
                <label htmlFor="productlink">Product link</label>
                <input
                  className="input-box"
                  type="text"
                  id="productlink"
                  placeholder="productlink"
                  onChange={(e) => setProductlink(e.target.value)}
                  value={productlink}
                />
              </div>
            </div>
            <div className="grup">
              <div className="form-group">
                <label htmlFor="vergino">Vergi no</label>
                <input
                  className="input-box"
                  type="text"
                  value={vergino}
                  id="vergi"
                  placeholder="Vergi no"
                  onChange={(e) => setVergino(e.target.value)}
                />
                <label htmlFor="adres">Adress</label>
                <input
                  className="input-box"
                  type="text"
                  value={adress}
                  placeholder="Adress"
                  onChange={(e) => setAdress(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dava-but">
          <Button variant="dark" size="lg" block="block" onClick={onEdit}>
            <i className="fas fa-user-edit mr-1"></i> Update User
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditUser;
