import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import PhotoOfFlowerGirl from '../images/vecteezy_beautiful-girl-in-a-hat-with-lily-flowers-in-her-hands_16768906.jpg';
import {Link} from "react-router-dom";
import "./Contactme.scss"
import "../common/Global.scss"

export function ContactMe() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="text-center">How to contact me?</h1>
                    <div className="mx-auto col-10">
                    <p >
                        Thank you for visiting my portfolio. I really hope you liked my work. Want to get in touch? I would love to hear from you. Here is how you can reach me:
                    </p>

                        <p><FaEnvelope /> Email: winniee@hotmail.no</p>
                        <p>
                            <FaLinkedin /> LinkedIn profile
                            <Link
                                to="https://www.linkedin.com/in/winnie-%C3%B8rbek-4382ba183/?originalSubdomain=no"
                                className="text-decoration-none text-black fw-bold hover"
                            > Here</Link>
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="text-center">
                        <img
                            src={PhotoOfFlowerGirl}
                            alt="Girl holding flowers"
                            className="rounded-circle object-fit-cover flowerGirl-img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
