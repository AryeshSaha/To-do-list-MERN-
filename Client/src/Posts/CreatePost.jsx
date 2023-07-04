import { useNavigate } from "react-router";
import CreateButton from "../components/Buttons/CreateButton";
import Heading from "../components/Heading";
import Input from "../components/Input";
import TextField from "../components/TextField";
import { useAuth } from "../context/Auth";
import * as yup from "yup";
import { useFormik } from "formik";
import useApi from "../hooks/useApi";
import FormikErr from "../Errors/FormikErr";
import AppServerErr from "../Errors/AppServerErr";

const formSchema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Just add a few words"),
});

const CreatePost = () => {
  const nav = useNavigate();
  const { fetchAgain, setFetchAgain } = useAuth();
  const { op, Create } = useApi();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: ({ title, description }) => {
      Create({ title, description });
      setFetchAgain(!fetchAgain);
      if (!op.loading) nav("/");
    },
    validationSchema: formSchema,
  });

  return (
    <>
      <div className="fixed top-32 w-full flex flex-col justify-center overflow-hidden">
        <div className="w-full p-6 m-auto mb-20 bg-slate-200 rounded-md shadow-2xl shadow-slate-200 lg:max-w-xl">
          <Heading label={"Create A New Post"} />
          <form className="mt-6" onSubmit={formik.handleSubmit}>
            <Input
              label={"Title"}
              type={"text"}
              name={"title"}
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            <FormikErr
              touched={formik.touched.title}
              errors={formik.errors.title}
            />
            <TextField
              label={"Description"}
              name={"description"}
              rows={5}
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            <FormikErr
              touched={formik.touched.description}
              errors={formik.errors.description}
            />
            <AppServerErr>{op.appErr && op.appErr}</AppServerErr>
            <CreateButton label={"Create"} />
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
