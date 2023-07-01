import { useState } from "react";
import axios from "axios";
import { LOGIN, REGISTER } from "../constant/api";
import { useNavigate } from "react-router";

const useApi = () => {
  const navigate = useNavigate();

  // operation characteristics
  const [op, setOp] = useState({
    loading: false,
    appErr: null,
    serverErr: null,
  });
  // configuration
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const Register = async (input) => {
    setOp({
      ...op,
      loading: true,
    });
    try {
      const { data } = await axios.post(REGISTER, input, config);
      localStorage.setItem("token", data.token);
      navigate("/");
      setOp({
        ...op,
        loading: false,
      });
    } catch (error) {
      setOp({
        ...op,
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };
  const Login = async (input) => {
    setOp({
      ...op,
      loading: true,
    });
    try {
      const { data } = await axios.post(LOGIN, input, config);
      localStorage.setItem("token", data.token);
      navigate("/");
      setOp({
        ...op,
        loading: false,
      });
    } catch (error) {
      setOp({
        ...op,
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };
  const Logout = async () => {
    setOp({
      ...op,
      loading: true,
    });
    try {
      await localStorage.removeItem("token");
      // setToken(null);
      setOp({
        ...op,
        loading: false,
      });
    } catch (error) {
      setOp({
        ...op,
        loading: false,
      });
    }
  };

  return {
    Register,
    Login,
    Logout,
    op,
    // token,
  };
};

export default useApi;
