// import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import ClassComponent from "./daily-concept-wise/class.compoennt";
// import ParentLists from "./daily-concept-wise/lists.and.keys";4
// import ControlledComponent from "./daily-concept-wise/form";
// import Calculator from './daily-concept-wise/lifting.up.state';
// import TableSearch from "./daily-concept-wise/tableSearch";
import SelectOptions from "./daily-concept-wise/selectOptions";
import FunctionalCompoennt from "./daily-concept-wise/functionalCompoent";
import Todos from "./daily-concept-wise/useReducer";
import Layout from "./Routers/layout";
import NoFound from "./daily-concept-wise/nofound";
import Users from "./users";

function App() {
  return (
    <div style={{textAlign: "center"}} className="wrapper">
      <BrowserRouter>
      <nav style={{bottom: "100px"}}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/functional_coompoenent">Functional Coompoenent</Link>
          </li>
          <li>
            <Link to="/classComponent">ClassComponent</Link>
          </li>
          <li>
            <Link to="/select_options">Select Options</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <br/>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="classComponent" element={<ClassComponent />} />
          <Route path="todos" element={<Todos />} />
          <Route path="functional_coompoenent" element={<FunctionalCompoennt />} />
          <Route path="select_options" element={<SelectOptions />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
