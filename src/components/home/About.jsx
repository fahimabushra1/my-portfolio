import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import {faRocket} from '@fortawesome/free-solid-svg-icons'
import {faHand} from '@fortawesome/free-solid-svg-icons'
import abstract from '../../assets/images/abstract.png'
import bg from '../../assets/images/bg-4.png'
const About = () => {
    return (
        <div id="about" className='flex justify-between items-center bg-stone-500  px-4 text-white'><img src={bg} alt="" className='relative'/>
            <div className='text-wrap w-1/2 absolute'>
            <h2 className="font-bold text-3xl text-left -mt-4 mb-4">About Me</h2>
           <p className="text-left"><FontAwesomeIcon icon={faHand} className='text-orange-300' /> I'm FAHIMA SAMSUNNAHAR BUSHRA, a  Humble, enthusiast,active web developer with technical expertise in web application development.I create responsive and interactive websites.I specialize in React.js, leveraging the power of Tailwind CSS and Material UI to bring design to life.</p>
           <br/>
          <p><FontAwesomeIcon icon={faLaptopCode} className='text-blue-700' /> My focus on ensuring that my code is efficient,maintainable,optimized for performance,often dealing with aspects like accessibility, cross browser compatibility and mobile responsive.</p>
            <br/>
          <p><FontAwesomeIcon icon={faRocket} className='text-red-600' /> I transform design concepts into responsive and interactive web pages or optimizing performance for a smoother user journey.My goal is to deliver high-quality,user-friendly products that meet the needs and expectation of users.</p> 
        </div>
        <div><img src={abstract} alt="" /></div>
        </div>
    );
};

export default About;