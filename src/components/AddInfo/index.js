import { useState } from "react";
import axios from "axios";
import "./style.css";
import { Container, Row, Col, Form } from "react-bootstrap";

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

  const [social, setSocial] = useState([
    { medya: "facebook", active1: true, active2: false },
  ]);

  const onAddBtnClick = (event) => {
    console.log(event);
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

  const handleOnChangex = (e) => {
    let reverse = !dava.social;
    setDava((prevState) => ({
      ...prevState,
      social: reverse,
    }));
  };
  const addDava = async (e) => {
    e.preventDefault();

    await axios.post(`${process.env.REACT_APP_API_URL}/api/dava`, {
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

  return (
    <>
      <div className="sayfa-bilgilendirme">
        <h1>Dava Ekleme</h1>
      </div>
      <div className="containerx">
        <div className="row">
          <Container>
            <Row>
              <Col>
                <div className="grup">
                  <div className="form-group">
                    <div>
                      <select id="cars">
                        <option value="Volvo">Volvo</option>
                        <option value="Saab">Saab</option>
                        <option value="Opel">Opel</option>
                        <option value="Audi">Audi</option>
                      </select>
                      <button onClick={onAddBtnClick}>Ekle</button>
                    </div>
                    {social.map((val, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          border: "1px solid white",
                          margin: "2px",
                          padding: "1px",
                          flexDirection: "column",
                        }}
                      >
                        <input
                          style={{ height: "4px" }}
                          placeholder="Your input here"
                        />
                        <div>
                          <label htmlFor="active">hesap aktif mi</label>
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Check this switch"
                            checked={val.active1}
                            onChange={handleOnChangex}
                          />
                          <label htmlFor="active">Kullanılmısmı</label>
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Check this switch"
                            checked={val.active2}
                            onChange={handleOnChangex}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grup">
                  <div className="form-group">
                    <label htmlFor="active">Dava Aktif mi?</label>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="active"
                      checked={dava.active}
                      onChange={handleOnChange}
                    />
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      checked={dava.social}
                      label="Check this switch"
                      onChange={handleOnChangex}
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
                <div className="grup">
                  <div className="form-group">
                    <div className="aktif-checkbox"></div>
                    <label htmlFor="active">Sosyal Medya</label>
                    <select name="dropdown">
                      <option value="Computer Architecture" selected>
                        Computer Architecture
                      </option>
                      <option value="Java">Java</option>
                      <option value="Discrete Mathematics">
                        Discrete Mathematics
                      </option>
                    </select>

                    <label htmlFor="adress">facebook</label>
                    <input
                      className="input-box"
                      type="text"
                      placeholder="facebook"
                      name="facebook"
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      checked={dava.social}
                      label="Hesabı var"
                      onChange={handleOnChangex}
                    />
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      checked={dava.social}
                      label="Sergilenmiş"
                      onChange={handleOnChangex}
                    />
                    <label htmlFor="adress">instagram</label>
                    <input
                      className="input-box"
                      type="text"
                      placeholder="instagram"
                      name="facebook"
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      checked={dava.social}
                      label="Check this switch"
                      onChange={handleOnChangex}
                    />
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      checked={dava.social}
                      label="Check this switch"
                      onChange={handleOnChangex}
                    />
                  </div>
                </div>
              </Col>
              <Col>
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
              </Col>
            </Row>
          </Container>
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
