import React from "react";
import "./Header.css"

function Header() {
    return (
        <>
            <div className="header-outer-con">
                <ul className="header-list">
                    <li className="header-list-item">
                        Home
                    </li>
                    <li className="header-list-item">
                        Login
                    </li>
                    <li className="header-list-item">
                        Register
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Header;