import "./ToDoList.css";
import Item from "../Item/Item";

export default function ToDoList() {
  return (
    <div className="to-do-list">
      <Item />
      <Item />
      <Item />
    </div>
  );
}
