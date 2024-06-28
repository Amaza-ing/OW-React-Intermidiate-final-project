import "./HeaderComponent.css";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <header className="header">
      <h2 className="title">Tasks App</h2>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tasks" className="link">
              Tasks
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;
