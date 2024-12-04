import React from "react";
import Pic from "../../assets/img4.jpg";
import "./intro.css";

function Intro() {
    return (
        <div className="intro">
            <img className="introImg" src={Pic} alt="introImg"/>
            <div className="introText">
                <p className="introContent1"><span className="sp">Zeus</span> is a Modern studio equipped with the latest digital audio workstations<br/> high-definition <span className="sp">audio interfaces</span>, and <span className="sp">cutting-edge plugins</span> <br/>that allow for intricate sound manipulation and editing</p>
                <p className="introContent2">Zeus was founded in 1996 and has sinced released a number of <br/>high profile quality records</p>
            </div>
        </div>
    )
}

export default Intro;