/*eslint-disable*/
import { useState } from "react";
import axios from "axios";
import "./style.css";

const AddInfo = () => {
  const [active, setActive] = useState(true);
  const [name, setName] = useState("");
  const [designnumber, setDesignnumber] = useState("");
  const [designname, setDesignname] = useState("");
  const [productlink, setProductlink] = useState("");
  const [vergino, setVergino] = useState("");
  const [adress, setAdress] = useState("");

  const addDava = async (e) => {
    e.preventDefault();

    const url = "http://localhost:5000";

    const res = await axios.post(`${url}/api/dava`, {
      active: active,
      name: name,
      designnumber: designnumber,
      designname: designname,
      productlink: productlink,
      vergino: vergino,
      adress: adress,
    });

    setName("");
    setDesignnumber("");
    setDesignname("");
    setProductlink("");
    setVergino("");
    setAdress("");
  };

  const handleOnChange = (e) => {
    setActive(false);
  };

  return (
    <>
      <div className="containerx">
        <div className="formlar">
          <div className="row">
            <div className="grup">
              <div className="form-group">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  checked={active}
                  onChange={handleOnChange}
                ></input>
              </div>
            </div>
            <div className="grup">
              <div className="form-group">
                <label htmlFor="name">Hırsızın Ismi / Markası</label>
                <input
                  className="input-box"
                  type="text"
                  required
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
                  required
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
        <button type="submit" className="btn but" onClick={addDava}>
          Submit
        </button>
      </div>
    </>
  );
};

export default AddInfo;
