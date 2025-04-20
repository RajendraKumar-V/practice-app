function ListGroup() {
  let items = ["Anchipura", "Itamadu", "Mysuru", "Bangalore"];
  items = [];

  return (
    <>
      <h1> List Group</h1>
      {items.length === 0 ?"No items found" : null}
      <ul className="list-group">
      {
        items.map(item=>
            <li key={item}>{item}</li>
        )
      }
      </ul>
    </>
  );
}
export default ListGroup;
