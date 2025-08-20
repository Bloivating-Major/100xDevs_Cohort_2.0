import Textfield from '../textfield/Textfield';
import Timer from '../timer/Timer';
import './header.css';

const Header = ({ onLanguageChange, language }) => {
  return (
    <div className='header'>
        <Textfield text={language} onInput={onLanguageChange} />
        <Timer />
    </div>
  )
}

export default Header;          