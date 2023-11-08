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
    <>
      <h1>Todos Management</h1>
      <div className="row">
        <div className="col-7"></div>
        <div className="col-5">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="search..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-2">
        <button type="button" class="btn btn-outline-success">
          Create
        </button>
      </div>

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
    </>
  );
}
export default LisTodo;
