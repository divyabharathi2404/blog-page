import React from 'react';

export default function App() {
  return (
    <main className="bg-red-200/10">
      <div className=" w-[80%]  relative flex min-h-screen flex-col justify-center ml-[10%]">
        <div class="flex flex-wrap  gap-8">
          <div className="w-full  grow rounded-lg ring-1 ring-gray-900/5 shadow-sm hover:bg-slate-300/10 bg-white hover:cursor-pointer hover:scale-105">
            <div className="p-4 flex gap-7 flex-col lg:flex-row ">
              <img
                className=" w-full lg:w-3/6  h-80   rounded-xl "
                src="images/lifestyle.jpg"
                alt="lifestyle"
              />
              <div className=" w-full lg:w-3/6 flex flex-col justify-center">
                <div className="flex flex-col">
                  <p className=" w-fit px-4 py-0.5 mb-4 rounded-full  bg-purple-400/20 text-purple-700  font-medium">
                    {" "}
                    Lifestyle
                  </p>
                  <p className=" text-3xl font-bold tracking-wide">
                    Begin here to Obtain a bried summary encompossing all the
                    essential
                  </p>
                </div>
                <p className="w-[80%] text-slate-500/80 text-md font-medium mt-4 tracking-wide">
                  This comphrensive post serves as your cheat-sheet to swifty
                  familiarize yourself with Ghost. Packed with crucial...
                </p>
                <div className="flex flex-row mt-5 gap-2 items-center text-slate-500 text-md">
                  <img
                    className="w-8 h-8 rounded-full ring-2 ring-purple-700/50 mr-2"
                    src="images/image-avatar.webp"
                    alt="avatar"
                  />
                  <p className="">Adrio Devid</p>
                  <div className="w-1 h-1 bg-slate-500 rounded-full "></div>
                  <div>Sep 10, 2025</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full grow lg:w-[48.4%]   rounded-lg ring-1 ring-gray-900/5 shadow-sm bg-white hover:bg-slate-300/10 hover:cursor-pointer hover:scale-105">
            <div className="p-4 flex gap-4 flex-col lg:flex-row ">
              <img
                className=" w-full lg:w-[40%]  lg:h-40  h-80 rounded-xl "
                src="images/technology.jpg"
                alt="technology"
              />
              <div className=" w-full lg:w-3/6 flex flex-col justify-center">
                <div className="flex flex-col">
                  <p className=" w-fit px-4 py-0.5 mb-4 rounded-full  bg-purple-400/20 text-purple-700  font-medium">
                    Technology
                  </p>
                  <p className=" text-md font-bold">
                    14 Innovative Architectural Designs to Create a Vaast
                    Interior Space
                  </p>
                </div>
                <div className="flex flex-row mt-5 gap-2 items-center text-slate-500 text-xs">
                  <img
                    className="w-6 h-6 rounded-full ring-2 ring-purple-700/50 mr-2"
                    src="images/image-avatar.webp"
                    alt="avatar"
                  />
                  <p className="">Adrio Devid</p>
                  <div className="w-1 h-1 bg-slate-500 rounded-full "></div>
                  <div>Sep 10, 2025</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full grow lg:w-[48.4%] rounded-lg ring-1 ring-gray-900/5 shadow-sm bg-white hover:bg-slate-300/10 hover:cursor-pointer hover:scale-105">
            <div className="p-3 flex gap-4 flex-col lg:flex-row ">
              <img
                className=" w-full lg:w-[40%]  lg:h-40  h-80  rounded-xl "
                src="images/travel.jpg"
                alt="travel"
              />
              <div className=" w-full lg:w-3/6 flex flex-col justify-center">
                <div className="flex flex-col">
                  <p className=" w-fit px-4 py-0.5 mb-4 rounded-full  bg-green-400/20 text-green-700  font-medium">
                    Travel
                  </p>
                  <p className=" text-md font-bold">
                    Traveller Visiting Ice Cave With Amazing Eye-catching view
                    with nature
                  </p>
                </div>
                <div className="flex flex-row mt-5 gap-2 items-center text-slate-500 text-xs">
                  <img
                    className="w-6 h-6 rounded-full ring-2 ring-green-700/50 mr-2"
                    src="images/image-avatar.webp"
                    alt="avatar"
                  />
                  <p className="">Adrio Devid</p>
                  <div className="w-1 h-1 bg-slate-500 rounded-full "></div>
                  <div>Sep 10, 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

