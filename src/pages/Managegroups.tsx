import { useState } from "react";
import { connectionRequests } from "../data/MyGronetters";

const Managegroups = () => {
  const [activeTab, setActiveTab] = useState("Members");

  const tabs = ["Members", "Admins", "Requests", "Invited", "Blocked"];

  return (
    <div className="flex gap-[42px] mt-4 ml-12">

      {/* LEFT SIDE */}
      <div className="w-[694px]">

        {/* HEADER */}
        <div className="w-[694px] h-[67px] bg-white border border-[#E1E1E1] rounded-[8px] flex items-center justify-between px-[12px]">
          <p className="font-mada font-[600] text-[32px] leading-[100%] text-black">
            {activeTab === "Members"
    ? "Manage Stud_help"
    : "Manage Groupname"}
            
          </p>
          <img src="/assets/Icons/searchicon.svg" className="w-[16px] h-[16px]" />
        </div>

        {/* BIG BOX */}
        <div className="w-[694px] mt-[10px] bg-white border border-[#E1E1E1] rounded-[8px] min-h-[600px]">

          {/* MEMBERSHIP + TABS */}
          <div className="flex flex-col gap-[4px] px-[20px] pt-[20px]">
            <p className="font-mada font-[500] text-[16px] text-black">
              Membership
            </p>

            <div className="flex gap-[40px] border-b border-[#E1E1E1] -mx-[20px] px-[20px] mt-[2px]">
              {tabs.map((tab) => (
                <span
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    font-mada font-[500] text-[14px] py-[12px] cursor-pointer
                    ${
                      activeTab === tab
                        ? "text-[#1D4ED8] border-b-2 border-[#1D4ED8]"
                        : "text-black"
                    }
                  `}
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>

          {/* PROFILE LIST */}
          {(activeTab === "Members" || activeTab === "Admins"|| activeTab === "Requests"||activeTab === "Invited") && (
            <div className="flex flex-col gap-[10px] px-[20px] mt-[16px]">
              {connectionRequests.map((item) => (
                <div
                  key={item.id}
                  className="w-[654px] h-[92px] bg-white border border-[#E1E1E1] rounded-[8px] 
                             flex items-center justify-between px-[16px] py-[24px]"
                >
                  {/* LEFT */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.avatar}
                      className="w-20 h-20 rounded-full border-4 border-pink-200"
                    />

                    <div className="flex flex-col gap-[4px]">

                      {/* NAME + OWNER INLINE */}
                      <div className="flex items-center gap-[6px]">
                        <p className="text-[14px] font-mada font-[500]">
                          {item.name}
                        </p>

                        {activeTab === "Admins" && (
                          <span className="text-[10px] px-[6px] py-[2px] bg-gray-400 text-white rounded-[4px]">
                            Owner
                          </span>
                        )}
                      </div>

                      <p className="text-[12px] text-gray-500">
                        {item.line1}
                      </p>

                      <p className="text-[12px] text-gray-500">
                        {item.line2}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex items-center gap-[12px]">
                    {activeTab === "Requests" ? (
    <div className="flex flex-col gap-[6px]">
      <button className="h-[28px] px-[16px] bg-[#0F2A5F] text-white rounded-full text-[12px]">
        Accept
      </button>
      <button className="h-[28px] px-[16px] border border-[#E1E1E1] rounded-full text-[12px]">
        Decline
      </button>
    </div>
  ) : activeTab === "Invited" ? (
  <button className="h-[28px] px-[16px] border border-[#E1E1E1] rounded-full text-[12px]">
    Withdraw
  </button>
): (
    <button className="h-[28px] px-[16px] border border-[#E1E1E1] rounded-full text-[12px]">
      Message
    </button>
  )}

  {(activeTab === "Members" || activeTab === "Admins") && (
  <div className="flex flex-col gap-[3px]">
    <span className="w-[4px] h-[4px] bg-[#5F5F5F] rounded-full" />
    <span className="w-[4px] h-[4px] bg-[#5F5F5F] rounded-full" />
    <span className="w-[4px] h-[4px] bg-[#5F5F5F] rounded-full" />
  </div>
)}

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT SIDE BOX */}
      <div className="w-[337px] h-[172px] bg-white border border-[#E1E1E1] rounded-[12px] p-[24px] flex flex-col gap-[24px]">
        <div className="flex items-center gap-[24px]">
          <img src="/assets/Icons/Membership.svg" className="w-[40px] h-[40px]" />
          <p className="font-mada font-[500] text-[14px] leading-[100%] text-black">
            Membership
          </p>
        </div>

        <div className="flex items-center gap-[24px]">
          <img src="/assets/Icons/content.svg" className="w-[40px] h-[40px]" />
          <p className="font-mada font-[500] text-[14px] leading-[100%] text-black">
            Content
          </p>
        </div>
      </div>
    </div>
  );
};

export default Managegroups;
