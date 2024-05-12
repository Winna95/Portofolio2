import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.scss"
import '../../Custom.scss';
import "../common/Global.scss"
export function ProjectCard({ project }) {
    return (
        <Link className="text-decoration-none hover shadow" to={`/project/${project.id}`}>
            <div className="card h-100 shadow">
                <img
                    src={project.img}
                    alt=""
                    className="card-img-top object-fit-cover"
                />
                <div className="card-body">
                    <h3 className="card-title text-center">{project.projectName}</h3>
                    <p className="card-text">{project.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    {project.type === 'school' ? (
                        <div>
                    <Link to={project.netlifyLink}>
                        <button className="btn text-black fw-bold me-2 hover">Visit site</button>
                    </Link>
                    <Link to={project.gitHubLink}>
                        <button className="btn text-black fw-bold ms-2 hover">GitHub</button>
                    </Link></div> ) : <div><Link to={project.figmaLink} className="">
                    <button className="btn text-black fw-bold hover">See in Figma</button>
                    </Link></div>}

                </div>
            </div>
        </Link>
    );
}

