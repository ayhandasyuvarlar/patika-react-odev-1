import React, { useEffect, useState } from "react";
import Form from "./Form.js";
import ContentList from "./List";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {}, [contacts]);
  return (
    <div className="contacts-container">
      <ContentList contacts={contacts} />
      <Form addContacts={setContacts} contents={contacts} />
    </div>
  );
}

export default Contacts;
