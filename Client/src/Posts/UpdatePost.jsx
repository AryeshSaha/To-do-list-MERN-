/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router";
import Heading from "../components/Heading";
import Input from "../components/Input";
import TextField from "../components/TextField";
import { useAuth } from "../context/Auth";
import * as yup from "yup";
import { useFormik } from "formik";
import UpdateButton from "../components/Buttons/UpdateButton";

const formSchema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Just add a few words"),
});

const UpdatePost = () => {
  const nav = useNavigate();
  const { dData, setDData } = useAuth();
  const { title } = useParams();
  const data = dData.find((data) => data.title === title);
  if (!data) console.log("Card don't exist");

  const formik = useFormik({
    initialValues: {
      title: data.title,
      description: data.description,
    },
    onSubmit: ({ title, description }) => {
      setDData(
        dData.map((item) =>
          item.title === data.title ? { ...item, title, description } : item
        )
      );
      nav("/");
    },
    validationSchema: formSchema,
  });

  return (
    <>
      <div className="fixed top-32 w-full flex flex-col justify-center overflow-hidden">
        <div className="w-full p-6 m-auto mb-20 bg-slate-200 rounded-md shadow-2xl shadow-slate-200 lg:max-w-xl">
          <Heading label={"Create Another Post"} />
          <form className="mt-6" onSubmit={formik.handleSubmit}>
            <Input
              label={"Title"}
              type={"text"}
              name={"title"}
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            <TextField
              label={"Description"}
              name={"description"}
              rows={5}
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            <UpdateButton label={"Update"} />
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePost;
