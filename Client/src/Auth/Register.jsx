import * as yup from "yup";
import { useFormik } from "formik";
import Heading from "../components/Heading";
import Input from "../components/Input";
import FormikErr from "../Errors/FormikErr";
import useApi from "../hooks/useApi";
import DeleteButton from "../components/Buttons/DeleteButton";
import AppServerErr from "../Errors/AppServerErr";

// form schema
const formSchema = yup.object({
  fullname: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
});

// eslint-disable-next-line react/prop-types
const Register = ({ setShow }) => {
  const { Register, op } = useApi();

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: ({ fullname, email, password }) => {
      Register({ fullname, email, password });
    },
    validationSchema: formSchema,
  });

  return (
    <>
      <Heading label={"Sign up"} />
      <AppServerErr>
        {op.serverErr === "Network Error" ? op.serverErr : null}
      </AppServerErr>
      <form className="mt-6" onSubmit={formik.handleSubmit}>
        <Input
          label={"Fullname"}
          type={"text"}
          name={"fullname"}
          value={formik.values.fullname}
          onChange={formik.handleChange("fullname")}
        />
        <FormikErr
          touched={formik.touched.fullname}
          errors={formik.errors.fullname}
        />
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
          {op.appErr === "Email already exists, try with a different one" &&
            op.appErr}
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
        <DeleteButton label={"Register"} />
      </form>

      <p className="mt-8 text-lg font-semibold text-center text-gray-700">
        Already have an account?
        <button
          onClick={() => setShow(false)}
          className="text-lg text-blue-600 hover:underline"
        >
          Sign in
        </button>
      </p>
    </>
  );
};

export default Register;
