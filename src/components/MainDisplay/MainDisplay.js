import "./MainDisplay.css";
import Header from "../Header/Header";
import ToDoList from "../ToDoList/ToDoList";
import Button from "../Button/Button";
import AddItemForm from "../AddItemForm/AddItemForm";

export default function MainDisplay() {
  return (
    <div className="mainDisplay">
      <Header />
      <ToDoList />

      <AddItemForm />
      <Button>Add Todo</Button>
    </div>
  );
}
