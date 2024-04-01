import "./App.css";
import Home from "./components/Home.jsx";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center">
        <div className="w-3/5 h-screen relative border-black border-4">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
