import React from "react";
import "./intro_five.css";
import Pic1 from "../../assets/img9.jpg";
import Pic2 from "../../assets/img7.jpg";

function IntroFive() {
    return (
        <div className="intro5">
            <div className="container5">
                <div className="cont5-1">
                    <div className="cont5-2">
                        <img className="pic5-1" src={Pic1} alt="5pic1"/>
                    </div>
                    <div className="cont5-3">
                        <img className="pic5-2" src={Pic2} alt="5pic2"/>
                    </div>
                </div>
            </div>
            <div className="intro5Content">
                <p className="textContent5-1">Collaboration is key in music production</p>
                <p className="textContent5-2">we foster an environment where artists can work together seamlessly.<br/> Invite your bandmates or collaborators into our spacious studio for real-time feedback <br/>and creative brainstorming sessions.</p>
            </div>
        </div>
    )
}

export default IntroFive;