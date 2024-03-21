import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  return (
    <nav className="header">
      <a href="/" className="logo">
        Quizizz
      </a>
      <ul className="links">
        <li>
          <a onClick={() => navigate("/")}>Home</a>
        </li>
        <li>
          <a onClick={() => navigate("/quiz")}>Quiz</a>
        </li>
        <li>
          <a onClick={() => navigate("/about")}>About</a>
        </li>
      </ul>
      <div className="nav-buttons">
        {user?.role === "admin" && (
          <button
            className="button admin-btn"
            onClick={() => navigate("/admin")}
          >
            Admin
          </button>
        )}
        {user && (
          <button className="button" onClick={() => navigate("/profile")}>
            {user?.name}
          </button>
        )}
        {!user && (
          <button className="button" onClick={() => navigate("/login")}>
            Log in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
