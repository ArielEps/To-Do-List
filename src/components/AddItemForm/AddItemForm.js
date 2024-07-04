import "./AddItemForm.css";
import Button from "../Button/Button";

export default function AddItemForm() {
  return (
    <form className="add-item-form">
      <label>Task:</label>
      <input type="text" placeholder="task title" />

      <label>Description:</label>
      <input type="text" maxLength="100" placeholder="task description" />
      <p>0/100</p>

      <Button>Add</Button>
    </form>
  );
}
