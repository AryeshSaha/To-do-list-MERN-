/* eslint-disable react/prop-types */
import { useAuth } from "../context/Auth";
import ReadPost from "./ReadPost";
import { useEffect } from "react";
import useApi from "../hooks/useApi";

const AllPosts = ({ fetchAgain }) => {
  const { dData } = useAuth();

  const { Fetch } = useApi();

  useEffect(() => {
    // console.log("Read post side effect running");
    Fetch();
  }, [fetchAgain]);
  return (
    <>
      <div className="flex flex-wrap m-10 justify-evenly">
        {dData && dData?.map((data, index) => (
          <ReadPost key={index} data={data} />
        ))}
      </div>
    </>
  );
};

export default AllPosts;
