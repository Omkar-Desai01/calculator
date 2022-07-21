import "./keypad.css";

export default function Keypad(props) {
  return (
    <div className="keypad">
      <div className="keypad-row">
        <input
          className="keypad-button"
          type="button"
          onClick={props.handleClick}
          value={7}
        ></input>
        <input
          className="keypad-button"
          type="button"
          onClick={props.handleClick}
          value={8}
        ></input>
        <input
          className="keypad-button"
          type="button"
          onClick={props.handleClick}
          value={9}
        ></input>
        <input
          className="keypad-button"
          type="button"
          onClick={props.handleClick}
          value={"/"}
        ></input>
      </div>

      <div className="keypad-row">
        <input
          className="keypad-button"
          type="button"
          onClick={props.handleClick}
          value={4}
        ></input>
        <input
          className="keypad-button"
          type="button"
          onClick={props.handleClick}
          value={5}
        ></input>
        <input
          className="keypad-button"
          type="button"
          onClick={props.handleClick}
          value={6}
        ></input>
        <input
          className="keypad-button"
          type="button"
          onClick={props.handleClick}
          value={"*"}
        ></input>
      </div>

      <div className="keypad-row">
        <input
          className="keypad-button"
          type="button"
          onClick={props.handleClick}
          value={3}
        ></input>
        <input
          className="keypad-button"
          type="button"
          onClick={props.handleClick}
          value={2}
        ></input>
        <input
          className="keypad-button"
          type="button"
          onClick={props.handleClick}
          value={1}
        ></input>
        <input
          className="keypad-button"
          type="button"
          onClick={props.handleClick}
          value={"-"}
        ></input>
      </div>

      <div className="keypad-row">
        <input
          className="keypad-button"
          type="button"
          onClick={props.handleClick}
          value={"C"}
        ></input>
        <input
          className="keypad-button"
          type="button"
          onClick={props.handleClick}
          value={0}
        ></input>
        <input
          className="keypad-button"
          type="button"
          onClick={props.handleClick}
          value={"="}
        ></input>
        <input
          className="keypad-button"
          type="button"
          onClick={props.handleClick}
          value={"+"}
        ></input>
      </div>
    </div>
  );
}
