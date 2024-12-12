import React, { useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

export default function Search() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const icon = (
    <span className="absolute inset-y-0 right-5 flex items-center justify-center -top-9">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.293 3.707l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );

  const searchBook = async (evt) => {
    if (evt.key === "Enter") {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDSnMrqptHLTYnYTDu6UMHF2QkctIQ1OBA&maxResults=40`
        );
        setData(res.data.items || []);
        console.log(res.data.items);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 -mt-0">
      {/* Search Input */}
      <div className="relative w-full max-w-md">
        <input
          type="text"
          className="border rounded-full border-gray-500 p-2 pl-5 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Search for a book"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchBook}
        />
        {icon}
      </div>

      <div className="w-full mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       
      <BookCard  book={bookData} />

      </div>
    </div>
  );
}
