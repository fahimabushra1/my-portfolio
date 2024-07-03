import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import {faRocket} from '@fortawesome/free-solid-svg-icons'
const About = () => {
    return (
        <div id="about" className='mx-8'>
            <h2 className="font-bold text-3xl text-left -mt-4 mb-4">About Me</h2>
           <p className="text-left text-xl">I'm FAHIMA SAMSUNNAHAR BUSHRA a  Humble, enthusiast,active web developer with technical expertise in web application development.I create responsive and interactive websites.I specialize in React.js, leveraging the power of Tailwind CSS and Material UI to bring design to life.<br/><FontAwesomeIcon icon={faLaptopCode} /> My focus on ensuring that my code is efficient,maintainable,optimized for performance,often dealing with aspects like accessibility, cross browser compatibility and mobile responsive.<br/><FontAwesomeIcon icon={faRocket} /> I transform design concepts into responsive and interactive web pages or optimizing performance for a smoother user journey.My goal is to deliver high-quality,user-friendly products that meet the needs and expectation of users.</p> 
        </div>
    );
};

export default About;