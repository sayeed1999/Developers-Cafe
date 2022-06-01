import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Caffe from "./components/Caffe/Caffe";
import ChitChat from "./components/ChitChat/ChitChat";
import NavBar from "./components/NavBar/NavBar";
import AppRoutes from "./constants/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-9 col-md-7">
            <Routes>
              <Route exact path={AppRoutes.Home} element={<Caffe />} />
              <Route exact path={AppRoutes.Caffe} element={<Caffe />} />
              <Route exact path={AppRoutes.ChitChat} element={<ChitChat />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
