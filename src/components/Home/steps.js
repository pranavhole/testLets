import React from "react";
import { Fade } from "react-reveal";
import Stock from "../../svgs/stock";
import Stock2 from "../../svgs/stock2";
import Stock3 from "../../svgs/stock3";
import Stock4 from "../../svgs/stock4";
export default function steps() {
  return (
    <>

      {/* step1 */}

        <div className="flex justify-around abcd2">
          <div className="py-40 pl-50">
            <div className="flex flex-row flex-wrap py-3 w-96">
              <img src={process.env.PUBLIC_URL + "/Images/icon5.gif" } alt="icon1" className="w-10 h-10 mx-2"/>
              <h1 className="text-3xl text-center text-black font-bold">
                Make a<span className="text-teal-900"> Decision</span>
              </h1>
              <p className="py-5 text-center not-italic font-medium text-2xl">
                It’s time to become financially independent steps to start your
                journey with LTI
              </p>
            </div>
          </div>
          <div class="flex items-center px-10 pl-24 abc">
            <Stock/>
          </div>
        </div>

      
      {/* step 2 */}

        <div className="flex justify-around abcd2">
          <div class="flex items-center px-10 pl-24">
            <Stock2/>
          </div>
          <div className=" pl-50">
            <div className="flex flex-row flex-wrap py-3 w-96">
            <img src={process.env.PUBLIC_URL + "/Images/icon5.gif" } alt="icon1" className="w-10 h-10 mx-2"/>
              <h1 className="text-3xl text-center text-black font-bold">
                <span className="text-teal-900"> Subscribe </span> to our Stock
                Trading Courses
              </h1>
              <p className="py-5 text-center not-italic font-medium text-2xl abcd22">
                Get in depth knowledge of stock market by subscribing our Trading in the zone and LTI Options Courses.
              </p>
            </div>
          </div>
        </div>
      
        <div className="flex justify-around abcd2">
          <div class="flex items-center px-10 pl-24 abcd ">
            <img
              src={process.env.PUBLIC_URL + "/Images/step-3.png"}
              className="rounded-2xl w-60"
              alt=""
            />
          </div>
          <div className="py-40 pl-50">
            <div className="flex flex-row flex-wrap py-3 w-96">
            <img src={process.env.PUBLIC_URL + "/Images/icon5.gif" } alt="icon1" className="w-10 h-10 mx-2"/>
              <h1 className="text-3xl text-center text-black font-bold">
                Scheduling<span className="text-teal-900"> Process</span>
              </h1>
              <p className="py-5 text-center not-italic font-medium text-2xl">
                Join our live classes through zoom link, also you can go through recordings. Also we provide you the Mentor support.
              </p>
            </div>
          </div>
          <div class="flex items-center px-10 pl-24 abc">
            <Stock3/>
          </div>
        </div>
      
        <div className="flex justify-around abcd2">
          <div class="flex items-center px-10 pl-24">
            <Stock4/>
          </div>
          <div className="py-25 pl-50">
            <div className="flex flex-row flex-wrap py-3 w-96">
            <img src={process.env.PUBLIC_URL + "/Images/icon5.gif" } alt="icon1" className="w-10 h-10"/>
              <h1 className="text-3xl text-center text-black font-bold"> Transformation
                <span className="text-teal-900">  Completed </span>
              </h1>
              <p className="py-5 text-center not-italic font-medium text-2xl abcd22">
                Novice to Professional Trader Journey start from here.
              </p>
            </div>
          </div>
        </div>
    
    </>
  );
}
