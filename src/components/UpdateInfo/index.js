import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbars from "../Navbars";
import "./style.css";

const EditUser = (props) => {
  const pathname = props.location.pathname;
  const id = pathname.split("/")[2];

  const [user, setUser] = useState({
    active: "",
    name: "",
    designnumber: "",
    designname: "",
    productlink: "",
    vergino: "",
    adress: "",
  });

  useEffect(() => {
    let isSubscribed = true;
    axios.get(`http://localhost:5000/api/dava/${id}`).then((res) => {
      if (isSubscribed) {
        setUser({
          active: res.active,
          name: res.name,
          designnumber: res.designnumber,
          designname: res.designname,
          productlink: res.productlink,
          vergino: res.vergino,
          adress: res.adress,
        });
      }
      return () => (isSubscribed = false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputs = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const onEdit = (event) => {
    event.preventDefault();

    const userObject = {
      name: user.name,
      email: user.email,
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
      <Navbars />
      <div className="container">
        <Row className="justify-content-center">
          <Col lg={6}>
            <div className="form-wrapper m-4">
              <Form onSubmit={onEdit}>
                <Form.Group controlId="Name">
                  <Form.Label className="float-left font-weight-bold text-secondary">
                    Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={user.name}
                    onChange={handleInputs}
                    name="name"
                  />
                </Form.Group>

                <Form.Group controlId="deneme">
                  <Form.Label className="float-left font-weight-bold text-secondary">
                    Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={user.adress}
                    onChange={handleInputs}
                    name="name"
                  />
                </Form.Group>
                <Form.Group controlId="Name">
                  <Form.Label className="float-left font-weight-bold text-secondary">
                    Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={user.name}
                    onChange={handleInputs}
                    name="name"
                  />
                </Form.Group>

                <Form.Group controlId="deneme">
                  <Form.Label className="float-left font-weight-bold text-secondary">
                    Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={user.adress}
                    onChange={handleInputs}
                    name="name"
                  />
                </Form.Group>
                <Form.Group controlId="Name">
                  <Form.Label className="float-left font-weight-bold text-secondary">
                    Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={user.name}
                    onChange={handleInputs}
                    name="name"
                  />
                </Form.Group>

                <Form.Group controlId="deneme">
                  <Form.Label className="float-left font-weight-bold text-secondary">
                    Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={user.adress}
                    onChange={handleInputs}
                    name="name"
                  />
                </Form.Group>
                <Form.Group controlId="Email">
                  <Form.Label className="float-left font-weight-bold text-secondary">
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    defaultValue={user.email}
                    onChange={handleInputs}
                    name="email"
                  />
                </Form.Group>

                <Button variant="dark" size="lg" block="block" type="submit">
                  <i className="fas fa-user-edit mr-1"></i> Update User
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default EditUser;
