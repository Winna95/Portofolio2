import React from 'react';
import { Link } from 'react-router-dom';

export function MyProjectCard({ project }) {
    return (
        <div className="card h-100 shadow">
            <img src={project.img} alt={project.projectName} className="card-img-top object-fit-cover"/>
            <div className="d-flex justify-content-center my-3">
                <Link to={`/project/${project.id}`}><button className="pink-btn border-0 py-1 px-3 rounded-1 fw-bold hover">{project.projectName}</button></Link>
            </div>
        </div>

    );
}