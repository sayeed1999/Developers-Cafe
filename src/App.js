import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Caffe from "./components/Caffe/Caffe";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-9 col-md-7">
            <Routes>
              <Route exact path={"/"} element={<Caffe />} />
              <Route exact path={"/caffe"} element={<Caffe />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
