import logo from "./logo.svg";
import "./App.css";
import UseState from "./Components/UseState/UseState";
import ArraysWithUseState from "./Components/UseState/ArraysWithUseState";
import ObjectsWithUseState from "./Components/UseState/ObjectsWithUseState";
import StringswithUsestate from "./Components/UseState/StringswithUsestate.jsx";
import UseEffect from "./Components/UseEffect/UseEffect.jsx";
import EmptyDependecy from "./Components/UseEffect/EmptyDependecy.jsx";
import DependencyArray from "./Components/UseEffect/DependencyArray.jsx";
import NoDependencies from "./Components/UseEffect/NoDependencies.jsx";
import UseReducer from "./Components/OtherHooks/UseReducer.jsx";
import UseCallback from "./Components/UseCallback/UseCallback.jsx";
import UseMemo from "./Components/OtherHooks/UseMemo.jsx";
import UseRef from "./Components/OtherHooks/UseRef.jsx";
import UseLayout from "./Components/OtherHooks/UseLayout.jsx";
import { Parent } from "./Components/UseContext/Parent.jsx";
import ChildComponent from "./Components/UseContext/ChildComponent";
import Uncontrolled from "./Components/controlledUncontrolled/Uncontrolled_Component.jsx";
import ControlledSeperate from "./Components/controlledUncontrolled/Controlled_Seperate.jsx";
import ControlledObject from "./Components/controlledUncontrolled/Controlled_Object.jsx";
import FormValidation from "./Components/Validation/Form_Validation.jsx";
import AsyncValidation from "./Components/Validation/Async_Validation.jsx";
import Formik from "./Components/Validation/Formik.jsx";
import Navigation from "./Components/Navigation";
import Counter from "./Components/Counter";
import Dashboard from "./Components/Dashboard";
import Dashboard_2 from "./Components/Dashboard_2";
import Post from "./Components/Post";
import UseNavigate from "./Components/UseNavigate";
import Error from "./Components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginContext } from './Components/ProtectedRoutes/LoginContext';
import {ProtectedRoutes} from './Components/ProtectedRoutes/ProtectedRoutes';
import Login from './Components/ProtectedRoutes/Login';

function App() {
  return (
    <>
      {/* UseState Hook */}
      {/* <UseState />
      <StringswithUsestate />
      <ArraysWithUseState />
      <ObjectsWithUseState /> */}

      {/* UseEffect Hook */}
      {/* <UseEffect /> */}
      {/* <EmptyDependecy /> */}
      {/* <DependencyArray /> */}
      {/* <NoDependencies /> */}

      {/* <UseRef /> */}
      {/* <UseReducer /> */}
      {/* <UseCallback /> */}
      {/* <UseMemo /> */}
      {/* <UseLayout /> */}

      {/* UseContext Hook */}
      {/* <Parent>
        <ChildComponent />
      </Parent> */}

      {/* Uncontrolled Components in Forms */}
      {/* <Uncontrolled /> */}

      {/* Controlled Components Using separate state variables in Forms */}
      {/* <ControlledSeperate /> */}

      {/* Controlled Components Using objects in Forms */}
      {/* <ControlledObject /> */}

      {/* Validatings in Forms */}
      {/* <FormValidation /> */}

      {/* Asynchronous validation of forms */}
      {/* <AsyncValidation /> */}

      {/* Use of Formik library for validations in forms */}
      {/* <Formik /> */}

      {/* Routes */}
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/dashboard_2/*" element={<Dashboard_2 />} />
          <Route path="/posts/:params" element={<Post />} />
          <Route path="/useNavigate" element={<UseNavigate />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>


      {/* Protected Routes */}

      {/* <LoginContext>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/counter" element={<Counter />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/dashboard_2/*" element={<Dashboard_2 />} />
            </Route>
          </Routes>
        </Router>
      </LoginContext> */}

    </>
  );
}

export default App;
