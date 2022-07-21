import MainDisplay from "./MainDisplay";
import Keypad from "./Keypad";

export default function Calculator() {
  return (
    <div className="main-calculator">
      <MainDisplay />
      <Keypad />
    </div>
  );
}
