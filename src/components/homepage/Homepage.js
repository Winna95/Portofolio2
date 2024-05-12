import {AboutSection} from "./AboutSection";
import {ProjectsSection} from "./ProjectSection";

export function Homepage() {
    return (
        <div className="container">
            <div className="row">
            <AboutSection/>
            <ProjectsSection/>
        </div>
        </div>
    );
}