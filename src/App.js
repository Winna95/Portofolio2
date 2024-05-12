import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/common/Layout";
import {Homepage} from "./components/homepage/Homepage";
import {ContactMe} from "./components/contact/Contactme";
import {MyProjects} from "./components/myProjects/MyProjects";
import {AboutMe} from "./components/aboutMe/AboutMe";
import {IndividualProject} from "./components/IndividualProject/IndividualProject";


function App() {
  return (
      <div className="light-grey-bg">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="myprojects" element={<MyProjects />} />
            <Route path="project/:id" element={<IndividualProject />} />
            <Route path="aboutMe" element={<AboutMe/>} />
            <Route path="contact" element={<ContactMe />} />
            <Route path="*" element={<div>Route not found</div>} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
