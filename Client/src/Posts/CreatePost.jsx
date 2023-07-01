import { useNavigate } from "react-router";
import CreateButton from "../components/Buttons/CreateButton";
import Heading from "../components/Heading";
import Input from "../components/Input";
import TextField from "../components/TextField";
import { useAuth } from "../context/Auth";
import * as yup from "yup";
import { useFormik } from "formik";

const formSchema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Just add a few words"),
});

const CreatePost = () => {
  const nav = useNavigate();
  const { setDData } = useAuth();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: ({ title, description }) => {
      setDData((data) => [
        ...data,
        {
          title,
          description,
        },
      ]);
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
            <CreateButton label={"Create"} />
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
