
import { useState } from "react";
import {
  connectionRequests,
  myGroups, // ✅ ADD
} from "../data/MyGronetters";
import { useNavigate } from "react-router-dom";



const CARD_STYLE = {
  width: "220px",
  height: "320px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
  position: "relative" as const,
  overflow: "hidden",
  
};

const SECTION_BOX = {
  backgroundColor: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  padding: "20px",
  marginBottom: "24px",
};

const MyGronetters = () => {
  const [activeTab, setActiveTab] =
    useState<"requests" | "sent">("requests");

  // ✅ ONLY EXTENDED, NOT REPLACED
  const [activeSection, setActiveSection] =
    useState<"requests" | "network" | "groups"|"circles">("requests");
     const [showGroupView, setShowGroupView] = useState(false);
    type ViewType = "default" | "groupPage";

     const [view, setView] = useState<"list" | "groupPage">("list");


  const [showSwitcher, setShowSwitcher] = useState(false);
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const navigate = useNavigate();


  
  return (
    <div className="min-h-screen bg-[#f7f8fa] py-6">
      <div className="flex gap-6 px-10">

  {/* ================= LEFT COLUMN ================= */}
        <div className="w-[760px] flex flex-col gap-6">
{/* ================= MIDDLE CONTENT ================= */}
{showCreateGroup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">

    <div
      className="absolute inset-0 bg-black/40"
      onClick={() => setShowCreateGroup(false)}
    ></div>

    <div className="flex justify-center overflow-y-auto">
      <div className="relative bg-white w-[547px] h-[607px] rounded-2xl shadow-xl overflow-hidden">
        <div className="h-full overflow-y-auto pr-3">
      <div className="px-6 pt-6 pb-3">
  <h2 className="text-xl font-semibold text-black">
    Create Group
  </h2>
  </div>
      <div className="relative h-[120px] overflow-visible">
        <img
    src="/assets/image/design3.svg"
    alt="header"
    className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[92%] object-contain"
  />
  
        
         
        <div className="absolute left-32 -translate-x-1/2 -bottom-2 z-20">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center ">
    <div className="w-18 h-18 rounded-full bg-white flex items-center justify-center">
      <img
        src="/assets/Icons/icon5.svg"
        alt="icon"
        className="w-16 h-16 rounded-full border-4 border-white"
      />

      <button
      className="absolute bottom-1 right-1 w-6 h-6 flex items-center justify-center"
      onClick={() => console.log("Edit profile clicked")}
    >
      <img
        src="/assets/Icons/editicon.svg"
        alt="edit"
        className="w-4 h-4"
      />
    </button>
    </div>
    </div>
      </div>
      </div>

       <div className="px-6 pt-14 pb-6 space-y-5 overflow-y-auto"> 
       <div className="space-y-1">
  <label className="text-sm text-gray-600 font-medium">
    Group Name<span className="text-red-500">*</span>
  </label>

  <input
    type="text"
    placeholder="Enter group name"
    className="w-full h-[44px] rounded-lg border border-gray-300 px-4 text-sm outline-none focus:border-[#031D4F]"
  />
</div>

       <div className="space-y-1">
  <label className="text-sm text-gray-600 font-medium">
    About<span className="text-red-500">*</span>
  </label>

  <textarea
    placeholder="Enter group description"
    className="w-full h-[90px] rounded-lg border border-gray-300 px-4 py-2 text-sm resize-none outline-none focus:border-[#031D4F]"
  />
</div>
<div className="w-full max-w-md flex flex-col gap-1.5">
  <p className="text-[14px] font-medium text-[#111827]">
    Industry
  </p>

  <button className="w-[180px] rounded-lg border border-gray-300 px-4 py-2 text-gray-500">
    Add industry
  </button>
</div>
<div className="space-y-1">
  <label className="text-sm text-gray-600 font-medium">
    Guidelines
  </label>

  <input
    type="text"
    placeholder="Enter the guidelines"
    className="w-full h-[44px] rounded-lg border border-gray-300 px-4 text-sm outline-none focus:border-[#031D4F]"
  />
</div>


        {/* Group Type */}
<div className="space-y-3">
  <label className="text-sm text-gray-600 font-medium">
    Group type<span className="text-red-500">*</span>
  </label>

  <div className="flex items-center gap-6">
    <label className="flex items-center gap-2 text-sm">
      <input
        type="radio"
        name="groupType"
        defaultChecked
        className="accent-[#031D4F]"
      />
      Public
    </label>

    <label className="flex items-center gap-2 text-sm">
      <input
        type="radio"
        name="groupType"
        className="accent-[#031D4F]"
      />
      Private
    </label>
  </div>
</div>

{/* Terms & Conditions + Create Button */}
<div className="flex items-center justify-between pt-6">

  {/* Terms */}
  <div className="flex flex-col items-start pt-6 gap-4">
  {/* Left side */}
  <label className="flex items-center gap-2 text-sm text-gray-800">
    <input type="checkbox" />
    I agree to the
    <span className="text-blue-600 underline cursor-pointer">
      terms and conditions
    </span>
  </label>

  {/* Right side */}
  <div className="pt-6 flex justify-end">
  <button 
  onClick={() => {
     navigate("/create-group")   // show group page
  }}
  
  className="px-8 h-[40px] rounded-full border border-gray-300 ">
    Create
  </button>
  </div>
  </div>
</div>
</div>

      
    </div>
    </div>
  </div>
   </div>
)}


          

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
                {/* My Gronetters */}
                <button
                  onClick={() => {
                    setActiveSection("requests");
                    setShowSwitcher(false);
                  }}
                  className="w-full flex justify-between items-center px-5 py-4 rounded-xl hover:bg-gray-100 text-sm"
                >
                  <span>My Gronetters</span>
                  <span>›</span>
                </button>

                {/* ✅ My Groups – ONLY THIS LOGIC IS NEW */}
                <button
                  onClick={() => {
                    setActiveSection("groups"); // ✅ IMPORTANT
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
              {activeSection === "groups" ? "My Groups" : "My Gronetters"} ▾
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

          {/* ===== CONNECTION REQUESTS ===== */}
          {activeSection === "requests" && (
            <>
              <div className="bg-white border border-gray-200 rounded-2xl px-8 py-8">
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
                          {activeTab === "requests" && (
                              <>
                          <button className="w-[120px] h-[36px] bg-[#031D4F] text-white rounded-full text-sm">
                            Accept
                          </button>
                          <button className="w-[120px] h-[36px] border border-gray-300 rounded-full text-sm">
                            Decline
                          </button>
                          </>
                          )}
                          {activeTab === "sent" && (
                            <button className="w-[120px] h-[36px] border border-gray-300 rounded-full text-sm cursor-default">
                              Requested
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* ===== MY NETWORK ===== */}
          {activeSection === "network" && (
            <div className="bg-white border border-gray-200 rounded-2xl px-6 py-6">
              <h2 className="text-lg font-semibold mb-6">My Network</h2>

              <div className="flex flex-col gap-4">
                {connectionRequests.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between border border-gray-200 rounded-xl px-5 py-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={user.avatar}
                        className="w-14 h-14 rounded-full border-4 border-pink-300"
                      />
                      <div>
                        <h4 className="font-medium text-sm">{user.name}</h4>
                        <p className="text-sm text-gray-500">{user.line1}</p>
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


          {/* ✅ ===== MY circles ===== */}
          {activeSection === "circles" && (
  <div className="bg-white border border-gray-200 rounded-2xl px-6 py-6">

    <div className="flex items-center justify-between mb-6">
      <h2 className="text-lg font-semibold mb-6">My Circles</h2>

      <button
      onClick={() => setShowCreateGroup(true)}
      className="px-4 py-2 border border-[#0f2a5f] text-[#0f2a5f] rounded-full text-sm">
        + Create a group
      </button>
    </div>

    <div className="flex flex-col gap-4">
      {connectionRequests.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between border border-gray-200 rounded-xl px-5 py-4"
        >
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <img
              src={user.avatar}
              className="w-14 h-14 rounded-full border-4 border-[#F6D37A]"
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

          {/* RIGHT */}
          <button className="px-4 py-1 border border-gray-300 rounded-full text-sm">
            Message
          </button>
        </div>
        
      ))}
    </div>

  </div>
)}


          {/* ✅ ===== MY GROUPS (SECOND IMAGE UI) ===== */}
          {activeSection === "groups" && (
              <div className="bg-white border border-gray-200 rounded-2xl px-8 py-8">
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
                
              <div className="grid grid-cols-3 gap-6">
                {myGroups.map((group) => (
                  <div
                    key={group.id}
                    className="relative w-[200px] min-h-[300px] bg-white border border-gray-200 rounded-2xl overflow-hidden"
                  >
                    <img
                      src="/assets/image/design1.svg"
                      className="absolute top-0 left-0 w-full h-[110px] object-cover"
                    />

                    <div className="relative pt-[60px] pb-6 px-6 flex flex-col items-center text-center h-full">
                      <div className="w-20 h-20 rounded-full border-4 border-white absolute top-[65px] left-1/2 -translate-x-1/2 bg-white">
                        <img src={group.image} alt={group.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="relative pt-[120px] pb-6 px-6 flex flex-col items-center text-center h-full z-20">
                      <h4 className="text-lg font-semibold">
                        {group.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {group.members}
                      </p>
                      </div>

                      <div className="mt-auto flex flex-col gap-2">
                         {activeTab === "requests" && (
                          <>
                        <button className="w-[120px] h-[36px] bg-[#031D4F] text-white rounded-full text-sm">
                          Accept
                        </button>
                        <button className="w-[120px] h-[36px] border border-gray-300 rounded-full text-sm">
                          Decline
                        </button>
                        </>
                         )}
                         {activeTab === "sent" && (
                           <button className="w-[120px] h-[36px] border border-gray-300 rounded-full text-sm cursor-default">
                           Requested
                           </button>
                             )}
                      </div>
                    </div>
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
              onClick={() => setActiveSection("circles")}
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
