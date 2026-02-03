import { loremText } from "../data/MyGronetters";
import { connectionGroup } from "../data/MyGronetters";
import { Link } from "react-router-dom";




const GroupDetails = () => {
  
  return (
     
    <div className="flex gap-4 mt-2 ml-12">

      {/* ================= LEFT / MIDDLE FEED ================= */}
      <div className="w-[694px]">

        {/* OUTER BIG RECTANGLE */}
        <div
          className="w-[694px]
          h-[310px]
          bg-white
          border
          border-[#E1E1E1]
          rounded-[8px]
          pt-[12px]
          pb-[12px]
          pl-[16px]
          pr-[16px]"
        >
          {/* INNER SMALL RECTANGLE */}
          <div
            className="w-[662px]
            h-[166px]
            border
            border-[#E1E1E1]
            rounded-[8px]
            overflow-hidden"
          >
            {/* HEADER DESIGN */}
            <div className="relative h-[90px]">
              <img
                src="/assets/image/design3.svg"
                alt="header"
                className="absolute top-0 left-0 w-full h-full"
              />

              {/* PROFILE IMAGE */}
              <img
                src="/assets/image/profile1.svg"
                alt="profile"
                className="w-[72px]
                h-[72px]
                rounded-full
                border-4
                border-white
                absolute
                left-[24px]
                top-[24px]"
              />
            </div>

            {/* NAME */}
            <div className="pt-10 pb-3 px-4">
              <h2 className="text-md font-semibold">stud_help</h2>
            </div>
          </div>

          {/* CONTENT BELOW INNER CARD */}
          <div className="mt-4 px-2">
            <h3
              className="w-[662px]
              text-[14px]
              font-semibold
              text-black"
            >
              About
            </h3>

            <p
              className="mt-1
              w-[662px]
              font-mada
              text-[16px]
              font-[400]
              leading-[100%]
              text-black"
            >
              {loremText}
            </p>

            <div
              className="w-[662px]
              flex
              items-center
              gap-[12px]
              text-[12px]
              text-gray-500
              mt-2"
            >
              <span className="flex items-center gap-1">
                <img
                  src="/assets/Icons/clockicon.svg"
                  className="w-4 h-4"
                />
                Created on Oct 06
              </span>

              <span className="flex items-center gap-1">
                <img
                  src="/assets/Icons/globeicon.svg"
                  className="w-4 h-4"
                />
                Public
              </span>

              <span className="flex items-center gap-1">
                <img
                  src="/assets/Icons/twopeople.svg"
                  className="w-4 h-4"
                />
                1
              </span>

              <span className="flex items-center gap-1">
                <img
                  src="/assets/Icons/Bookicon.svg"
                  className="w-4 h-4"
                />
                Guidelines
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= RIGHT EMPTY RECTANGLE ================= */}
      <div className=" w-[289px] min-h-[679.57px] bg-white border border-[#E1E1E1] rounded-[8px] p-[24px]  flex flex-col gap-[20px]">
       
 {/* Empty rectangle – content later */}
        <button className=" w-[250px] h-[34px] border border-[#031D4F] rounded-[24px] flex items-center justify-centergap-[8px] text-[#5F5F5F] text-[20px] font-[400] font-mada ">
  {/* PLUS ICON */}
  <span className="w-[12px] h-[12px] border-2 border-[#5F5F5F] flex items-center justify-center text-[10px] leading-none rounded-sm ">
    +
  </span>

  {/* TEXT */}
  <span>Create</span>
</button>
<div className="w-full h-[132px] border border-[#E1E1E1] rounded-[8px] p-[16px] flex flex-col gap-2 ">
  
  {/* 1 Member */}
  <span className="w-[109px] h-[21px] text-[12px] font-[500] leading-[21px] text-black font-mada inline-block -mt-2">
    1 Member
  </span>

  {/* Profile Image */}
  <img
    src="/assets/image/profile1.svg"
    alt="member"
    className="w-[40px] h-[40px] rounded-full object-cover"
  />

  {/* Invite Button */}
  <button className="w-[133px] h-[24px] bg-[#031D4F] rounded-[25px] flex items-center justify-center px-[10px] py-[5px] text-white text-[12px] font-[400] font-mada mt-[10px]">
    Invite Connections
  </button>



  </div>
  <div className="w-full h-[201px] border border-[#E1E1E1] rounded-[8px] p-[16px] flex flex-col gap-4 ">
  <h3 className="text-[14px] font-semibold -mt-2">Admins</h3>

  {connectionGroup.map((item) => (
    <div key={item.id} className="flex gap-3">
      
      {/* Avatar */}
      <img
        src={item.avatar}
        className="w-[40px] h-[40px] rounded-full -ml-2 -mt-2"
      />

      {/* Text */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <p className="text-[14px] font-medium -mt-2">{item.name}</p>
          <span className="bg-[#C4C4C4]
          text-black
          text-[12px]
          px-[6px]
          h-[18px]
          rounded-[4px]
          inline-flex
          items-center
          ml-6
          -mt-2
       
          ">
            {item.role}
          </span>
        </div>
        
<p className="w-[232px]
  font-mada
  text-[12px]
  font-[400]
  leading-[16px]
  text-black
  -ml-12
  mt-4">
          {item.line1}{item.line2}
        </p>
      </div>
      </div>
    
  ))}
</div>
  <div
  className="w-full h-[216px] border border-[#E1E1E1] rounded-[8px] p-[16px]">

      {/* Pending posts */}
  <div className="flex justify-between items-center">
    <span className="text-[12px] font-mada font-[400] leading-[100%] text-black">
      Pending posts
    </span>
    <span className="text-[12px] font-mada font-[400] text-black">
      1
    </span>
  </div>

  {/* Requests to join */}
  <div className="flex justify-between items-center mt-3">
    <span className="text-[12px] font-mada font-[400] leading-[100%] text-black">
      Requests to join
    </span>
    <span className="text-[12px] font-mada font-[400] text-black">
      1
    </span>
  </div>

  

  {/* Manage group */}
  <div  className="flex items-center gap-4 text-[#5F5F5F]">
    
      <img
        src="/assets/Icons/ManageGroups.svg"
        alt="Manage group"
        className="w-[36px] h-[36px] relative top-[30px]"
      />
    
    <span className="w-[109px] h-[21px] font-mada text-[12px] font-[500] leading-[100%] text-black
      relative top-[30px]">Manage group</span>
      </div>
  

  {/* Edit group */}
  <div className="flex items-center gap-4 text-[#5F5F5F]">
    
     <img
        src="/assets/Icons/editGroup.svg"
        alt="Edit group"
        className="w-[36px] h-[36px] mt-15"
      />
    
    <span className="w-[109px]
    h-[21px]
    font-mada
    text-[12px]
    font-[500]
    leading-[100%]
    text-black mt-15">Edit group</span>
  </div>
  </div>
</div>


    </div>
  );
};

export default GroupDetails;
