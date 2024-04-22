import React from "react"; // Add the missing import statement for React
import { useQuery } from "react-query";
import { useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Search from './search'



// fetch data from github api using react query

const fetchRepos = async (page) => {
   const res = await fetch(
     `https://api.github.com/users/osayiosas/repos?page=${page}&per_page=6`
  );
  return res.json();
};

export default function RepoList() {
  // const { repoId } = useParams()
  const [page, setPage] = useState(1);
  const [newRepo, setNewRepo] = useState(""); // Add the missing state variables for newRepo and setNewRepo
  
  // useQuery hook to fetch data from github api
  const { data: repo, status } = useQuery(
    ["repos", page],
    () => fetchRepos(page),
    { keepPreviousData: true }
  );
  
  // //add to the repo list 

  //  const addRepo = async (newRepo) => {
  //   const res = await fetch(`https://api.github.com/users/osayiosas/repos`, {}).json();
  //   return res.json();
  //  };

  //}

  
  // ...

   return (
     <>
       <Helmet>
         <title>{`Repo-List`}</title>
         <meta
           name="description"
           content={`List of repositories on my github account`}
         />
         <link rel="canonical" href={`/repo-list`} />
       </Helmet>
       <div className="h-screen w-full flex justify-center items-center bg-stone-100">
         <div className="relative h-[95%] w-[80%] p-6 rounded-lg shadow-lg bg-red-50 md:w-[90%] sm:w-[95%] sm:p-2 xs:h-[95%] ">
           <div className="h-full">
             <div className="flex justify-between items-center mx-auto font-urbanist">
               <h1 className="text-3xl cursor-pointer transition-all hover:decoration-red-400 sm:text-2xl">
                 My Repositories
               </h1>
               <Link
                 to="/"
                 className="border-2 border-emerald-100 rounded-lg py-1 px-4 text-black bg-pink-50 shadow-lg ring-2 ring-violet-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 sm:text-sm sm:px-2 xs:text-xs"
               >
                 Back to Profile
               </Link>
             </div>

             <div className="mt-[3rem] p-2 font-worksans h-[80%] flex flex-col gap-3 overflow-y-scroll">
               {/*  */}
               <Search />
               {/*  */}
               <div className="flex justify-between w-full mb-4">
                 <button
                   onClick={() => setPage((old) => Math.max(old - 1, 1))}
                   disabled={page === 1}
                   className="border-2 border-emerald-100 rounded-lg py-1 px-4 text-black g-pink-50 shadow-lg ring-2 ring-violet-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:ring-0 disabled:bg-red-300 disabled:text-black-400"
                 >
                   PREV
                 </button>
                 <button
                   onClick={() =>
                     setPage((old) => (!repo || !repo.length ? old : old + 1))
                   }
                   disabled={!repo || !repo.length}
                   className="border-2 border-emerald-100 rounded-lg py-1 px-4 text-black g-pink-50 shadow-lg ring-2 ring-violet-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:ring-0 disabled:bg-red-300 disabled:text-black-400"
                 >
                   NEXT
                 </button>
               </div>
               {status === "loading" ? (
                 <p>Loading...</p>
               ) : status === "error" ? (
                 <p>Error Loading</p>
               ) : status === "success" ? (
                 repo.map((singlerepo) => {
                   return (
                     <Link
                       to={`${singlerepo.name}`}
                       key={singlerepo.id}
                       className="flex justify-between w-full border-2 rounded-lg p-4 shadow-md cursor-pointer ring-violet-200  ring-offset-2 transition-all hover:ring-2 hover:text-black-100 hover:bg-orange-50 sm:p-3"
                     >
                       <p className="">{singlerepo.name}</p>
                       <p className="">{singlerepo.language}</p>
                     </Link>
                   );
                 })
               ) : (
                 ""
               )}
             </div>
           </div>

           <Outlet />
         </div>
       </div>
     </>
   );
}
