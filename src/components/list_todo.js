import Item from "./item";
import axios from "axios";
import { useState, useEffect } from "react";

function LisTodo() {
  let [listTodos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      .then(function (response) {
        let todos = response.data;
        setTodos([...todos]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  let datas = listTodos.map((item, index) => {
    return <Item key={index} {...item} />;
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>{datas}</tbody>
    </table>
  );
}
export default LisTodo;
