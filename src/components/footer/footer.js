import React from 'react';
import logoImg from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import pinterest from "../../assets/pinterest.png";
import whatsapp from "../../assets/whatsapp.png";
import "./footer.css";

function Footer() {
    return (
        <div  className='footer'>
            <div className='floor1'>
                <div className="block1">
                    <ul className='items1'>
                        <li>Register Live</li>
                        <li>About Zeus</li>
                        <li>Jobs</li>
                    </ul>
                    <div className="socialIcons">
                        <img className='si' src={facebook} alt='facebookicon'/>
                        <img className='si' src={pinterest} alt='pinteresticon'/>
                        <img className='si' src={instagram} alt='instagramicon'/>
                        <img className='si' src={whatsapp} alt='whatsappicon'/>
                    </div>
                </div>
                <div className="block2">
                    <h3 className="newsletterHeading">Signup to our Newsletter</h3>
                    <p className='newletterText'>Enter your Email Address to stay up to date with the latest offers,<br/> tutorials, downloads and more</p>
                    <input type="text" className='input' placeholder='email' />
                    <button className='SignUpButton'>Signup</button>
                </div>
            </div>
            <div className='floor2'>
                <div className="block3">
                    <ul className='community'>
                        <h4>Community</h4>
                        <li>Find Zeus user groups</li>
                        <li>Find certified training</li>
                        <li>Become a certified trainer</li>
                    </ul>
                </div>
                <div className="block4">
                    <ul className='TechnicalTeams'>
                        <h4>Technical Teams</h4>
                        <li>Sound Engineers</li>
                        <li>Light Technicians</li>
                        <li>Directors</li>
                    </ul>
                </div> 
            </div>
            <div className='floor3'>
                <div className="block5">
                    <ul className='Contacts'>
                        <li>Archive</li>
                        <li>Contact Us</li>
                        <li>Press</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Settings</li>
                        <li>Partners</li>
                    </ul>
                </div>
                <div className="block6">
                    <p>Made in Nigeria</p>
                    <img src={logoImg} alt="logoImage" className='logoImg'/>
                </div>
            </div>
        </div>
    );
}

export default Footer;

