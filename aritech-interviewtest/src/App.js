import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import SignUpPage from "./MyWebApp/pages/SignUpPage/SignUpPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
