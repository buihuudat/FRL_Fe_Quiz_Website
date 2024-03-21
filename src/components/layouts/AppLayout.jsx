import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { authApi } from "../../utils/apis/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";

const AppLayout = () => {
  const dispatch = useDispatch();
  const checkAuth = async () => {
    try {
      const { user } = await authApi.checkAuth();
      dispatch(setUser(user));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <main className="container">
      <Outlet />
    </main>
  );
};

export default AppLayout;
