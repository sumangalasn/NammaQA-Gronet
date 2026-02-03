import React from "react";
import PostSVG from "../assets/images/post.svg";

/* ================== COMPONENT ================== */
const Explore: React.FC = () => {
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between mb-4 items-center">
        <h2 className="m-0 text-xl font-semibold">Explore</h2>
        <input type="text" placeholder="Search" className="px-3.5 py-2 rounded-full border border-gray-300 outline-none w-55 text-sm" />
      </div>

      <div className="flex gap-4">
        {/* Feed Section */}
        <div className="flex-[3] grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer">
              <img
                src={PostSVG}
                alt="post"
                className="w-full h-40 object-cover bg-gray-200"
              />

              <div className="p-3">
                <span className="text-xs text-blue-600 font-semibold">UX DESIGN</span>
                <h4 className="text-sm mt-1.5 leading-relaxed">
                  AI in Action: Transforming Patient Care
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-white rounded-lg p-3 shadow-md">
            <h4 className="text-sm font-semibold mb-2.5">Top Articles</h4>
            {[1, 2, 3].map((a) => (
              <p key={a} className="text-xs mb-2 cursor-pointer text-gray-800">
                The ethics of AI-generated content in marketing
              </p>
            ))}
          </div>

          <div className="bg-white rounded-lg p-3 shadow-md">
            <h4 className="text-sm font-semibold mb-2.5">Groups</h4>
            {[1, 2].map((g) => (
              <div key={g} className="flex justify-between items-center text-xs mb-2.5">
                <span>UX Designers</span>
                <button className="px-3 py-1 rounded-lg border-none bg-blue-600 text-white cursor-pointer text-xs">Join</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
