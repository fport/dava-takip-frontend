import { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import "./style.css";

const AddInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [entrollnumber, setEntrollnumber] = useState("");

  const addDava = async (e) => {
    e.preventDefault();

    const url = "http://localhost:5000";

    const res = await axios.post(`${url}/api/dava`, {
      name: name,
      email: email,
      entrollnumber: entrollnumber,
    });

    setName("");
    setEmail("");
    setEntrollnumber("");
  };

  return (
    <>
      <div className="container">
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="deneme">Hirsiz ismi - Marka</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Label>Design number</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setEntrollnumber(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={addDava}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddInfo;
