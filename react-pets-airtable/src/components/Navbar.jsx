import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pets">Pets </NavLink>
        </li>
        <li>
          <NavLink to="/pets/new">New Pet</NavLink>
        </li>
      </ul>
    </nav>
  );
}
