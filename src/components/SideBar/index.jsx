import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import { useSelector } from "react-redux";

const SideBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = useSelector((state) => state.user.user);

  return (
    <div className="sidenav">
      <div className="profile">
        <img
          src="https://images.unsplash.com/photo-1562860149-691401a306f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhY2tlcnxlbnwwfHwwfHx8MA%3D%3D"
          className="pro-img"
        />
        <p>
          {user?.name} <span>@{user?.username}</span>
        </p>
      </div>
      <a
        onClick={() => navigate("/admin")}
        className="icon-a"
        style={pathname === "/admin" ? { color: "red" } : {}}
      >
        <i className="fa fa-dashboard icons"></i> Dashboard
      </a>
      <a
        onClick={() => navigate("/admin/quizzes")}
        className="icon-a"
        style={pathname === "/admin/quizzes" ? { color: "red" } : {}}
      >
        <i className="fas fa-question-circle icons"></i> Quizzes
      </a>
    </div>
  );
};

export default SideBar;
