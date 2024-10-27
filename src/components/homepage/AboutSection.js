import '../../Custom.scss';
import { Link } from "react-router-dom";
import PhotoOfMe from '../images/studentkortbilde.jpg';
import "../common/Global.scss";


export function AboutSection() {
    return (
        <div className="container mt-4">
            <div className="row mx-auto">
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-center text-md-start pb-sm-2 ms-lg-5">
                        <span style={{ color: '#d34972' }}>Hello</span>, I'm Winnie, A Frontend Developer student
                    </h1>
                    <div>
                    <p>
                        I develop responsive websites and have a heart for design.
                    </p>
                        <div className="d-flex">
                    <p>
                        Want to collaborate? See my contact information
                    <Link to="/contact" className="text-black fw-bold text-decoration-none hover"> Here.</Link>
                    </p>
                        </div>
                    </div>


                    <div className="d-flex justify-content-center">
                        <a href="https://drive.google.com/file/d/1BIs4FL-pFoGPFe1x-NcJJwaaFb5n4HJD/view?usp=sharing">
                            <button className="pink-btn border-0 rounded-1 py-1 px-3 fw-bold me-2 hover">Download CV</button>
                        </a>
                        <Link to="/myprojects">
                            <button className="pink-btn border-0 rounded-1 py-1 px-3 fw-bold ms-2 hover">See my projects</button>
                        </Link>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center mt-2">
                    <img src={PhotoOfMe} alt="me" className="img-of-me object-fit-cover rounded-circle mt-4"/>
                </div>
            </div>
        </div>
    );
}
