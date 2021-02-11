import { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

const AddInfo = () => {
  const [dava, setDava] = useState("");

  const addDava = async (e) => {
    e.preventDefault();

    const url = "http://localhost:5000";

    const res = await axios.post(`${url}/api/todo`, {
      todo: dava,
    });
  };

  return (
    <>
      <div className="container">
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Todo</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setDava(e.target.value)}
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
