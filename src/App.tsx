import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import PageNotFound from "./components/Pages/PageNotFound";
import Fundraising from "./components/Pages/Fundraising";
import Setting from "./components/Pages/Setting";
// import Protected from "./components/Protected/Protected";

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
        <Route
          path="/fundraising"
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
