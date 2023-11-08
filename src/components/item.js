function Item({ id, name, status }) {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{status}</td>
      <td>
        <button type="button" class="btn btn-outline-primary">
          Show
        </button>
      </td>
    </tr>
  );
}

export default Item;
