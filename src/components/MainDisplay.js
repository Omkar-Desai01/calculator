import "./MainDispaly.css";

const CalculatorTitle = (props) => {
  return (
    <>
      {props.question && (
        <div className="question-title">
          <h1>{props.question}</h1>
        </div>
      )}
      {props.answer && <div className="display-value">{props.answer}</div>}
    </>
  );
};

export default CalculatorTitle;
