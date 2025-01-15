import About from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import LiIcon from "./components/partials/LiIcon";
import Timeline from "./components/partials/Timeline";
function App() {
  return (
    <div className="bg-black relative text-white overflow-hidden px-4 mx-auto">
      <Navbar />
      <Home />

      <div className="relative  my-32 bg-dark text-white ">
        <Timeline>
          <About />
          <About />
          <About />
          <About />
          <LiIcon className={"absolute left-8"} />
          <About />
          <About />
          <About />
          <About />
          <About />
          <About />
        </Timeline>
      </div>
    </div>
  );
}

export default App;
