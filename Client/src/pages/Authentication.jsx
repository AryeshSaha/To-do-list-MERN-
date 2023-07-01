import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import Register from "../Auth/Register";
import Login from "../Auth/Login";

const Authentication = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/");
  }, [navigate]);

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-2xl shadow-white lg:max-w-xl">
        {show ? <Register setShow={setShow} /> : <Login setShow={setShow} />}
      </div>
      <Footer />
    </div>
  );
};

export default Authentication;
