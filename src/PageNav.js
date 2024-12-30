import { NavLink } from "react-router-dom";
import "./styles.css";
export default function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <h2>Home</h2>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Pricing">
            <h2>Pricing</h2>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Products">
            <h2>Products</h2>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
