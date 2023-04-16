import React, { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";

const ResidentList = ({ location }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const RESIDENT_PER_PAGE = 20;

  const arrayPages = [];
  const quantityPages = Math.ceil(
    location?.residents.length / RESIDENT_PER_PAGE
  );
  for (let i = 1; i <= quantityPages; i++) {
    arrayPages.push(i);
  }

  const startCut = currentPage * RESIDENT_PER_PAGE - RESIDENT_PER_PAGE
  const endCut = currentPage * RESIDENT_PER_PAGE

  const residents = location?.residents;

  useEffect(() => {
    setCurrentPage(1)
  }, [location])

  return (
    <>
    <section className="p-4 grid gap-6  grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] max-w-[1000px] mx-auto">
      {residents?.slice(startCut, endCut).map((resident) => (
        <ResidentCard key={resident} resident={resident} />
      ))}
    </section>
    <ul className="flex gap-4 justify-center py-4 text-white  ">
        {
            arrayPages.map(page => <li onClick={() => setCurrentPage(page)} className={`p-3 rounded-md hover:bg-red-400/70 hover:text-blue-600 cursor-pointer ${page === currentPage && "bg-green-700 text-white font-bold"}`} key={page}>{page}</li>)
        }
    </ul>
    </>
  );
};

export default ResidentList;
