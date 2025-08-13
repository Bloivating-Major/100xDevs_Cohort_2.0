import "./suggestions.css";

function Suggestions({ suggestions=[] }){
  return (
    <div className="suggestions">
      {suggestions?.map((suggestion) => {
        const {value='', id='' } = suggestion || {};
        return <button className="suggestion-button" key={id}>{value}</button>;
      })}
    </div>
  );
}

export default Suggestions;