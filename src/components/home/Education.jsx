

const Education = () => {
    return (
        <div id="education" className="p-8 mt-4">
         <h2 className="font-bold text-4xl text-center mb-4">Education</h2>
         <div className="flex justify-between items-center">
            <div className="font-bold w-1/2 border-r-8 border-purple-500 rounded-lg mr-4 p-4 shadow-lg bg-yellow-500">
              <h2 className="text-xl">Jagannath University,Dhaka, Bangladesh</h2>
              <p> BBA (Marketing)</p>
              <p>2014</p>
            </div>
            <div className="font-bold w-1/2 border-r-8 p-4 border-purple-500 bg-yellow-500 rounded-lg shadow-lg">
              <h2 className="text-xl">Jagannath University,Dhaka, Bangladesh</h2>
              <p> MBA (Marketing)</p>
              <p>2015</p>
            </div>
         </div>
</div>
    );
};

export default Education;