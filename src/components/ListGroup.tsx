function ListGroup() {
  const items = ["Starc", "Steve", "Green", "Warner", "Head"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, i) => {
          return (
            <li key={i} className="list-group-item">
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
