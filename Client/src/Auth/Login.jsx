import * as yup from "yup";
import { useFormik } from "formik";
import Heading from "../components/Heading";
import Input from "../components/Input";
import useApi from "../hooks/useApi";
import FormikErr from "../Errors/FormikErr";
import UpdateButton from "../components/Buttons/UpdateButton";
import AppServerErr from "../Errors/AppServerErr";

// form schema
const formSchema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
});

// eslint-disable-next-line react/prop-types
const Login = ({ setShow }) => {
  const { Login, op } = useApi();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ email, password }) => {
      Login({ email, password });
    },
    validationSchema: formSchema,
  });

  return (
    <>
      <Heading label={"Sign in"} />
      <AppServerErr>
        {op.serverErr === "Network Error" ? op.serverErr : null}
      </AppServerErr>
      <form className="mt-6" onSubmit={formik.handleSubmit}>
        <Input
          label={"Email"}
          type={"email"}
          name={"email"}
          value={formik.values.email}
          onChange={formik.handleChange("email")}
        />
        <FormikErr
          touched={formik.touched.email}
          errors={formik.errors.email}
        />
        <AppServerErr>
          {op.appErr === "Email does not exist" && op.appErr}
        </AppServerErr>
        <Input
          label={"Password"}
          type={"password"}
          name={"password"}
          value={formik.values.password}
          onChange={formik.handleChange("password")}
        />
        <FormikErr
          touched={formik.touched.password}
          errors={formik.errors.password}
        />
        <AppServerErr>
          {op.appErr === "Invalid Password" && op.appErr}
        </AppServerErr>
        <UpdateButton label={"Login"} />
      </form>

      <p className="mt-8 text-lg font-semibold text-center text-gray-700">
        Don&apos;t have an account?
        <button
          onClick={() => setShow(true)}
          className="text-lg text-red-600 hover:underline"
        >
          Sign up
        </button>
      </p>
    </>
  );
};

export default Login;
