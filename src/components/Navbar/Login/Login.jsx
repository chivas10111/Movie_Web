import "./index.css";
import { Link } from 'react-router-dom';

function Login(){
    return (
        <ul className="login_navigation">
            <li><i className="fa-solid fa-plus"></i></li>
            <li><div>EN</div></li>
            <li>
                <Link to={`login`} style={{ textDecoration: 'none' }}>
                    Login
                </Link>
            </li>
            <li>Join TMDB</li>
            <li><i className="fa-solid fa-magnifying-glass"></i></li>
        </ul>
    )
}

export default Login;