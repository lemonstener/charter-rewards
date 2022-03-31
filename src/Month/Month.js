import "./Month.css";

const Month = (props) => {
  return (
    <div className="Month">
      {props.name} - {props.points} points
    </div>
  );
};

export default Month;
