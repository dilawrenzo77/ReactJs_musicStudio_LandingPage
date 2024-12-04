import React from "react";
import "./intro_six.css";
import Pic6 from "../../assets/img10.jpg";


function IntroSix() {
    return (
        <div className="intro6">
            <div className="cont6-1">
                <img className="cont6img" src={Pic6} alt="cont6img"/>
            </div>
            <div className="cont6-2">
                <p className="textContent6">We are really proud of the work we've done so far, but there's so much more to come if you'd like to be part of it, please join us.</p>
                <span className="joinUs">Join us</span>
            </div>
        </div>
    )
}

export default IntroSix;