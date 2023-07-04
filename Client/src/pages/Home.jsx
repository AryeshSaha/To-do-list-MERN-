import { Link } from "react-router-dom";
import AllPosts from "../Posts/AllPosts";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CreateButton from "../components/Buttons/CreateButton";
import { useAuth } from "../context/Auth";
import { Tooltip } from "react-tooltip";

const Home = () => {
  const { user, fetchAgain, setFetchAgain } = useAuth();
  return (
    <>
      {user && <NavBar />}
      <div>
        {user && (
          <>
            <Link
              to={"/create-post"}
              data-tooltip-id="createBtn"
              data-tooltip-place="top"
              data-tooltip-content="Create"
              className="fixed bottom-14 right-4 text-2xl flex justify-center overflow-hidden cursor-pointer"
            >
              <CreateButton label={<b>+</b>} />
            </Link>
            <Tooltip id="createBtn" />
          </>
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
