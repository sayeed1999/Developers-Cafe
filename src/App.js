import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Caffe from "./components/modules/Caffe/Caffe";
import ChitChat from "./components/modules/ChitChat/ChitChat";
import QuizDashBoard from "./components/modules/QuizDashBoard/QuizDashBoard";
import NavBar from "./components/NavBar/NavBar";
import AppRoutes from "./constants/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Layout>
        <Routes>
          <Route exact path={AppRoutes.Home} element={<Caffe />} />
          <Route exact path={AppRoutes.Caffe} element={<Caffe />} />
          <Route exact path={AppRoutes.ChitChat} element={<ChitChat />} />
          <Route exact path={AppRoutes.Quiz} element={<QuizDashBoard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
