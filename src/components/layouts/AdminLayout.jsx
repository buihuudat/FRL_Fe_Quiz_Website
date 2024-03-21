import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../SideBar";
import { useEffect, useState } from "react";
import { authApi } from "../../utils/apis/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";

const AdminLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const { user } = await authApi.checkAuth();
      if (!user || user.role !== "admin") {
        navigate("/login");
      } else {
        dispatch(setUser(user));
        setIsLoading(false);
      }
    };
    checkAuth();
  }, [navigate, dispatch]);

  return <h1>Locked...</h1>;

  // return isLoading ? (
  //   <h1>Loading...</h1>
  // ) : (
  //   <div className="container">
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: "row",
  //         paddingTop: "1rem",
  //       }}
  //     >
  //       <SideBar />
  //       <div style={{ flex: 1, paddingLeft: "250px" }}>
  //         <Outlet />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default AdminLayout;
