import { Link } from "react-router-dom";
import AllPosts from "../Posts/AllPosts";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CreateButton from "../components/Buttons/CreateButton";
import { useAuth } from "../context/Auth";

const Home = () => {
  const { user, fetchAgain, setFetchAgain } = useAuth();
  return (
    <>
      {user && <NavBar />}
      <div>
        {user && (
          <Link
            to={"/create-post"}
            className="fixed bottom-14 md:right-10 right-3 flex justify-center overflow-hidden cursor-pointer"
          >
            <CreateButton label={"Add"} />
          </Link>
        )}
        {user && (
          <AllPosts fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
