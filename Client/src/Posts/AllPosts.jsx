import { useAuth } from "../context/Auth";
import ReadPost from "./ReadPost";

const AllPosts = () => {
  const { dData } = useAuth();
  return (
    <>
      <div className="flex flex-wrap m-10 justify-evenly">
        {dData?.map((data, index) => (
          <ReadPost key={index} data={data} />
        ))}
      </div>
    </>
  );
};

export default AllPosts;
