import "./App.css";
import Home from "./components/Home.jsx";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center">
        <div className="w-3/5 h-screen">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
