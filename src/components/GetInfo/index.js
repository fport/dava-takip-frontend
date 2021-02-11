import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const Main = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    const todox = await axios.get(`http://localhost:5000/api/dava`);
    setTodo(todox.data.dava);
  };

  return (
    <div>
      <div className="container">
        {todo.map((item) => (
          <div className="davake" key={item._id}>
            <p>hirsiz isim : {item.name}</p>
            <p>email : {item.email}</p>
            <p>design number : {item.entrollnumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
