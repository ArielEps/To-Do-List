import "./Stats.css";
import targetImage from "../../Images/target.png";

export default function Stats() {
  return (
    <div className="stats">
      <img src={targetImage} alt="target" />

      <ul>
        <li>Total tasks: 10</li>
        <li>Tasks completed: 4 (40%)</li>
        <li>Remaining tasks: 6</li>
      </ul>
    </div>
  );
}
