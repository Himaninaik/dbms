import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css'
function Navbar(){
    return(
        <>
        <div className="header">
            <div className="custom-navbar">
                <ul>
                    <div className="nav">
                        <div id="head">
                            <a>BLOOD CENTER</a>
                        </div>
                    <li><Link to='/Home'>HOME</Link></li>
                    <li><Link to='/About'>ABOUT US</Link></li>
                    <li><Link to='/Donate'>DONATE</Link></li>
                    <li><Link to='/Service'>SERVICES</Link></li>
                    <li><Link to='/Contact'>CONTACT</Link></li>
                    </div>
                </ul>
            </div>
        </div>
        </>
    );
}
export default Navbar;