import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { authApi } from "../../utils/apis/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";

const AuthLayout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await authApi.checkAuth();
      if (!token || !user) {
        navigate("/");
      }
      dispatch(setUser(user));
      setIsLoading(false);
    };
    checkAuth();
  }, [navigate, token, dispatch]);

  return isLoading ? <h5>Loading...</h5> : <Outlet />;
};

export default AuthLayout;
