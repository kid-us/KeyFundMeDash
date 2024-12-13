import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import PageNotFound from "./components/Pages/PageNotFound";
import Fundraising from "./components/Pages/Fundraising";
import Setting from "./components/Pages/Setting";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            // <Protected>
            <Home />
            // </Protected>
          }
        />
        {/* PENDING */}
        <Route
          path="/pending"
          element={
            // <Protected>
            <Fundraising />
            // </Protected>
          }
        />

        {/* APPROVED */}
        <Route
          path="/approved"
          element={
            // <Protected>
            <Fundraising />
            // </Protected>
          }
        />

        {/* DECLINED */}
        <Route
          path="/declined"
          element={
            // <Protected>
            <Fundraising />
            // </Protected>
          }
        />

        {/* COMPLETED */}
        <Route
          path="/completed"
          element={
            // <Protected>
            <Fundraising />
            // </Protected>
          }
        />

        {/* DEACTIVATED */}
        <Route
          path="/deactivated"
          element={
            // <Protected>
            <Fundraising />
            // </Protected>
          }
        />

        <Route
          path="/setting"
          element={
            // <Protected>
            <Setting />
            // </Protected>
          }
        />
        <Route path="/login" element={<Login />} />

        {/* 404 */}
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </>
  );
}

export default App;
