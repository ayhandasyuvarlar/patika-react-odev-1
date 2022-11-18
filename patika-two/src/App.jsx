import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/NativeFetch";
import UserDetails from "./components/NativeFetch/UserDetails";
import NavList from "./navlist";
import Messages from "./components/NativeFetch/messages";
import Task from "./components/NativeFetch/Task";
import Error from "./components/NativeFetch/Error";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Contacts/> */}
        <NavList />
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/messages" element={<Messages/>}></Route>
          <Route path="/tasks" element={<Task/>}></Route>
          <Route path="/*" element={<Error/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
