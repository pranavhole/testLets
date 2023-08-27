import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="p-10 bg-gray-900 text-gray-200">
        <div className="max-w-7xl mx-auto">
         <div className="px-10 pb-8">
           <div className="text-center text-xl font-bold">
            <div>
            Copyright © Let’s Trade India
            </div>
           </div>
         </div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-0.5">
            <div className="mb-5 ml-10">
              <h4 className="font-bold text-white text-xl pb-2"> Menu </h4>
              <ul>
                <li className="pb-2"><a href="#" className="hover:text-blue-800">Home</a> </li>
                <li className="pb-2"><a href="#" className="hover:text-blue-800">Courses</a> </li>
                <li className="pb-2"><a href="#" className="hover:text-blue-800">My Learning</a> </li>
                <li className="pb-2"><a href="#" className="hover:text-blue-800">Profile</a></li>
              </ul>
            </div>
            <div className="mb-5 ">
              <h4 className="font-bold text-white text-xl pb-2"> Company </h4>
              <ul>
                <li className="pb-2"><a href="#" className="hover:text-blue-800">About Us</a> </li>
                <li className="pb-2"><a href="#" className="hover:text-blue-800">Terms of Services</a> </li>
                <li className="pb-2"><a href="#" className="hover:text-blue-800">Privacy Policy</a> </li>
              </ul>
            </div>
            <div className="mb-5 ">
              <h4 className="font-bold text-white text-xl pb-2">Subsribe Us Today</h4>
              <form className="flex flex-row flex-wrap ">
                <input type="email" placeholder="email@example.com" className="text-black-800 w-2/3 p-2 focus:border-[#1E2A55] rounded"/>
                <button className="p-2 w-1/3 bg-[#2F8433] text-white hover:bg-[#1E2A55] rounded">Subsribe</button>
              </form>
             <div className="py-4 flex flex-row flex-wrap">
              <div className="text-xl font-bold pt-2">Follow Us On: </div>
              <a href="#" className="w-10 h-10 mx-1 inline-block pt-1"><img src="http://localhost:3000/Images/twitter.png"></img></a>
              <a href="#" className="w-10 h-10 mx-1 inline-block pt-1"><img src="http://localhost:3000/Images/linkedIn.png"></img></a>
              <a href="#" className="w-10 h-10 mx-1 inline-block pt-1"><img src="http://localhost:3000/Images/Insta.png"></img></a>
              <a href="#" className="w-10 h-10 mx-1 inline-block pt-1"><img src="http://localhost:3000/Images/YT.png"></img></a>
             </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
