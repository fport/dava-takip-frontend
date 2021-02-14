import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import UserTableRow from "./UserTableRow";
import Table from "react-bootstrap/Table";

const Main = () => {
  const [todo, setTodo] = useState({
    dava: [],
  });

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    let isSubscribed = true;
    await axios.get(`http://localhost:5000/api/dava`).then((res) => {
      if (isSubscribed) {
        setTodo({
          dava: res.data.dava,
        });
      }
    });
  };

  const DataTable = () => {
    return todo.dava.map((res, i) => {
      return <UserTableRow obj={res} key={i} />;
    });
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="table-wrapper m-4">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{DataTable()}</tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
