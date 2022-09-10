import "./App.css";
import Header from "./components/HomePages/Header";
import About from "./components/HomePages/About";
// import Contact from './components/HomePages/Contact';
import Education from "./components/HomePages/Education";
import Experience from "./components/HomePages/Experience";
import Footer from "./components/HomePages/Footer";
import Login from "./components/HomePages/Login";
import NavBar from "./components/HomePages/NavBar";
import Projects from "./components/HomePages/Projects";
//Admin component
import Admin from "./components/AdminComponents/Admin";
//Edit components

import EditAbout from "./components/EditComponents/EditAbout";
import EditEducation from "./components/EditComponents/EditEducation";
import EditExperience from "./components/EditComponents/EditExperience";
import EditProjects from "./components/EditComponents/EditProjects";
import { Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
function App() {
  return (
    <div className="App">
      <NavBar />

      <Element className="Home">
        <Header />
      </Element>

      <Element className="About">
        <About />
      </Element>

      <Element className="Education">
        <Education />
      </Element>

      <Element className="Projects">
        <Projects />
      </Element>

      <Element className="Experience">
        <Experience />
      </Element>

      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
      <Routes>
        <Route path="/edit/:id" element={<EditAbout />} />
        <Route path="/editEducation/:id" element={<EditEducation />} />
        <Route path="/editProjects/:id" element={<EditProjects />} />
        <Route path="/editExperience/:id" element={<EditExperience />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
