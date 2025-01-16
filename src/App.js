import { useState } from "react";
import About from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import EducationDetails from "./components/partials/EducationDetails";
import Timeline from "./components/partials/Timeline";
import { motion } from "framer-motion";
import WorkDetials from "./components/partials/WorkDetails";
import SpotLight from "./components/SpotLight";
import { AcademicIcon, WorkIcon } from "./components/partials/Icons";

function App() {
  const [showWorkDetails, setShowWorkDetails] = useState(false);

  return (
    <div className="bg-black relative  text-white overflow-hidden px-4 mx-auto">
      <Navbar />
      <Home />

      <div className="relative my-20 bg-dark">
        {/* About */}
        <div className="relative">
          <SpotLight
            bgColor={"green"}
            top={"50%"}
            left={"30%"}
            blur="10rem"
            className=" !w-[10rem] !h-[8rem]"
          />
          <About />
        </div>

        {/* Experince & Education */}
        <div className="mt-16 space-y-8">
          {/* Timeline Switcher */}
          <div className="mx-auto flex justify-center items-center gap-8">
            <button
              onClick={() => setShowWorkDetails(true)}
              className={`font-bold flex items-center py-2 px-3 gap-4 text-xl tracking-wide  transition-all ${
                showWorkDetails
                  ? " rounded-md  bg-emerald-800/80 text-white "
                  : "text-gray-500 "
              }`}
            >
              <WorkIcon
                className={` fill-gray-500 !w-8 ${
                  showWorkDetails ? " !fill-white " : " "
                }`}
              />
              Work
            </button>

            <button
              onClick={() => setShowWorkDetails(false)}
              className={`font-bold items-center flex py-2 px-3 gap-4 text-xl tracking-wide  transition-all ${
                !showWorkDetails
                  ? "  rounded-md bg-emerald-800/80 text-white "
                  : "text-gray-500 "
              }`}
            >
              <AcademicIcon
                className={` fill-gray-500  !w-8 ${
                  !showWorkDetails ? " !fill-white " : ""
                }`}
              />
              Education
            </button>
          </div>

          {showWorkDetails && (
            <Timeline>
              <WorkDetials
                position="Software Engineer"
                companyLink="http=//intenta.de"
                company="LIT"
                time="Nov 2023 - Jun 2024"
                address="Lebanon, Remote"
                work="LIT, is a subsidiary of Intenta GmbH in Germany, focuses on developing smart sensors and car driving assistant products."
                accomplishments={[
                  "Collaborating with cross-functional teams to optimize localization algorithms, resulting in a 25% increase in availability and ensuring continuous service for end-users",
                  "Refactored 6+ key components, improving code efficiency by 30%",
                  "Generating automated tests for 5 critical features, resulting in improved feature stability",
                  "Performed code reviews, ensuring high-quality code and consistent development standards",
                ]}
              />

              <WorkDetials
                position="Full-Stack Developer"
                company="Freelancer"
                time="2021-Present"
                address="Remote"
                work="Launched custom web applications for 4 clients, leveraging PHP, Laravel, React and Vue.js to meet their needs."
                accomplishments={[
                  "Worked on planning, designing, developing and testing small to mid-scaled projects",
                  "Continuous maintainance for the systems",
                ]}
              />
            </Timeline>
          )}
          {!showWorkDetails && (
            <Timeline>
              <EducationDetails
                type="Bachelor Of Information Technology"
                time="2018-2023"
                place="Tishreen University"
                info="Relevant courses included Software Engineering, Data Structures and Algorithms, Database Management Systems, Web Development and Artificial Intelligence."
              />

              <EducationDetails
                type="Master Web Science"
                time="2023-present"
                place="Syrian Virtual University"
                info="This program offers advanced expertise in web technologies and internet systems, covering topics like web development, data mining, analysis, security, and cloud computing"
              />
            </Timeline>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
