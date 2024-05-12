import {ProjectCard} from './ProjectCard';
import {schoolProjects, spareTimeProjects} from "../common/Projects";

export function ProjectsSection() {

    return (
        <div >
            <h2 className="text-center my-5">School projects:</h2>
            <div className="row">

                {schoolProjects.map(project => project.type === 'school' ? <div className="col-lg-4 col-md-6 col-sm-10 mb-4 mx-auto"><ProjectCard key={project.id} project={project} /></div> : <div/>)}

            </div>

            <h2 className="text-center my-5">Spare time projects:</h2>
            <div className="row">
                {spareTimeProjects.map(project => project.type === 'spare' ? <div className="col-lg-4 col-md-6 col-sm-10 mb-4"><ProjectCard key={project.id} project={project} /></div> : <div/>)}
            </div>
        </div>
    );
}


