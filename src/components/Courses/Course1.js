import React from 'react';
import { Link } from 'react-router-dom';

export default function Course1(data) {

  return (
    <>

      <div className="flex justify-around pb-4 py-8 pt-20 max-sm:flex-col max-sm:p-0">
        <div class="flex items-center pl-24 max-sm:p-0">
          <img
            src={process.env.PUBLIC_URL + "/Images/image8.png"}
            className="rounded-2xl w-96 max-sm:rounded-none"
            alt=""
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row flex-wrap p-3">
            <img
              src="/Images/image10.png"
              className="w-10 h-10 mx-4 inline-block pt-1"
              alt="duration"
            ></img>
            <div className="text-xl font-medium pt-2 text-[#000000]">
              Duration : <span className="px-20 font-normal max-sm:p-0">3 Months</span>{" "}
            </div>
          </div>

          <div className="flex flex-row flex-wrap p-3">
            <img
              src="/Images/image11.png"
              className="w-10 h-10 mx-4 inline-block pt-1"
              alt="duration"
            ></img>
            <div className="text-xl font-medium pt-2 text-[#000000]">
              Language : <span className="px-20 font-normal max-sm:p-0">English</span>{" "}
            </div>
          </div>

          <div className="flex flex-row flex-wrap p-3">
            <img
              src="/Images/image12.png"
              className="w-10 h-10 mx-4 inline-block pt-1"
              alt="duration"
            ></img>
            <div className="text-xl font-medium pt-2 text-[#000000]">
              Total Charges :{" "}
              <span className="px-10 text-[#216825] font-medium max-sm:p-0">₹ 4,999</span>{" "}
            </div>
          </div>

          <div className="flex flex-row flex-wrap p-3 pt-6">
            <Link to="/reg?course=InstitutionFootprints" className="bg-[#327E36] hover:bg-[#1E2A55] text-white font-bold py-2 px-4 border-b-4 border-[#327E36] hover:border-[#1E2A55] rounded-xl max-sm:justify-center">
              Buy Now
            </Link>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col p-12 max-sm:p-0 ">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold px-24 max-sm:p-0 max-sm:justify-center max-sm:flex">Content:</h2>
          <p className="text-xl font-medium px-24 pt-4 max-sm:px-4 max-sm:flex max-sm:justify-center">
            Why we need Technical Analysis
          </p>
          <ul className="text-xl font-normal px-28 list-disc pt-8 max-sm:px-8 max-sm:text-base">
            <li>Candlestick Explanation And Patterns</li>
            <li>Study of Price Action</li>
            <li>Demand Supply</li>
            <li>Trading on Multiple Time Frame (How to pick a perfect time frame based on your trading style)</li>
            <li>How to scan stock in live market</li>
            <li>Trend Analysis (Trading In The Zone Special)</li>
            <li>Trend Analysis (Trading In The Zone Special)</li>
            <li>Moving Average (Simple, Exponential, Linearly Weighted)</li>
            <li>Algo Trader (How we can take advantage from them)</li>
            <li>Market Traps</li>
            <li>Trading against the Trend (Trading In The Zone Special)</li>
          </ul>
        </div>
      </div>
    </>
  );
}
