import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import ContextProviders from "./components/ContextProviders/ContextProviders";
import Layout from "./components/Layout/Layout";
import Login from "./components/modules/Auth/Login/Login";
import Signup from "./components/modules/Auth/Signup/Signup";
import Caffe from "./components/modules/Caffe/Caffe";
import ProductDetail from "./components/modules/Caffe/ProductDetail/ProductDetail";
import ChitChat from "./components/modules/ChitChat/ChitChat";
import AppRoutes from "./constants/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <ContextProviders>
        <AppDrawer />
        <Layout>
          <Routes>
            <Route exact path={AppRoutes.Home} element={<Caffe />} />
            <Route exact path={AppRoutes.Caffe} element={<Caffe />} />
            <Route
              exact
              path={AppRoutes.ProductDetail}
              element={<ProductDetail />}
            />
            <Route exact path={AppRoutes.ChitChat} element={<ChitChat />} />
            <Route exact path={AppRoutes.Signup} element={<Signup />} />
            <Route exact path={AppRoutes.Login} element={<Login />} />
          </Routes>
        </Layout>
      </ContextProviders>
    </BrowserRouter>
  );
};

export default App;
