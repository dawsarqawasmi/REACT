function ListGroup() {
  let items = ["New York", "San Francesico", "Tokyo", "amman"];
  return (
    <>
      <h1>list</h1>
      {items.length == 0 && <p> No Items Available</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      ;
    </>
  );
}

export default ListGroup;
