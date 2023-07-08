/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import DeleteButton from "../components/Buttons/DeleteButton";
import UpdateButton from "../components/Buttons/UpdateButton";
import { useAuth } from "../context/Auth";
import useApi from "../hooks/useApi";
import AppServerErr from "../Errors/AppServerErr";

const ReadPost = ({ data }) => {

  const { setDData, fetchAgain, setFetchAgain } = useAuth();
  const { Delete, op } = useApi();
  const nav = useNavigate();

  const updateHandler = () => {
    nav(`/update/${data._id}`);
  };
  const deleteHandler = () => {
    Delete({ id: data._id });
    setDData((dData) => dData.filter((i) => i._id !== data._id));
    setFetchAgain(!fetchAgain);
  };
  return (
    <>
      <div className="w-96 bg-slate-500 m-5 p-5 rounded-xl hover:shadow-xl hover:shadow-slate-400 hover:-translate-y-5 transition duration-500 ease-in-out flex flex-col">
        <div className="h-56 text-white">
          <h4 className="h-10 text-xl">{data.title}</h4>
          <hr />
          <div className="overflow-auto h-48 scrollBar" >
            <p className="whitespace-pre-wrap mt-5">{data.description}</p>
          </div>
        </div>
        <AppServerErr>{op.appErr && op.appErr}</AppServerErr>
        <div>
          <UpdateButton label={"Update"} onClick={updateHandler} />
          <DeleteButton label={"Delete"} onClick={deleteHandler} />
        </div>
      </div>
    </>
  );
};

export default ReadPost;
