import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { SpotLight } from "./components/SpotLight";

function App() {
  return (
    <div className="bg-black-100 text-white overflow-hidden">
      <SpotLight bgColor={"#4ade80"} left={"0px"} top={"0px"} />
      <SpotLight bgColor={"#ff00ff"} right={"0px"} top={"600px"} />
      <div className="z-10 relative">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
