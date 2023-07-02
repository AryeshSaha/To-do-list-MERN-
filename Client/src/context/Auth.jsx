import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  // to store the token
  const [user, setUser] = useState();
  // to decide when to fetch and the frequency to follow
  const [fetchAgain, setFetchAgain] = useState();
  const navigate = useNavigate();

  // to keep a track of the data
  const [dData, setDData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setUser(token);
    if (!token) navigate("/auth");
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user, setUser, dData, setDData, fetchAgain, setFetchAgain }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
