import "./MainDisplay.css";
import Header from "../Header/Header";
import ToDoList from "../ToDoList/ToDoList";

export default function MainDisplay() {
  return (
    <div className="mainDisplay">
      <Header />
      <ToDoList />
    </div>
  );
}
