import Heading from "./Heading";

const NavBar = () => {
  return (
    <div className="h-14 flex items-center justify-center bg-white">
      <Heading label={"my posts"} size={3} />
    </div>
  );
};

export default NavBar;
