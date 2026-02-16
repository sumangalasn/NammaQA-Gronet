import { loremText } from "../data/MyGronetters";
import { connectionGroup } from "../data/MyGronetters";
import { useState } from "react";
import { useNavigate } from "react-router-dom";






const GroupDetails = () => {
  const navigate = useNavigate();
   const [showEditGroup, setShowEditGroup] = useState(false);
  
  
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
  <div  className="flex items-center gap-4 text-[#5F5F5F] cursor-pointer"
  onClick={() => navigate("/manage-groups")}>
    
      <img
        src="/assets/Icons/ManageGroups.svg"
        alt="Manage group"
        className="w-[36px] h-[36px] relative top-[30px]"
      />
    
    <span className="w-[109px] h-[21px] font-mada text-[12px] font-[500] leading-[100%] text-black
      relative top-[30px]">Manage group</span>
      </div>
  

  {/* Edit group */}
  <div className="flex items-center gap-4 text-[#5F5F5F] cursor-pointer"
  onClick={() => setShowEditGroup(true)}>

    
     <img
        src="/assets/Icons/editGroup.svg"
        alt="Edit group"
        className="w-[36px] h-[36px] mt-15"
      />
    
    <span className="w-[109px] h-[21px] font-mada text-[12px] font-[500] leading-[100%] text-black mt-15">Edit group</span>
  </div>

  {showEditGroup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
  <div
      className="absolute inset-0 bg-black/40"
      onClick={() => setShowEditGroup(false)}
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
  </div>
  </div>


    </div>
  );
};

export default GroupDetails;
