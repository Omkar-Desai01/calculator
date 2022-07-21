import "./keypad.css";

export default function Keypad() {
  return (
    <div className="keypad">
      <div className="keypad-row">
        <div className="keypad-button">7</div>
        <div className="keypad-button">8</div>
        <div className="keypad-button">9</div>
        <div className="keypad-button">/</div>
      </div>
      <div className="keypad-row">
        <div className="keypad-button">4</div>
        <div className="keypad-button">5</div>
        <div className="keypad-button">6</div>
        <div className="keypad-button">*</div>
      </div>
      <div className="keypad-row">
        <div className="keypad-button">1</div>
        <div className="keypad-button">2</div>
        <div className="keypad-button">3</div>
        <div className="keypad-button">-</div>
      </div>
      <div className="keypad-row">
        <div className="keypad-button">.</div>
        <div className="keypad-button">0</div>
        <div className="keypad-button">=</div>
        <div className="keypad-button">+</div>
      </div>
    </div>
  );
}
