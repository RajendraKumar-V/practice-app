function ListGroup() {
  const items = ["Anchipura", "Itamadu", "Mysuru", "Bangalore"];

  return (
    <>
      <h1> List Group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
