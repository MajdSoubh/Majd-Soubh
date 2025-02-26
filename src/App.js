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
  RoutingIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
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
import INMenuDiningCategories from "./assets/images/p3-categories-page.png";
import INMenuDiningItemsList from "./assets/images/p3-items-list-page.png";
import INMenuDiningItemsPopup from "./assets/images/p3-item-popup.png";
import PMSDashboard from "./assets/images/p4-dashboard.png";
import PMSInventory from "./assets/images/p4-inventory.png";
import PMSInvoice from "./assets/images/p4-invoice.png";
import Contact from "./components/Contact";
import Article from "./components/Article";
import Article1 from "./assets/images/a1-php-routing.jpeg";
import Article2 from "./assets/images/a2-dependency-injection.jpeg";
import Article3 from "./assets/images/a3-building-ioc.jpeg";
import Article4 from "./assets/images/a4-what-is-cors.jpeg";
import Article5 from "./assets/images/a5-jwt.jpeg";
import Article6 from "./assets/images/a6-web-vulnerabilites.jpeg";
import Article7 from "./assets/images/a7-facade.jpeg";

function App() {
  const [showWorkDetails, setShowWorkDetails] = useState(true);

  return (
    <div className="bg-black relative text-white overflow-hidden px-4 mx-auto">
      <Navbar />
      <Home />

      <div className="relative space-y-20 my-20 bg-dark">
        {/* About Section */}
        <div id="about" className="relative">
          <SpotLight
            bgColor={"green"}
            top={"50%"}
            left={"30%"}
            blur="10rem"
            className="!w-[10rem] !h-[8rem]"
          />
          <About />
        </div>

        {/* Experience & Education Section */}
        <div id="experience" className="space-y-10">
          {/* ... (keep timeline switcher and content unchanged) */}
        </div>

        {/* Projects Section */}
        <div id="projects" className="space-y-10">
          <h2 className="mx-auto text-4xl text-slate-100 sm:text-[2.7rem] transition-all w-fit">
            Projects
          </h2>

          <div className="mx-auto space-y-8 w-fit">
            {/* Project 1 - Memonto */}
            <div className="relative">
              <SpotLight
                bgColor={"green"}
                top={"60%"}
                right={"0"}
                blur="10rem"
                className="!w-[10rem] !h-[12rem]"
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
                technologies={[
                  <JSIcon key="js" className="w-6 h-6" />,
                  <NodeIcon key="node" className="w-6 h-6" />,
                  <ReactIcon key="react" width={30} height={30} />,
                  <TailwindCSSIcon key="tailwind" className="w-6 h-6" />,
                ]}
              >
                <img alt="User profile" src={MemontoProfile} />
                <img alt="Home feed" src={MemontoHome} />
                <img alt="Messenger interface" src={MemontoMesenger} />
                <img alt="Registration screen" src={MemontoRegister} />
              </Project>
            </div>

            {/* Project 2 - E-Store */}
            <div className="relative">
              <SpotLight
                bgColor={"purple"}
                top={"60%"}
                right={"0"}
                blur="10rem"
                className="!w-[10rem] !h-[12rem]"
              />
              <Project
                name="E-Store"
                textColorClass="text-purple"
                buttonColorClass="hover:bg-purple/60"
                description="online store application enables administrators to add products and view reports, while allowing users to purchase products."
                features={[
                  "Implemented a responsive UI for smooth navigation and checkout processn",
                  "Establish product managment system",
                  "Empowered owners with interactive charts to improve data understanding",
                  "Provided real-time updates on recent events",
                  "Performed secure payment processing and user authentication to ensure safe transactions",
                ]}
                github="https://github.com/MajdSoubh/Laravel-Vue-Ecommerce"
                technologies={[
                  <PHPIcon key="php" width={30} height={30} />,
                  <LaravelIcon key="laravel" className="w-6 h-6" />,
                  <JSIcon key="js" className="w-6 h-6" />,
                  <VueIcon key="vue" className="w-6 h-6" />,
                  <TailwindCSSIcon key="tailwind" className="w-6 h-6" />,
                ]}
              >
                <img alt="Store homepage" src={EStoreHome} />
                <img alt="Admin dashboard" src={EStoreDashboard} />
                <img alt="Shopping cart" src={EStoreCart} />
                <img alt="Sales reports" src={EStoreReport} />
              </Project>
            </div>

            {/* Project 3 - In-Room Dining Menu */}
            <div className="relative">
              <SpotLight
                bgColor={"green"}
                top={"60%"}
                right={"0"}
                blur="10rem"
                className="!w-[10rem] !h-[12rem]"
              />
              <Project
                name="In-Room Dining Menu"
                description="A mobile-first web application that allows users to explore restaurant menu categories, view detailed item descriptions, and add items to their cart."
                mobile={true}
                features={[
                  "Designed a responsive UI for seamless navigation across mobile and tablet devices",
                  "Developed a dynamic category system with intuitive item listing page",
                  "Utilized React Router for smooth navigation",
                ]}
                github="https://github.com/MajdSoubh/Room-Dining"
                link="https://room-dining.vercel.app/"
                technologies={[
                  <TypeScriptIcon key="typescript" className="w-6 h-6" />,
                  <ReactIcon key="react" width={30} height={30} />,
                  <TailwindCSSIcon key="tailwind" className="w-6 h-6" />,
                ]}
              >
                <img
                  alt="Categories view"
                  className="w-full md:w-3/5"
                  src={INMenuDiningCategories}
                />
                <img
                  alt="Items list"
                  className="w-full md:w-3/5"
                  src={INMenuDiningItemsList}
                />
                <img
                  alt="Item details"
                  className="w-full md:w-3/5"
                  src={INMenuDiningItemsPopup}
                />
              </Project>
            </div>

            {/* Project 4 - PMS */}
            <div className="relative">
              <SpotLight
                bgColor={"purple"}
                top={"60%"}
                right={"0"}
                blur="10rem"
                className="!w-[10rem] !h-[12rem]"
              />
              <Project
                name="PMS"
                textColorClass="text-purple"
                buttonColorClass="hover:bg-purple/60"
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
                technologies={[
                  <PHPIcon key="php" width={30} height={30} />,
                  <LaravelIcon key="laravel" className="w-6 h-6" />,
                  <JSIcon key="js" className="w-6 h-6" />,
                  <ReactIcon key="react" width={30} height={30} />,
                  <TailwindCSSIcon key="tailwind" className="w-6 h-6" />,
                ]}
              >
                <img
                  alt="Invoice management"
                  className="md:h-[200px] md:w-[331px]   lg:w-[492px] lg:h-[295px]"
                  src={PMSInvoice}
                />
                <img
                  alt="Main dashboard"
                  className="md:h-[200px] md:w-[331px]   lg:w-[492px] lg:h-[295px]"
                  src={PMSDashboard}
                />
                <img
                  alt="Inventory tracking"
                  className="md:h-[200px] md:w-[331px]   lg:w-[492px] lg:h-[295px]"
                  src={PMSInventory}
                />
              </Project>
            </div>
          </div>
        </div>

        {/* Articles */}
        <div className="space-y-10 w-full mx-auto md:w-[736px] lg:w-[900px]">
          {/* Title */}
          <h2 className=" mx-auto text-4xl text-slate-100 sm:text-[2.7rem] transition-all w-fit ">
            Articles
          </h2>
          <div className="  w-full flex flex-col flex-wrap gap-4 justify-center items-center md:items-start md:flex-row">
            {/* Article 1 */}
            <div className="relative ">
              <Article
                title="Implementing PHP Routing with Dynamic Parameters"
                date="2024-08-21"
                link="https://medium.com/@majdsoubh/implementing-php-routing-with-dynamic-parameters-18940bd80795"
                icon={<RoutingIcon width={50} height={50} />}
                image={Article1}
              />
            </div>
            {/* Article 2 */}
            <div className="relative ">
              <Article
                title="How Dependency Injection, Inversion of Control, and IoC Containers Improve Code Flexibility"
                date="2024-11-04"
                link="https://medium.com/@majdsoubh/how-dependency-injection-inversion-of-control-and-ioc-containers-improve-code-flexibility-e7e7943e8d0e"
                image={Article2}
              />
            </div>
            {/* Article 3 */}
            <div className="relative ">
              <Article
                title="Building a Simple IoC Container in PHP"
                date="2024-12-28"
                link="https://medium.com/@majdsoubh/building-a-simple-ioc-container-in-php-4944d2b848a9"
                image={Article3}
              />
            </div>
            {/* Article 7 */}
            <div className="relative ">
              <Article
                title="Laravel Facades: Traditional and Real-Time"
                date="2025-01-28"
                link="https://medium.com/@majdsoubh/laravel-facades-traditional-and-real-time-330a36e71111"
                image={Article7}
              />
            </div>
            {/* Article 4 */}
            <div className="relative ">
              <Article
                title="What is CORS (Cross-Origin-Resource-Sharing)"
                date="2024-09-13"
                link="https://medium.com/@majdsoubh/what-is-cors-cross-origin-resource-sharing-39a54bec6ca5"
                image={Article4}
              />
            </div>
            {/* Article 5 */}
            <div className="relative ">
              <Article
                title="Understanding JWT (JSON Web Token)"
                date="2024-10-12"
                link="https://medium.com/@majdsoubh/understanding-jwt-json-web-token-177ce1e7d38a"
                image={Article5}
              />
            </div>
            {/* Article 6 */}
            <div className="relative ">
              <Article
                title="Exposing Common Web Vulnerabilities"
                date="2024-09-10"
                link="https://medium.com/@majdsoubh/exposing-common-web-vulnerabilities-be4ac446e5ed"
                image={Article6}
              />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="space-y-10">
          <h2 className="mx-auto text-4xl text-slate-100 sm:text-[2.7rem] transition-all w-fit">
            Contact Me
          </h2>
          <div className="w-fit mx-auto relative">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
