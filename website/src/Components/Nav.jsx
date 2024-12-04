import '../Modules/nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <label className="logo">CodingNepal</label> 
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/registration">Registration</Link></li> 
                <li><Link to="/library">Library</Link></li>
                <li><Link to="/lms">LMS</Link></li> 
                <li><Link to="/vlogs">Vlogs</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link className="active" to="/login">Login</Link></li> 
            </ul>
        </nav>
    );
}
