import { useFormik } from "formik";
import SignupSchema from "./formValidations";
export default function Signup() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
      resetForm()
    },
    validationSchema: SignupSchema,
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          name={"email"}
          placeholder={"example@gmail.com"}
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
        ></input>
        {errors.email && touched.email && errors.email}
        <label>password</label>
        <input
          name={"password"}
          type={"password"}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.password && touched.password && errors.password}
        <label>Confirm Password </label>
        <input
          name={"confirmPassword"}
          type={"password"}
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.confirmPassword &&
          touched.confirmPassword &&
          errors.confirmPassword}
        <button type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
