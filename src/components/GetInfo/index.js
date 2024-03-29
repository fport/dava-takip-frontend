import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import UserTableRow from "./UserTableRow";

const Main = () => {
  const [todo, setTodo] = useState({
    dava: [],
  });

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    let isSubscribed = true;
    await axios.get(`${process.env.REACT_APP_API_URL}/api/dava`).then((res) => {
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
          <div className="cardx">{DataTable()}</div>
        </div>
      </div>
    </>
  );
};

export default Main;
