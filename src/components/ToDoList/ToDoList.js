import "./ToDoList.css";
import Item from "../Item/Item";
import Button from "../Button/Button";

export default function ToDoList() {
  return (
    <div className="to-do-list">
      <Item />
      <Item />
      <Item />
      <Item />

      <Button>Add Todo</Button>
    </div>
  );
}
