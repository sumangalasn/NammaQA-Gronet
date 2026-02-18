import { popularDiscussions, popularPostDummy,highlightsDummy } from "../../data/populardiscussion";


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
          <h2 className="text-[16px] font-semibold mb-3 -mt-1">Highlights</h2>
          <div className="flex gap-3">

    {highlightsDummy.map((item) => (
      <div
        key={item.id}
        className="relative w-1/3 h-[151px] rounded-[8px] overflow-hidden"
      >

        {/* Background Image */}
        <img
          src={item.image}
          alt="highlight"
          className="w-full h-full object-cover"
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* TEXT + PROFILE */}
        <div className="absolute bottom-3 left-3 text-white">

          <div className="flex items-center gap-2 mb-1">
            <img
              src={item.profileImg}
              alt="profile"
              className="w-6 h-6 rounded-full"
            />
            <p className="text-[14px]">
              {item.author} • {item.time}
            </p>
          </div>

          <p className="text-white text-[14px]font-normal leading-[18px] tracking-[-0.07px] w-[167px]">
            {item.title}
          </p>

        </div>
      </div>
    ))}
</div>
        </div>

       
        {/* Main Post Box */}
       

          <div className="border-t border-[#E1E1E1] ">

            {popularPostDummy.map((post: any, index: number) => (
             <div key={post.id}
             className="bg-white border border-[#E1E1E1] rounded-[8px] overflow-hidden mb-3">
              <div className="p-4">

  <div className="flex items-start justify-between">

    {/* LEFT SIDE */}
    <div className="flex items-start gap-3">

      <img
        src={post.profileImg}
        alt="profile"
        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
      />

      {/* TEXT BLOCK */}
      <div className="flex flex-col">

        {/* Line 1 */}
        <div className="flex items-center gap-2">
          <p className="text-[14px] font-semibold text-black leading-none">
            {post.author}
          </p>

          <p className="text-[12px] text-[#5F5F5F]">
            • {post.time}
          </p>
        </div>

        {/* Line 2 */}
        <p className="text-[14px] text-[#5F5F5F] mt-1 leading-[18px]">
          {post.activity}
        </p>

      </div>
    </div>
    <div className="flex items-center gap-2">

  {/* Only SECOND card lo Join button */}
  {index === 1 && (
  <button className="px-[24px] py-[6px] h-[30px] bg-[#031D4F] text-white rounded-[24px] text-[14px] font-normal leading-[20px]
  flex items-center justify-center">
      Join
    </button>
  )}

    {/* RIGHT SIDE */}
    <button className="w-10 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-[#5F5F5F] text-xl">
      ⋮
    </button>

  </div>
  </div>
  

  {/* Divider */}
  <div className="border-t border-[#E1E1E1] mt-4 -mx-4"></div>
  {/* 👇 ADD HERE */}
  <p className="mt-4 text-[26px] font-normal leading-[20px] text-black">
  {post.title}
</p>
  </div>
 <img
  src={post.image}   // 👈 dummy file nunchi vastundi
  alt="post"
  className="w-full h-[300px] object-cover block mb-10"
/>
<div className="h-[56px] px-4 flex items-center gap-[10px] -mt-8 ">
  <div className="flex items-center gap-2">
  <img src="/assets/Icons/heart.svg" alt="heart" 
  className="w-5 h-5" />
  <span>{post.likes}</span>
</div>
<div className="flex items-center gap-2">
  <img src="/assets/Icons/message.svg" alt="comment" className="w-5 h-5" />
  <span>{post.comments}</span>
</div>
<div className="flex items-center gap-2">
  <img src="/assets/Icons/share.svg" alt="share" className="w-5 h-5" />
  <span>{post.shares}</span>
</div>
{/* SAVE ICON → RIGHT SIDE */}
  <img
    src="/assets/Icons/save.svg"
    alt="save"
    className="w-5 h-5 ml-auto"
  />
  </div>
</div>
 ))}
            </div>
            
          </div>
        

          {/* ================= RIGHT SIDE ================= */}
          <div className="w-[337px] flex flex-col gap-[16px]">

            {/* Discussion Categories */}
            <div className="w-[337px]
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

                {["career", "development", "tech", "digital marketing", "industry trends", "AI", "testing", "design"].map((tag) => (
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
            {/* Trending Tags */}
            <div
              className="
    w-[337px]
    bg-white
    border border-[#E1E1E1]
    rounded-[8px]

    px-[24px]
    py-[24px]

    flex flex-col
    gap-[16px]
  "
            >
              {/* Title */}
              <h3 className="text-[16px] font-mada text-black w-fit leading-[21px] -mt-4">
                Trending Tags
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-[8px]">
                {["#ai", "#test", "#devops", "#data", "#interview", "#python", "#scienceinspo"]
                  .map((tag) => (
                    <span
                      key={tag}
                      className="
            h-[28px]
            px-[16px]
            border border-[#E1E1E1]
            rounded-full
            text-[14px]
            flex items-center justify-center
            whitespace-nowrap
          "
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
            <div
              className="
    w-[337px]
    bg-white
    border border-[#E1E1E1]
    rounded-[8px]

    px-[24px]
    py-[24px]

    flex flex-col
    gap-[16px]
  "
            >
              <h3 className="text-[16px] font-mada text-black w-fit leading-[21px] -mt-4">
                Featured Discussions
              </h3>
              {popularDiscussions.map((item: any) => (
                <div key={item.id} className="mb-0">

                  <p className="text-[14px] font-mada leading-[18px] text-black w-fit">
                    {item.title}
                  </p>
                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">
                      <img
                        src={item.profileImg}
                        alt="profile"
                        className="w-10 h-10 rounded-full -ml-1"
                      />

                      <p className=" font-mada text-[12px] font-normal text-black whitespace-nowrap relative top-[-4px] ">{item.author}</p>

                      <p className="text-[12px] font-normal leading-[18px]
                tracking-[-0.07px] text-[#5F5F5F] w-fit whitespace-nowrap relative top-[-4px] ml-10">
                        {item.replies} • {item.likes}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
        );
};

        export default Discussion;

