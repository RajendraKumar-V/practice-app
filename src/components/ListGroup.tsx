import { MouseEvent} from "react";
function ListGroup() {
  let items = ["Anchipura", "Itamadu", "Mysuru", "Bangalore"];

 const handleClick =(event:MouseEvent)=>{
        console.log(event);
 }

  return (
    <>
      <h1> List Group</h1>
      {items.length === 0 ?"No items found" : null}
      <ul className="list-group">
      {
        items.map((item,index)=>
            <li className="list-group-item" 
            key={item}
            onClick={handleClick}>{item}</li>
        )
      }
      </ul>
    </>
  );
}
export default ListGroup;
