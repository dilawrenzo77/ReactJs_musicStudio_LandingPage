import React from "react";
import Pic2 from "../../assets/img5.jpg";
import Pic3 from "../../assets/img8.jpg";
import "./intro_two.css";

function Intro_two() {
    return (
        <div className="intro2">
            <div className="cont">
                <div className="cont1">
                    
                </div>
                <div className="cont2">
                    <img className="intro2Img" src={Pic2} alt="intro2Img"/>
                </div>
                <div className="cont3">
                    <img className="intro2Img2" src={Pic3} alt="intro2Img2"/>
                </div>
            </div>
            <div className="intro2Content">
                <p className="textCont1">Making music isn't easy, It takes time effort and learning, But<br/> when you're in the flow, it's incredibly Rewarding.</p>
                <p className="textCont2">Our studio provides a state of the art production facilities<br/> to easy the flow of your art.</p>
            </div>
        </div>
    )
}

export default Intro_two;
