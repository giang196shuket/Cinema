import type { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
   title: "CINEMA",
   description: "CINEMA",
};

export default function Sidebar({ children }: { children: React.ReactNode }) {
   const [asideOpen, setAsideOpen] = useState(true);
   const [profileOpen, setProfileOpen] = useState(false);
   return (
      <main className="min-h-screen w-full bg-white-100" x-data="layout">
         <header className="flex w-full items-center justify-between border-b-2 border-slate-100  bg-[#1D232C] p-2">
            <div className="flex items-center space-x-2 ml-4">
               <button type="button" className="text-3xl " onClick={() => setAsideOpen(!asideOpen)}>
                  <img   src={"/static/images/menu.png"} alt="" className="w-8"/>
               </button>
               {/* <div className="text-white">Logo</div> */}
            </div>

            <div>
               <button type="button" onClick={() => setProfileOpen(!profileOpen)} className="h-9 w-9 overflow-hidden rounded-full">
                  <img src="https://plchldr.co/i/40x40?bg=111111" alt="plchldr.co" />
               </button>

               <div className="absolute right-2 mt-1 w-48 divide-y rounded-md border bg-white shadow-md" style={{ display: profileOpen ? "block" : "none" }}>
                  <div className="flex items-center space-x-2 p-2">
                     <img src="https://plchldr.co/i/40x40?bg=111111" alt="plchldr.co" className="h-9 w-9 rounded-full" />
                     <div className="font-medium">Admin</div>
                  </div>

                  <div className="flex flex-col space-y-3 p-2">
                     <a href="#" className="transition hover:text-black">
                        My Profile
                     </a>
                  </div>

                  <div className="p-2">
                     <button className="flex items-center space-x-2 transition hover:text-black">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                        </svg>
                        <div>Log Out</div>
                     </button>
                  </div>
               </div>
            </div>
         </header>

         <div className="flex">
            <aside className="flex w-72 flex-col space-y-2  bg-[#1D232C] text-white p-2" style={{ height: "100vh", display: asideOpen ? "block" : "none" }}>
               <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-black">
                  <span className="text-2xl">
                     <i className="bx bx-home"></i>
                  </span>
                  <span>Dashboard</span>
               </a>

               <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-black">
                  <span className="text-2xl">
                     <i className="bx bx-cart"></i>
                  </span>
                  <span>Danh sách phim</span>
               </a>

               <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-black">
                  <span className="text-2xl">
                     <i className="bx bx-shopping-bag"></i>
                  </span>
                  <span>Danh sách rạp</span>
               </a>

               <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-black">
                  <span className="text-2xl">
                     <i className="bx bx-heart"></i>
                  </span>
                  <span>Danh sách thực phẩm</span>
               </a>

               <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-black">
                  <span className="text-2xl">
                     <i className="bx bx-user"></i>
                  </span>
                  <span>Danh sách đặt vé</span>
               </a>
            </aside>

            <div className="w-full bg-slate-100  p-8">
               <div className="bg-white rounded-md">{children}</div>
            </div>
         </div>
      </main>
   );
}
