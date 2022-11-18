import React from "react";
import { useFormik } from "formik";
export default function FormikForm() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      hobies: [],
      country: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          name={"firstName"}
          placeholder={"Ayhan"}
          onChange={handleChange}
        ></input>
        <label htmlFor="lastName">Last Name</label>
        <input
          name={"lastName"}
          placeholder={"dasyuvarlar"}
          onChange={handleChange}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          name={"email"}
          placeholder={"example@gmail.com"}
          onChange={handleChange}
        ></input>
        <label htmlFor="gender">Gender</label>
        <br />
        <div>
          <p>male</p>
          <input
            type={"radio"}
            name="gender"
            value={"male"}
            onChange={handleChange}
          />
        </div>
        <p>female</p>
        <input
          type={"radio"}
          name="gender"
          value={"female"}
          onChange={handleChange}
        />
        <br />
        <div>
          <h1>hobies</h1>
          <span>football</span>{" "}
          <input
            type={"checkbox"}
            name="hobies"
            value={"football"}
            onChange={handleChange}
          />
          <span>cinema</span>
          <input
            type={"checkbox"}
            name="hobies"
            value={"cinema"}
            onChange={handleChange}
          />
          <span>basketball</span>{" "}
          <input
            type={"checkbox"}
            name="hobies"
            value={"basketball"}
            onChange={handleChange}
          />
        </div>
        <div>
          <h2>Country</h2>
          <select name="country" onChange={handleChange}>
            <option value="turkey">turkey</option>
            <option value="england">england</option>
            <option value="usa">usa</option>
          </select>
        </div>
        <button type="submit">submit</button>
        <br />
        {JSON.stringify(values)}
      </form>
    </div>
  );
}
