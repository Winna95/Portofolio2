import React from 'react';
import {schoolProjects, spareTimeProjects} from "../common/Projects";
import {MyProjectCard} from "./ProjectCard";




export function MyProjects() {
    return (
        <div className="container">
            <h2 className="text-center mb-4 fw-bold">School projects:</h2>
            <div className="row">
                {schoolProjects.map(project => project.type === 'school' ? <div className="col-lg-4 col-md-6 col-sm-10 mb-4 mx-auto"><MyProjectCard key={project.id} project={project} /></div> : <div/>)}
            </div>

            <h2 className="text-center mb-4 fw-bold">Spare time projects:</h2>
            <div className="row">
                {spareTimeProjects.map(project => project.type === 'spare' ? <div className="col-lg-4 col-md-6 col-sm-10 mb-4"><MyProjectCard key={project.id} project={project} /></div> : <div/>)}
            </div>
        </div>
    );
}
