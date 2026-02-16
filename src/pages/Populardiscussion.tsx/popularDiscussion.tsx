const Discussion = () => {
  return (
    <div className="ml-8 mt-6 flex gap-10">

      {/* ================= LEFT SIDE ================= */}
      <div className="w-[694px] space-y-2">

        {/* Popular Discussions Header */}
        <div
          className="h-[74px] bg-white border border-[#E1E1E1]
                     rounded-[8px] px-4
                     flex items-center justify-between"
        >
          <h1 className="text-[32px] font-semibold leading-[32px] text-black">
            Popular Discussions
          </h1>

          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
            <img
              src="/assets/Icons/searchicon.svg"
              alt="Search"
              className="w-5 h-5"
            />
          </button>
        </div>

        {/* Highlights Box */}
        <div className="h-[217px] bg-white border border-[#E1E1E1] rounded-[8px] p-4">
          <h2 className="text-[16px] font-semibold">Highlights</h2>
        </div>

        {/* Main Post Box */}
        <div className="h-[491px] bg-white border border-[#E1E1E1] rounded-[8px]">
          <div className="border-t border-[#E1E1E1] mt-16"></div>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="w-[337px] flex flex-col gap-[16px]">

        {/* Discussion Categories */}
        <div
  className="w-[337px]
  bg-white
  border border-[#E1E1E1]
  rounded-[8px]

  pt-[24px]
  pb-[24px]
  px-[20px]

  flex flex-col
  gap-[16px]"
        >
          <h3 className="text-[16px]  text-black -mt-4">
            Discussion Categories
          </h3>


    {/* Tags container */}
  <div className="w-[297px]
    flex flex-wrap
    gap-[8px]
    ">

      {["career","development","tech","digital marketing","industry trends","AI","testing","design"].map((tag)=>(
      <span
        key={tag}
        className="
           h-[28px]
    px-[24px]
    border border-[#E1E1E1]
    rounded-full

    text-[14px]
    font-normal
    leading-[18px]
    tracking-[-0.07px]
    text-black

    flex items-center justify-center
    whitespace-nowrap
        "
      >
        {tag}
      </span>
    ))}

  

  </div>

         
        </div>

      </div>
    </div>
  );
};

export default Discussion;
