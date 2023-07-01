/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import DeleteButton from "../components/Buttons/DeleteButton";
import UpdateButton from "../components/Buttons/UpdateButton";
import { useAuth } from "../context/Auth";

const ReadPost = ({ data }) => {
  const { setDData } = useAuth();
  const nav = useNavigate();

  const updateHandler = () => {
    nav(`/update/${data.title}`);
  };
  const deleteHandler = () => {
    setDData((d) => d.filter((i) => i.title !== data.title));
  };
  return (
    <>
      <div className="w-96 bg-slate-500 m-5 p-5 flex flex-col">
        <div className="h-52 text-white">
          <h4>{data.title}</h4>
          <hr />
          <p>{data.description}</p>
        </div>
        <div>
          <UpdateButton label={"Update"} onClick={updateHandler} />
          <DeleteButton label={"Delete"} onClick={deleteHandler} />
        </div>
      </div>
    </>
  );
};

export default ReadPost;
