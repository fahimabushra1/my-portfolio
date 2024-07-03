import project1 from '../../assets/images/project ss.jpg'
import abstract from '../../assets/images/abstract.png'
import bg from '../../assets/images/bg-4.png'
const Projects = () => {
    return (
        <div id="projects"  className='flex justify-between items-center bg-stone-500  px-4 py-32 text-white'><img src={bg} alt="" className='relative'/>
          <div className='text-wrap w-1/2 absolute'>
          <h2 className="font-bold text-4xl text-left -mt-4 mb-8">My Projects</h2>
            <div className='flex justify-center items-center gap-4'>
               <div>
                <img src={project1} alt="" className='w-80 rounded-lg -mt-12' />
              </div>
            <div>
                <h2 className='font-bold text-xl'>Gloria Jeans Coffee</h2>
               <div>
               <p>Login, Registration & Google Sign-Up </p>
                <p>Search Option, Filter By Categories, and Sorting system</p>
                <p>Developed a REST API for CRUD operations and stored all data in MongoDB.</p>
               </div>
                <button className='bg-stone-400 rounded-lg px-4 mt-4 shadow-2xl'>Live Site</button>
                <button className='bg-stone-400 rounded-lg px-4 mx-4 shadow-2xl'>Github Frontend</button>
                <button className='bg-stone-400 rounded-lg px-4 mt-4 shadow-2xl'>Github Backend</button>
            </div>
            </div>
            <div className='flex justify-center items-center gap-4'>
               <div>
                <img src={project1} alt="" className='w-80 rounded-lg -mt-12' />
              </div>
            <div>
                <h2 className='font-bold text-xl'>Gloria Jeans Coffee</h2>
               <div>
               <p>Login, Registration & Google Sign-Up </p>
                <p>Search Option, Filter By Categories, and Sorting system</p>
                <p>Developed a REST API for CRUD operations and stored all data in MongoDB.</p>
               </div>
                <button className='bg-stone-400 rounded-lg px-4 mt-4 shadow-2xl'>Live Site</button>
                <button className='bg-stone-400 rounded-lg px-4 mx-4 shadow-2xl'>Github Frontend</button>
                <button className='bg-stone-400 rounded-lg px-4 mt-4 shadow-2xl'>Github Backend</button>
            </div>
            </div>
            <div className='flex justify-center items-center gap-4'>
               <div>
                <img src={project1} alt="" className='w-80 rounded-lg -mt-12' />
              </div>
            <div>
                <h2 className='font-bold text-xl'>Gloria Jeans Coffee</h2>
               <div>
               <p>Login, Registration & Google Sign-Up </p>
                <p>Search Option, Filter By Categories, and Sorting system</p>
                <p>Developed a REST API for CRUD operations and stored all data in MongoDB.</p>
               </div>
                <button className='bg-stone-400 rounded-lg px-4 mt-4 shadow-2xl'>Live Site</button>
                <button className='bg-stone-400 rounded-lg px-4 mx-4 shadow-2xl'>Github Frontend</button>
                <button className='bg-stone-400 rounded-lg px-4 mt-4 shadow-2xl'>Github Backend</button>
            </div>
            </div>
          </div>
          <div>
            <img src={abstract} alt="" />
          </div>
        </div>
    );
};

export default Projects;