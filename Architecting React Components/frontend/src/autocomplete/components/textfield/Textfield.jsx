import './textfield.css';

function Textfield({ text='', onInput=()=> {} }) {
  return <input className='textfield' placeholder='Type something...' type="text" value={text} onInput={onInput} />;
}

export default Textfield;
