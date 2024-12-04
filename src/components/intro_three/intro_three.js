import React from "react";
import "./intro_three.css";
import Pic4 from "../../assets/img6.jpg";


function Intro_Three() {
    return (
        <div className="intro3">
            <img className="intro3Img" src={Pic4} alt="intro3Img"/>
            <div className="intro3Text">
                <p className="intro3Text1">Our team of experienced sound engineers and producers<br/> are here to guide you through every step of the recording process.</p>
                <p className="intro3Text2">From tracking and mixing to mastering, we ensure that your project sounds polished and professional.<br/> We cater to all genres, so whether you’re into rock, pop, hip-hop, or classical, we’ve got you covered!</p>
            </div>
        </div>
    )
}

export default Intro_Three;