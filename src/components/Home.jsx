import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import Dashboard from "./Dashboard.jsx";

const Home = () => {
  return (
    <>
      <div
        className="flex justify-between items-center text-4xl h-16"
        style={{ backgroundColor: `#09ba94` }}
      >
        <GiHamburgerMenu size={50} className="pl-4" />
        <h1 className="text-2xl">Home</h1>
        <CgProfile size={50} className="pr-4" />
      </div>
      <Dashboard />
    </>
  );
};

export default Home;
