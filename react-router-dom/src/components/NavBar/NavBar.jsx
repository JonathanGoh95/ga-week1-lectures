// src/components/NavBar/NavBar.jsx
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/pokemon'>Pokemon</Link>
        </li>
        {/* A new link to our pokemon form page */}
        <li>
          <Link to="/pokemon/new">New Pokemon</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
