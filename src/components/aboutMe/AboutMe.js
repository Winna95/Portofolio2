import PhotoOfMe from '../images/studentkortbilde.jpg'
import "../common/Global.scss";
import { FaHtml5, FaCss3Alt, FaJs, FaFigma, FaWordpress, FaDesktop, FaCode } from 'react-icons/fa';
import "./AboutMe.scss";

export function AboutMe() {
    return (
        <div className="container">
            <div className="row">
            <h1 className="text-center fw-bold my-5">About me</h1>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <p>
                        Hello! my name is Winnie. I'm based in Norway. My fascination with the visual realm has always been a driving force behind my creations, pushing me to prioritize aesthetics. Among the qualities I hold dear are my curiosity, creativity, empathy, and knack for finding solutions.
                    </p>
                    <p>
                        I'm currently studying Frontend development at Noroff - school of
                        technology. This journey has ignited a profound passion for design within me, especially as it's been a prominent focus of my studies. Through this program, I've honed skills in crafting design elements, constructing wireframes and prototypes, and conducting user testing using tools like Hotjar. Additionally, I've delved into the realm of building responsive websites using HTML, CSS, Javascript and React.
                    </p>
                </div>
                <div className="col-md-6 text-center">
                    <img
                        src={PhotoOfMe}
                        alt="img of me"
                        className="img-of-me object-fit-cover"
                    />
                </div>
            </div>
                <h2 className="text-center my-5">Skills</h2>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="text-center">
                                <p><FaHtml5 /> HTML 5</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="text-center">
                                <p><FaCss3Alt /> CSS 3</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="text-center">
                                <p><FaJs /> JavaScript</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="text-center">
                                <p><FaFigma /> Figma</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="text-center">
                                <p><FaWordpress /> WordPress</p>
                        </div>
                    </div>
                </div>
            <div className="line my-5"></div>
                <h2 className="text-center">What I do?</h2>
                <div className="row mb-5">
                    <div className="col-md-6">
                        <div className="text-center">
                                <FaDesktop size={40} color="blue" />
                                <h3 className="">UI/UX Design</h3>
                                <p className="">
                                    I create wireframes and prototypes for responsive websites and
                                    apps using Figma.
                                </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center">
                                <FaCode size={40} color="green" />
                                <h3 className="">Website</h3>
                                <p className="">
                                    I develop responsive websites for your company, using HTML, CSS, JavaScript and React.
                                </p>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    );
}

