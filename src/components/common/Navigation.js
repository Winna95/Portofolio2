
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <nav className="navbar navbar-expand">
            <div className="navbar-collapse justify-content-end">
                <ul className="navbar-nav">
                    <li className="nav-item hover"><Link className="nav-link text-black" to="/">Home</Link></li>
                    <li className="nav-item hover"><Link className="nav-link text-black" to="/myprojects">My Projects</Link></li>
                    <li className="nav-item hover"><Link className="nav-link text-black" to="/aboutme">About Me</Link></li>
                    <li className="nav-item hover"><Link className="nav-link text-black" to="/contact">Contact Me</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;








