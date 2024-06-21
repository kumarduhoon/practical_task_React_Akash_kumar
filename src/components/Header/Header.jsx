import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="header-outer-con">
                <ul className="header-list">
                    <Link to="/">
                        <li className="header-list-item">
                            Home
                        </li>
                    </Link>
                    <Link to="/login">
                        <li className="header-list-item">
                            Login
                        </li>
                    </Link>
                    <Link to="/regitser">
                        <li className="header-list-item">
                            Register
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    );
}

export default Header;