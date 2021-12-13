import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

import './Header.css';

function Header() {
  return (
    <header className="header">
      <FontAwesomeIcon icon={faCommentDots} color="#ffffff" /> Web-chat
    </header>
  );
}

export default Header;
