import { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    const todox = await axios.get(`http://localhost:5000/api/todo`);
    setTodo(todox.data.data);
  };

  return (
    <div>
      <div className="container">
        {todo.map((item) => (
          <div key={item._id}>{item.todo}</div>
        ))}
      </div>
    </div>
  );
};

export default Main;
