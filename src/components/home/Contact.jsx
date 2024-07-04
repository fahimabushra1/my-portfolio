import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapLocation, faPhoneSquare,faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
    return (
        <div id="contact"className="p-8 mt-4 bg-yellow-500 rounded-[30px 50px]">
           <h2 className="font-bold text-4xl text-center mb-4">Contact</h2>
           <div className="flex justify-center gap-24 items-center">
            <div className='content-start'>
            <h3 className="font-bold text-2xl text-left mb-4">Drop Me a Message</h3>
                <p>If you have a project in mind or a question or just want to say hello, I'd love to hear from you. Drop me a message, and let's start a conversation.</p>
                <div className='grid lg:grid-rows-3 gap-2 justify-start mt-4'>
                 <div className="flex justify-center items-center gap-4">
                    <div className='ml-4'>
                       <FontAwesomeIcon icon={faPhoneSquare} className='text-purple-700' />
                    </div>
                    <div>
                    <p className="lg:text-xl hover:text-primary">(+880)1884-545974</p>
                    </div>
                </div>
                 <div className="flex justify-center gap-2">
                    <div className='ml-24'>
                       <FontAwesomeIcon icon={faEnvelopeSquare} className='text-purple-700' />
                    </div>
                    <div>
                    <a href="mailto:fahimabushra974@gmail.com"><p className="lg:text-xl hover:text-primary">fahimabushra974@gmail.com</p></a>
                    </div>
                </div>
                 <div className="flex justify-center items-center gap-2">
                    <div className='ml-0'>
                       <FontAwesomeIcon icon={faMapLocation} className='text-purple-700' />
                    </div>
                    <div>
                    <p className="lg:text-xl hover:text-primary">Dhaka,Bangladesh</p>
                    </div>
                </div>
                </div>
            </div>
            <div className='w-full border-s-4 border-purple-500 rounded-3xl shadow-2xl'>
            {/* <div className="card bg-base-500 w-full max-w-sm shrink-0 shadow-2xl"> */}
      <form className="card-body">
        <div className='grid lg:grid-cols-2 gap-3 my-2'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" placeholder="first name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="text" placeholder="last name" className="input input-bordered" required />
        </div>
        </div>
        <div className='grid lg:grid-cols-2 gap-3 my-2'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="number" placeholder="phone number" className="input input-bordered" required />
        </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea type="text" placeholder="message" className="input input-bordered w-full h-32" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#8854d0] text-white">Send</button>
        </div>
      </form>
    {/* </div> */}
            </div>
            </div> 
        </div>
    );
};

export default Contact;