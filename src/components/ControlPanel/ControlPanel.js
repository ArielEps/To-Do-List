import ControlCalendar from "../Calendar/ControlCalendar";
import "./ControlPanel.css";
import Button from "../Button/Button";
import Stats from "../Stats/Stats";

export default function ControlPanel() {
  return (
    <div className="controlPanel">
      <ControlCalendar />
      <div>
        <select>
          <option>Filter by adding order</option>
          <option>Filter by name order</option>
          <option>Filter by done tasks</option>
        </select>
        <Button>Reset</Button>
      </div>
      <Stats />
    </div>
  );
}
