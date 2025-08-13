import Row from "../row/Row";
import "./suggestions.css";

function Suggestions({ suggestions=[] }){
  return (
    <div className="suggestions">
      {suggestions?.map((suggestion) => (
        <Row data={suggestion} key={suggestion.id} />
      ))}
    </div>
  );
}

export default Suggestions;