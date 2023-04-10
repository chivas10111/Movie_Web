import Logo from "./Logo/logo";
import Navigation from "./Navigation/navigation";
import Login from "./Login/Login";
import "./index.css";

const Navbar = () => {
    return <div id="navbar">
        <Logo/>
        <Navigation/>
        <Login/>
    </div>
};

export default Navbar;