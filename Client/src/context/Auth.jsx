import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const [dData, setDData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setUser(token);
    if (!token) navigate("/auth");
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user, setUser, dData, setDData }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
