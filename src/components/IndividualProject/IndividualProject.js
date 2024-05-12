import { Link, useParams } from "react-router-dom";
import { getProjectById } from "../common/Projects";
import "./IndividualProject.scss"
import "../common/Global.scss"
export function IndividualProject() {
    let params = useParams();
    const projectId = params.id

    const project = getProjectById(projectId)
    return (
        <div className="container">
            <div className="row mx-auto">

                <div className="col-md-6 mx-auto">
                    <h2 className="text-center">{project.projectName}</h2>
                    <p>{project.description}</p>
                    {project.type === 'school' ? (
                        <div>
                            <p>See project on GitHub <Link className="text-dark fw-bold text-decoration-none hover" to={project.gitHubLink}>Here</Link></p>
                            <p>Netlify link for project <Link className="text-dark fw-bold text-decoration-none hover" to={project.netlifyLink}>Here</Link></p>
                        </div>
                    ) : <div/> }
                    <p>See project in Figma <Link className="text-dark fw-bold text-decoration-none hover" to={project.figmaLink}>Here</Link></p>
                </div>
                <div className="col-md-6 text-center">
                    <img src={project.img} alt="screenshot" className="project-img-one object-fit-cover mt-md-5" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 text-center my-3">
                    <img src={project.imgTwo} alt="screenshot two" className="object-fit-cover project-img" />
                </div>
            <div className="col-12 col-md-6 text-center my-3">
                    <img src={project.imgThree} alt="screenshot three" className="object-fit-cover project-img" />
            </div>
            </div>
        </div>
    );
}
