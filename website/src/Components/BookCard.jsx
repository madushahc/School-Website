import React, { useState } from "react";
import MoreDetailsCard from "./MoreDeatailsCard";
 

export default function BookCard({ book }) {
  const [show, setShow] = useState(false); // Move state declaration inside the component
  const [bookItem, setItem] = useState(null); // Initialize bookItem with null

  return (
    <>
      {book.map((item, index) => {
        const thumbnail =
          item.volumeInfo.imageLinks?.smallThumbnail || null;
        const title = item.volumeInfo.title || "Untitled";

        if (thumbnail) {
          return (
            <div
              key={item.id || index}
              onClick={() => {
                setShow(true);
                setItem(item);
              }}
              className="w-auto h-auto bg-white border border-blue-300 rounded-lg p-4 mb-3 mt-0 shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 text-center relative flex flex-col justify-between"
            >
              <img
                src={thumbnail}
                className="h-48 w-full rounded-lg object-cover mb-4 mt-0"
                alt="Book Thumbnail"
              />
              <div className="flex-auto">
                <h3 className="text-md font-semibold mb-2 truncate text-blue-700">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 overflow-hidden">
                  {item.searchInfo?.textSnippet || "No description available."}
                </p>
              </div>
              <div className="flex-auto">
                <h3 className="text-md font-semibold text-gray-800 mb-2 truncate">
                  Author: <br />
                  {item.volumeInfo.authors?.join(", ") || "Unknown"}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 overflow-hidden">
                  {item.volumeInfo.categories || "No Category available."}
                </p>
              </div>
              <div className="mt-0">
                <div className="p-2 text-blue-500 text-sm font-medium rounded-full inline-block shadow-sm">
                  Language: {item.volumeInfo.language}
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}

      {/* Render the MoreDetailsCard component */}
      {show && ( <MoreDetailsCard  show={show}
          item={bookItem}
          onClose={() => setShow(false)} />
      )}
    </>
  );
}
