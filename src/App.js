import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-9 col-md-7">
            <Home />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
