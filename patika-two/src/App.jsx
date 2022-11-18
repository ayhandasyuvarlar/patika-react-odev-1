import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavList from "./navlist";
import Signup from "./components/Formik/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Contacts/> */}
        <NavList />
        <Routes>
          <Route path="/" element={<Signup />} />
          {/* <Route path="/users/:id" element={<UserDetails />} /> */}
          {/* <Route path="/messages" element={<Messages/>}></Route>
          <Route path="/tasks" element={<Task/>}></Route>
          <Route path="/*" element={<Error/>}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
