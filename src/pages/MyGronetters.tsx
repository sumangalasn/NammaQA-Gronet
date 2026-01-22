import { useState } from "react";
import {
  connectionRequests,
  peopleYouMayKnow,
} from "../data/MyGronetters";

const MyGronetters = () => {
  const [activeTab, setActiveTab] =
    useState<"requests" | "sent">("requests");

  const [activeSection, setActiveSection] =
    useState<"requests" | "network">("requests");

  const [showSwitcher, setShowSwitcher] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f8fa] py-6">
      <div className="flex gap-6 px-10">

        {/* ================= LEFT COLUMN ================= */}
        <div className="w-[760px] flex flex-col gap-6">

          {/* ================= POPUP OVERLAY ================= */}
          {showSwitcher && (
            <div
              className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
              onClick={() => setShowSwitcher(false)}
            >
              <div
                className="w-[360px] bg-white rounded-2xl shadow-xl p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => {
                    if (showSwitcher) {
                    setShowSwitcher(false);
                     setActiveSection("requests");
                    }else{
                       setShowSwitcher(true);
                    }
                  }}
                  className="w-full flex justify-between items-center px-5 py-4 rounded-xl hover:bg-gray-100 text-sm"
                >
                  <span>My Gronetters</span>
                  <span>›</span>
                </button>

                <button
                  onClick={() => {
                    setActiveSection("requests");
                    setShowSwitcher(false);
                  }}
                  className="w-full flex justify-between items-center px-5 py-4 rounded-xl hover:bg-gray-100 text-sm"
                >
                  <span>My Groups</span>
                  <span>›</span>
                </button>
              </div>
            </div>
          )}

          {/* ================= TOP BAR ================= */}
          <div className="h-[62px] bg-white border border-gray-200 rounded-2xl px-6 flex items-center justify-between">
            <h1
              onClick={() => setShowSwitcher(true)}
              className="text-[32px] font-semibold cursor-pointer"
            >
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

          {/* ================= MAIN CONTENT ================= */}

          {/* ===== CONNECTION REQUESTS / GROUPS ===== */}
          {activeSection === "requests" && (
            <>
              <div className="bg-white border border-gray-200 rounded-2xl px-8 py-8">

                {/* Tabs */}
                <div className="flex gap-10 border-b-2 border-gray-300 mb-8 -mx-2">
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
                      <img
                        src="/assets/image/design.svg"
                        className="absolute top-0 left-0 w-full h-[110px] object-cover"
                      />

                      <div className="relative pt-[50px] pb-6 px-6 flex flex-col items-center text-center h-full">
                        <img
                          src="/assets/image/profile1.svg"
                          className="w-20 h-20 rounded-full border-4 border-white"
                        />

                        <h4 className="mt-4 text-lg font-semibold">
                          {user.name}
                        </h4>

                        <div className="mt-auto flex flex-col gap-2">
                          <button className="w-[120px] h-[36px] bg-[#031D4F] text-white rounded-full text-sm">
                            Accept
                          </button>
                          <button className="w-[120px] h-[36px] border border-gray-300 rounded-full text-sm">
                            Decline
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PEOPLE YOU MAY KNOW */}
              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-5">
                <h3 className="font-semibold mb-6">
                  People you may know
                </h3>

                <div className="grid grid-cols-3 gap-6">
                  {peopleYouMayKnow.map((user) => (
                    <div
                      key={user.id}
                      className="relative w-[167px] min-h-[224px] bg-white border border-gray-200 rounded-2xl overflow-hidden"
                    >
                      <img
                        src="/assets/image/design.svg"
                        className="absolute top-0 left-0 w-full h-[110px] object-cover"
                      />

                      <div className="relative pt-[30px] pb-6 px-6 flex flex-col items-center text-center">
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

                        <button className="w-[110px] h-[36px] bg-[#031D4F] text-white rounded-full text-sm">
                          Connect
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* ===== MY NETWORK VIEW ===== */}
          {activeSection === "network" && (
            <div className="bg-white border border-gray-200 rounded-2xl px-6 py-6">
              <h2 className="text-lg font-semibold mb-6">
                My Network
              </h2>

              <div className="flex flex-col gap-4">
                {connectionRequests.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between border border-gray-200 rounded-xl px-5 py-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src="/assets/image/profile1.svg"
                        className="w-14 h-14 rounded-full border-4 border-pink-300"
                      />

                      <div>
                        <h4 className="font-medium text-sm">
                          {user.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {user.line1}
                        </p>
                      </div>
                    </div>

                    <button className="px-4 py-1 border border-gray-300 rounded-full text-sm">
                      Message
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ================= RIGHT SIDE ================= */}
      
        <div className="w-[337px] h-[200px]">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4">

            <div
              className="flex gap-3 cursor-pointer"
              onClick={() => setActiveSection("network")}
            >
              <span>My Network</span>
            </div>

            <div
              className="flex gap-3 cursor-pointer"
              onClick={() => setActiveSection("requests")}
            >
              <span>My Circles</span>
            </div>

          </div>
        </div>
      

      </div>
    </div>
  );
};

export default MyGronetters;
