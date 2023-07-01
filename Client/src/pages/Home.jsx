import { Link } from "react-router-dom";
import AllPosts from "../Posts/AllPosts";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div>
        <Link
          to={"/create-post"}
          className="fixed bottom-10 right-10 flex justify-center overflow-hidden text-3xl cursor-pointer"
        >
          ➕
        </Link>
        <AllPosts />
      </div>
      <Footer />
    </>
  );
};

export default Home;
