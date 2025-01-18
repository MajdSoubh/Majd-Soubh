import { useState } from "react";
import About from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import EducationDetails from "./components/partials/EducationDetails";
import Timeline from "./components/partials/Timeline";
import WorkDetials from "./components/partials/WorkDetails";
import SpotLight from "./components/SpotLight";
import {
  AcademicIcon,
  JSIcon,
  LaravelIcon,
  NodeIcon,
  PHPIcon,
  ReactIcon,
  TailwindCSSIcon,
  VueIcon,
  WorkIcon,
} from "./components/partials/Icons";
import Project from "./components/Project";
import MemontoHome from "./assets/images/p1-home-mobile.png";
import MemontoMesenger from "./assets/images/p1-messenger-mobile.png";
import MemontoProfile from "./assets/images/p1-profile.png";
import MemontoRegister from "./assets/images/p1-signup.png";
import EStoreHome from "./assets/images/p2-home.png";
import EStoreDashboard from "./assets/images/p2-dashboard.png";
import EStoreReport from "./assets/images/p2-reports.png";
import EStoreCart from "./assets/images/p2-cart.png";
import PMSDashboard from "./assets/images/p3-dashboard.png";
import PMSInventory from "./assets/images/p3-inventory.png";
import PMSInvoice from "./assets/images/p3-invoice.png";

function App() {
  const [showWorkDetails, setShowWorkDetails] = useState(false);

  return (
    <div className="bg-black relative  text-white overflow-hidden px-4 mx-auto">
      <Navbar />
      <Home />

      <div className="relative space-y-20 my-20 bg-dark">
        {/* About */}
        <div className="relative ">
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
        <div className="space-y-10">
          {/* Timeline Switcher */}
          <div className="mx-auto flex justify-center items-center gap-8">
            <button
              onClick={() => setShowWorkDetails(true)}
              className={`font-bold flex items-center py-2 px-3 gap-2 text-md tracking-wide  transition-all ${
                showWorkDetails
                  ? " rounded-md  bg-turquoise/50 text-white "
                  : "text-gray-500 "
              }`}
            >
              <WorkIcon
                className={` fill-gray-500 !size-6 ${
                  showWorkDetails ? " !fill-white " : " "
                }`}
              />
              Work
            </button>

            <button
              onClick={() => setShowWorkDetails(false)}
              className={`font-bold items-center flex py-2 px-3 gap-2 text-md tracking-wide  transition-all ${
                !showWorkDetails
                  ? "  rounded-md bg-turquoise/50 text-white "
                  : "text-gray-500 "
              }`}
            >
              <AcademicIcon
                className={` fill-gray-500  !size-6  ${
                  !showWorkDetails ? " !fill-white " : ""
                }`}
              />
              Education
            </button>
          </div>

          {/* TimeLine Box */}
          <div>
            {showWorkDetails && (
              <Timeline dateRanges={["Nov 2023 - Jun 2024", "2021-Present"]}>
                <WorkDetials
                  position="Software Engineer"
                  companyLink="https://intenta.de"
                  company="Lebanon Information Technology"
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
              <Timeline dateRanges={["2018-2023", "2023-present"]}>
                <EducationDetails
                  type="Bachelor Of Information Technology"
                  place="Tishreen University"
                  info="Relevant courses included Software Engineering, Data Structures and Algorithms, Database Management Systems, Web Development and Artificial Intelligence."
                />

                <EducationDetails
                  type="Master Web Science"
                  place="Syrian Virtual University"
                  info="This program offers advanced expertise in web technologies and internet systems, covering topics like web development, data mining, analysis, security, and cloud computing"
                />
              </Timeline>
            )}
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-10">
          {/* Title */}
          <h2 className="mx-auto text-4xl text-slate-100 sm:text-[2.7rem] transition-all w-fit ">
            Projects
          </h2>
          <div className="mx-auto space-y-8 w-fit">
            {/* Project 1 */}
            <div className="relative">
              <SpotLight
                bgColor={"green"}
                top={"60%"}
                right={"0"}
                blur="10rem"
                className=" !w-[10rem] !h-[12rem]"
              />
              <Project
                name="Memonto"
                description="simple social media platform for sharing posts and real-time chatting, designed to keep users seamlessly connected with friends and communities"
                features={[
                  "Share posts with your network",
                  "Real-time chat functionality for instant communication",
                  "Clean and intuitive user interface",
                ]}
                github="https://github.com/MajdSoubh/Memonto"
                screenshots={[
                  MemontoProfile,
                  MemontoHome,
                  MemontoMesenger,
                  MemontoRegister,
                ]}
                technologies={[
                  <JSIcon />,
                  <NodeIcon />,
                  <ReactIcon width={30} height={30} />,
                  <TailwindCSSIcon />,
                ]}
              />
            </div>
            {/* Project 2 */}
            <div className="relative">
              <SpotLight
                bgColor={"purple"}
                top={"60%"}
                right={"0"}
                blur="10rem"
                className=" !w-[10rem] !h-[12rem]"
              />
              <Project
                textColorClass="text-purple"
                buttonColorClass="hover:bg-purple/60"
                name="E-Store"
                description="online store application enables administrators to add products and view reports, while allowing users to purchase products."
                features={[
                  "Implemented a responsive UI for smooth navigation and checkout process",
                  "Establish product managment system",
                  "Empowered owners with interactive charts to improve data understanding",
                  "Provided real-time updates on recent events",
                  "Performed secure payment processing and user authentication to ensure safe transactions",
                ]}
                github="https://github.com/MajdSoubh/Laravel-Vue-Ecommerce"
                screenshots={[
                  EStoreHome,
                  EStoreDashboard,
                  EStoreCart,
                  EStoreReport,
                ]}
                technologies={[
                  <PHPIcon width={30} height={30} />,
                  <LaravelIcon />,
                  <JSIcon />,
                  <VueIcon />,
                  <TailwindCSSIcon />,
                ]}
              />
            </div>
            {/* Project 3 */}
            <div className="relative">
              <SpotLight
                bgColor={"green"}
                top={"60%"}
                right={"0"}
                blur="10rem"
                className=" !w-[10rem] !h-[12rem]"
              />
              <Project
                name="PMS"
                description="web application allows pharmacist to manage and track all information about their pharmacy such as Inventory, Invoices, Purchases, Vouchers, Employees."
                features={[
                  "Allow users to create accounts and manage their own Pharmacies",
                  "Shows the Information about Drugs, Inventory, Customer, Invoices, Purchases, Suppliers, Voucher and allow to create or update this information",
                  "Ability to add Employees to Pharmacy and manage their permissions and roles",
                  "Simplified the process of invoice creation by automating the steps involved, resulting in increased efficiency",
                  "Manage and track the information of Drugs (Out Of The Stocks , Expired)",
                  "Provide Reports for all kind of information",
                ]}
                github="https://github.com/MajdSoubh/PMS"
                screenshots={[PMSInvoice, PMSDashboard, PMSInventory]}
                technologies={[
                  <PHPIcon width={30} height={30} />,
                  <LaravelIcon />,
                  <JSIcon />,
                  <ReactIcon width={30} height={30} />,
                  <TailwindCSSIcon />,
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
