import { useState } from "react";
import {
  connectionRequests,
  peopleYouMayKnow,
} from "../data/MyGronetters";

const MyGronetters = () => {
  const [activeTab, setActiveTab] =
    useState<"requests" | "sent">("requests");

  return (
    <div className="min-h-screen bg-[#f7f8fa] py-6">
      <div className="flex gap-6 px-10">

        {/* ================= LEFT COLUMN ================= */}
        <div className="w-[760px] flex flex-col gap-6">

          {/* TOP BAR */}
          <div className="h-[62px] bg-white border border-gray-200 rounded-2xl px-6 flex items-center justify-between">
            <h1 className="text-[32px] font-semibold">
              My Gronetters ▾
            </h1>
            <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
    <img
      src="/assets/Icons/searchicon.svg"
      alt="Search"
      className="w-5 h-5"
    />
  </button>
          </div>

          {/* ================= CONNECTION REQUESTS ================= */}
          <div className="bg-white border border-gray-200 rounded-2xl px-8 py-8">
            
            {/* Tabs */}
           
            <div className="flex gap-10 border-b-2 border-gray-300 mb-8 -mx-2  ">
              
              <button
                onClick={() => setActiveTab("requests")}
                className={`pb-2 text-sm font-medium ${
                  activeTab === "requests"
                    ? "text-[#0f2a5f] border-b-2 border-[#0f2a5f]"
                    : "text-[#666]"
                }`}
              >
                Connection Requests
              </button>

              <button
  onClick={() => setActiveTab("sent")}
  className={`pb-2 text-sm font-medium ${
    activeTab === "sent"
      ? "text-[#0f2a5f] border-b-2 border-[#0f2a5f]"
      : "text-[#666]"
  }`}
>
  Request Sent
</button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-6">
              {connectionRequests.map((user) => (
                <div
                  key={user.id}
                  className="relative w-[200px] min-h-[340px] bg-white border border-gray-200 rounded-2xl overflow-hidden"
                >
                  {/* Close */}
                  <button className="absolute top-4 right-4 text-xl z-20">
                    ×
                  </button>

                  {/* Pink curve */}
                  <img
                    src="/assets/image/design.svg"
                    className="absolute top-0 left-0 w-full h-[110px] object-cover z-0"
                  />

                  {/* Content */}
                  <div className="relative z-10 pt-[50px]  pb-6 px-6 flex flex-col items-center text-center h-full">
                    <img
                      src="/assets/image/profile1.svg"
                      className="w-20 h-20 rounded-full border-4 border-white"
                    />

                    <h4 className="mt-4 text-lg font-semibold">
                      {user.name}
                    </h4>

                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                      <img
                        src="/assets/image/profile1.svg"
                        className="w-5 h-5 rounded-full"
                      />
                      <span>{user.subtitle}</span>
                    </div>
                     <div className="mt-auto w-full flex flex-col items-center z-20">
                     <button className="w-[120px] h-[36px] bg-[#031D4F] text-white rounded-full
                      text-sm font-medium flex items-center justify-center">
                        Accept
                      </button>
                      <button className="mt-2 !w-[120px] !h-[36px] !bg-white !border !border-gray-300 
                                        !text-black !rounded-full !text-sm!font-medium !fle !items-center !justify-center !z-20">
                      Decline
                    </button>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= PEOPLE YOU MAY KNOW ================= */}
          <div className="bg-white border border-gray-200  rounded-2xl px-6 py-5">
            <h3 className="font-semibold mb-6">
              People you may know
            </h3>

            <div className="grid grid-cols-3 gap-6">
              {peopleYouMayKnow.map((user) => (
                <div
                  key={user.id}
                  className="relative w-[167px] min-h-[224px] bg-white border border-gray-200 rounded-2xl overflow-hidden "
                >
                  <img
                    src="/assets/image/design.svg"
                    className="absolute top-0 left-0 w-full h-[110px] object-cover z-0"
                  />

                  <div className="relative z-10 pt-[30px]  pb-6 px-6 flex flex-col items-center text-center">
                    <img
                      src="/assets/image/profile1.svg"
                      className="w-20 h-20 rounded-full border-4 border-white"
                    />

                    <h4 className="mt-3 font-semibold text-sm">
                      {user.name}
                    </h4>

                    <p className="text-xs text-gray-500 mb-4">
                      {user.subtitle}
                    </p>
                   <button
                    className=" mt-4 w-[110px] h-[36px] bg-[#031D4F] text-white rounded-full 
                                text-sm  font-medium flex items-center justify-center" >
                                  Connect
                        </button>
                 </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="w-[337px] h-[200px]">
          <div className="bg-white  border border-gray-200 rounded-2xl p-5 flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="w-9 h-9 bg-[#eef2ff] rounded-full flex items-center justify-center">
                 <img
                   src="/assets/Icons/Mynetwork.svg"
                   alt="My Network"
                   className="w-5 h-5"
                    />
              </div>
              <span>My Network</span>
            </div>

            <div className="flex gap-3">
              <div className="w-9 h-9 bg-[#eef2ff] rounded-full flex items-center justify-center">
                 <img
                 src="/assets/Icons/Mycircle.svg"
                 alt="My Circles"
                 className="w-5 h-5"
                 />
              </div>
              <span>My Circles</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyGronetters;
