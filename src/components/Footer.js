import React from "react";
import { Link } from "react-router-dom";

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
                <li className="pb-2"><Link to="#" className="hover:text-blue-800">Courses</Link> </li>
                <li className="pb-2"><Link to="#" className="hover:text-blue-800">Home</Link> </li>
                <li className="pb-2"><Link to="#" className="hover:text-blue-800">My Learning</Link> </li>
                <li className="pb-2"><Link to="#" className="hover:text-blue-800">Profile</Link></li>
              </ul>
            </div>
            <div className="mb-5 ">
              <h4 className="font-bold text-white text-xl pb-2"> Company </h4>
              <ul>
                <li className="pb-2"><Link to="#" className="hover:text-blue-800">About Us</Link> </li>
                <li className="pb-2"><Link to="#" className="hover:text-blue-800">Terms of Services</Link> </li>
                <li className="pb-2"><Link to="#" className="hover:text-blue-800">Privacy Policy</Link> </li>
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
              <Link to="#" className="w-10 h-10 mx-1 inline-block pt-1"><img src="http://localhost:3000/Images/twitter.png" alt="kk"></img></Link>
              <Link to="#" className="w-10 h-10 mx-1 inline-block pt-1"><img src="http://localhost:3000/Images/linkedIn.png" alt="kk"></img></Link>
              <Link to="#" className="w-10 h-10 mx-1 inline-block pt-1"><img src="http://localhost:3000/Images/Insta.png" alt="kk"></img></Link>
              <Link to="#" className="w-10 h-10 mx-1 inline-block pt-1"><img src="http://localhost:3000/Images/YT.png" alt="kk"></img></Link>
             </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
