import { useState } from "react";
import axios from "axios";
import {
  CREATEPOST,
  DELETEPOST,
  LOGIN,
  MYPOSTS,
  REGISTER,
  UPDATEPOST,
} from "../constant/api";
import { useNavigate } from "react-router";
import { useAuth } from "../context/Auth";

const useApi = () => {
  const navigate = useNavigate();
  const { user, dData, setDData } = useAuth();

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

  // Auth
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
      setOp({
        ...op,
        loading: false,
      });
    } catch (error) {
      setOp({
        ...op,
        loading: false,
      });
      // console.log("Logout error: ", error);
    }
  };

  // Post Op Configuration
  const postConfig = {
    headers: {
      Authorization: `Bearer ${user}`,
    },
  };
  // Post Op Apis
  const Create = async (input) => {
    setOp({
      ...op,
      loading: true,
    });
    try {
      const { data } = await axios.post(CREATEPOST, input, postConfig);
      setDData([...dData, data]);
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

  const Fetch = async () => {
    setOp({
      ...op,
      leading: true,
    });

    try {
      const { data } = await axios.get(MYPOSTS, postConfig);
      setDData(data.Posts);
      // console.log("all my posts: ", data);
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

  const Delete = async (input) => {
    setOp({
      ...op,
      leading: true,
    });

    try {
      const { data } = await axios.put(DELETEPOST, input, postConfig);
      setOp({
        ...op,
        loading: false,
      });
      return data;
    } catch (error) {
      setOp({
        ...op,
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };

  const Update = async (input) => {
    setOp({
      ...op,
      leading: true,
    });

    try {
      const { data } = await axios.put(UPDATEPOST, input, postConfig);
      setOp({
        ...op,
        loading: false,
      });
      return data;
    } catch (error) {
      setOp({
        ...op,
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  }

  return {
    Register,
    Login,
    Logout,
    Create,
    Fetch,
    Delete,
    Update,
    op,
  };
};

export default useApi;
