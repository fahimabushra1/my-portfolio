import myPic from "../../assets/images/myPicWithoutBG.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
// import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="mx-8">
            <div id="home" className="flex justify-between justify-items-center">
                <div className="pt-48 pr-40  text-left">
                   <h2 className="font-bold text-2xl">I am Gerold</h2>
                   <h1 className="font-bold text-7xl">Web Developer</h1>
                   <p className="pt-4">I break down complex user experinece problems to create integrity focussed solutions that connect billions of people</p>
                   <div>
                   <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4">Download CV</button>
                 <div className="flex justify-start gap-6 mt-4">
                 <Link to={'https://www.linkedin.com/in/fahima-bushra-a6392a25a/'}><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                   <Link to={'https://github.com/fahimabushra1'}><FontAwesomeIcon icon={faGithub} /></Link>
                   <Link to={'https://www.facebook.com/share/XTiazKJLQSGjaBNY/?mibextid=qi2Omg'}><FontAwesomeIcon icon={faFacebook} /></Link>
                   {/* <Link to={}><FontAwesomeIcon icon={faTwitter} /></Link> */}
                   <Link to={'https://www.instagram.com/bushra_fahima?utm_source=qr&igsh=ZWV0d3B0ZWFxN2F1'}><FontAwesomeIcon icon={faInstagram} /></Link>
                 </div>
                   </div>
                </div>
                <div>
                <img className=" w-68 -mt-16" src= {myPic}/>
                </div>
            </div>
        </div>
    );
};

export default Banner;