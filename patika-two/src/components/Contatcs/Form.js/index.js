import React, { useEffect, useState } from "react";
const initialFormValue = { full_name: "", phone_number: "" };
export default function Form({ addContacts, contents }) {
  const [form, setForm] = useState(initialFormValue);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setForm(initialFormValue);
  }, [contents]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.full_name === "" || form.phone_number === "") {
      return false;
    }
    addContacts([...contents, form]);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="full_name">Full Name :</label>
        <input
          name="full_name"
          placeholder="Full name"
          onChange={onChangeInput}
          value={form.full_name}
          autoComplete='off'
        />
      </div>
      <div>
        <label htmlFor="full_name">Phone Number :</label>
        <input
          name="phone_number"
          placeholder="Phone number"
          onChange={onChangeInput}
          value={form.phone_number}
          autoComplete='off'
        />
      </div>

      <div>
        <button>Add</button>
      </div>
    </form>
  );
}
