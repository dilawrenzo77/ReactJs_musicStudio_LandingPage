import React from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/logo.png";
import "./navBar.css";

function NavBar() {
    return (
        <nav className="nav">
            <img className="logoImg" src={Logo} alt="logoImg"></img>
            <div className="navItems">
                <Link className="navItemList">Live</Link>
                <Link className="navItemList">Push</Link>
                <Link className="navItemList">Link</Link>
                <Link className="navItemList">shops</Link>
                <Link className="navItemList">Jobs</Link>
                <Link className="navItemList">About</Link>
                <Link className="navItemList">More +</Link>
            </div>
            <div className="navItems2">
                <Link className="navItemList2">Try Live for Free</Link>
                <Link className="navItemList2">Account</Link>
                <Link className="navItemList2">LogOut</Link>
            </div>
        </nav>
    )
}

export default NavBar;