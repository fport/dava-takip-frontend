import { useState } from "react";
import axios from "axios";
import "./style.css";

const AddInfo = () => {
  const [dava, setDava] = useState({
    active: false,
    name: "",
    designnumber: "",
    designname: "",
    productlink: "",
    vergino: "",
    adress: "",
    ticarisicil: "",
    telefonno: "",
    email: "",
    domainregistrantaddress: "",
    tpekayitlimarka: "",
    notlar: "",
    calinantasarim: "",
    sergilendigiyer: "",
    tahminisatis: "",
  });

  const addDava = async (e) => {
    e.preventDefault();

    const url = "http://localhost:5000";

    await axios.post(`${url}/api/dava`, {
      active: dava.active,
      name: dava.name,
      designnumber: dava.designnumber,
      designname: dava.designname,
      productlink: dava.productlink,
      vergino: dava.vergino,
      adress: dava.adress,
      ticarisicil: dava.ticarisicil,
      telefonno: dava.telefonno,
      email: dava.email,
      domainregistrantaddress: dava.domainregistrantaddress,
      tpekayitlimarka: dava.tpekayitlimarka,
      notlar: dava.notlar,
      calinantasarim: dava.calinantasarim,
      sergilendigiyer: dava.sergilendigiyer,
      tahminisatis: dava.tahminisatis,
    });

    setDava({
      active: false,
      name: "",
      designnumber: "",
      designname: "",
      productlink: "",
      vergino: "",
      adress: "",
      ticarisicil: "",
      telefonno: "",
      email: "",
      domainregistrantaddress: "",
      tpekayitlimarka: "",
      notlar: "",
      calinantasarim: "",
      sergilendigiyer: "",
      tahminisatis: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDava((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnChange = (e) => {
    let reverse = !dava.active;
    setDava((prevState) => ({
      ...prevState,
      active: reverse,
    }));
  };

  return (
    <>
      <div className="sayfa-bilgilendirme">
        <h1>Dava Ekleme</h1>
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
                  name="active"
                  checked={dava.active}
                  onChange={handleOnChange}
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
                  onChange={handleChange}
                  name="name"
                  value={dava.name}
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
                  onChange={handleChange}
                  name="designnumber"
                  value={dava.designnumber}
                />
                <label htmlFor="designname">Design name</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="design name "
                  name="designname"
                  onChange={handleChange}
                  value={dava.designname}
                />
                <label htmlFor="productlink">Product link</label>
                <input
                  className="input-box"
                  type="text"
                  id="productlink"
                  placeholder="productlink"
                  name="productlink"
                  onChange={handleChange}
                  value={dava.productlink}
                />
              </div>
            </div>
            <div className="grup">
              <div className="form-group">
                <label htmlFor="vergino">Vergi no</label>
                <input
                  className="input-box"
                  type="text"
                  id="vergi"
                  placeholder="Vergi no"
                  name="vergino"
                  onChange={handleChange}
                  value={dava.vergino}
                />
                <label htmlFor="adress">Adress</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="Adress"
                  name="adress"
                  onChange={handleChange}
                  value={dava.adress}
                />
                <label htmlFor="adress">Ticari Sicil No</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="Ticari Sicil No"
                  name="ticarisicil"
                  onChange={handleChange}
                  value={dava.ticarisicil}
                />
                <label htmlFor="adress">Telefon No</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="Telefon No"
                  name="telefonno"
                  onChange={handleChange}
                  value={dava.telefonno}
                />
                <label htmlFor="adress">Email</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="email"
                  name="email"
                  onChange={handleChange}
                  value={dava.email}
                />
                <label htmlFor="adress">Domain Registrant Address</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="domainregistrantaddress"
                  name="domainregistrantaddress"
                  onChange={handleChange}
                  value={dava.domainregistrantaddress}
                />
                <label htmlFor="adress">TPE Kayıtlı Marka</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="tpekayitlimarka"
                  name="tpekayitlimarka"
                  onChange={handleChange}
                  value={dava.tpekayitlimarka}
                />
                <label htmlFor="adress">notlar</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="notlar"
                  name="notlar"
                  onChange={handleChange}
                  value={dava.notlar}
                />
              </div>
            </div>
            <div className="grup">
              <div className="form-group">
                <label htmlFor="adress">Calinan Tasarım</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="calinantasarim"
                  name="calinantasarim"
                  onChange={handleChange}
                  value={dava.calinantasarim}
                />
                <label htmlFor="adress">sergilendigiyer</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="sergilendigiyer"
                  name="sergilendigiyer"
                  onChange={handleChange}
                  value={dava.sergilendigiyer}
                />
                <label htmlFor="adress">tahminisatis</label>
                <input
                  className="input-box"
                  type="text"
                  placeholder="tahminisatis"
                  name="tahminisatis"
                  onChange={handleChange}
                  value={dava.tahminisatis}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dava-but">
          <button type="submit" className="dava-buton" onClick={addDava}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddInfo;
