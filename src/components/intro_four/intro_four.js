import React from "react";
import "./intro_four.css";
import Pic1 from "../../assets/img0.jpg";
import Pic2 from "../../assets/img1.jpg";
import Pic3 from "../../assets/img3.jpg";

function IntroFour() {
    return (
        <div className="intro4">
            <div className="container">
                <div className="container1">
                </div>
                <div className="container2">
                    <img src={Pic1} className="pic1" alt="pic1"/>
                </div>
                <div className="container3">
                    <img src={Pic2} className="pic2" alt="pic2"/>
                </div>
                <div className="container4">
                <img src={Pic3} className="pic3" alt="pic3"/>
                </div>
            </div>
            <div className="intro4Content">
                <p className="textContent1">Collaboration is key in music production</p>
                <p className="textContent2">we foster an environment where artists can work together seamlessly.<br/> Invite your bandmates or collaborators into our spacious studio for real-time feedback <br/>and creative brainstorming sessions.</p>
            </div>
        </div>
    )
}

export default IntroFour;