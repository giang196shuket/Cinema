"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { IMovie } from "@/interface/movie.interface";
import Sidebar from "@/components/sidebar";

export default function Home() {
   const [movieList, setMovieList] = useState<IMovie[]>([]);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const { data: response } = await axios.get("http://localhost:5000/Movie");
            console.log(response);
            setMovieList(response);
         } catch (error: unknown) {
            console.error(error);
         }
      };

      fetchData();
   }, []);
   return (
      <Sidebar>
         <div className="grid grid-rows-[20px_1fr_20px]   p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2">
               <p className="font-semibold">Danh sách phim</p>
               <table className="border-collapse table-aut">
                  <thead>
                     <tr>
                        <th className="border">movieImage</th>
                        <th className="border">movieThumbnail</th>

                        <th className="border">movieName</th>

                        <th className="border">movieDescription</th>
                        <th className="border"></th>
                     </tr>
                  </thead>
                  <tbody>
                     {movieList.map((ele, index) => {
                        return (
                           <tr key={index}>
                              <td className="border p-8">
                                 <img src={ele.movieImage} alt="" className="w-32" />
                              </td>
                              <td className="border p-8">
                                 <img src={ele.movieThumbnail} alt="" className="w-48" />
                              </td>
                              <td className="border p-8">
                                 <h2>{ele.movieName}</h2>
                              </td>

                              <td className="border p-8">
                                 <p>{ele.movieDescription}</p>
                              </td>
                              <td className="border p-8">
                                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                              </td>
                           </tr>
                        );
                     })}
                  </tbody>
               </table>
            </main>
         </div>
      </Sidebar>
   );
}
