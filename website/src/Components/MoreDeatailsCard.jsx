import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

export default function MoreDetailsCard({ show, item, onClose }) {
  if (!show) return null;

  const thumbnail =
    item.volumeInfo.imageLinks?.smallThumbnail || "https://via.placeholder.com/150";

  return (
    <div className="h-auto w-screen fixed -inset-y-full -inset-x-0 bg-black bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 relative w-3/4 sm:w-96 lg:w-3/4 max-h-screen overflow-y-auto">
        <button
          className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
          aria-label="Close details"
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
          {/* Image Section */}
          <div className="flex justify-center mb-4 lg:mb-0">
            <img
              className="w-40 h-52 lg:w-56 lg:h-72 rounded-lg object-cover"
              src={thumbnail}
              alt={item.volumeInfo.title || "Book Thumbnail"}
            />
          </div>
          {/* Details Section */}
          <div className="text-center lg:text-left flex flex-col lg:w-full">
            <h1 className="text-lg font-bold text-gray-800 mb-2">
              {item.volumeInfo.title}
            </h1>
            <h3 className="text-sm font-medium text-green-700 mb-1">
              {item.volumeInfo.authors?.join(", ") || "Unknown"}
            </h3>
            <h4 className="text-sm text-blue-600 mb-4">
              Publisher: {item.volumeInfo.publisher || "N/A"}{" "}
              <span>({item.volumeInfo.publishedDate || "N/A"})</span>
             
             <h4 className="text-sm text-gray-600  " >Average Ratings <span className="ml-3  text-black" >   {item.volumeInfo.averageRating || "No ratings available."}</span>
             </h4>
             <h4 className="text-sm text-gray-600 ">
             Page Count <span className=" text-black ml-3 " >  {item.volumeInfo.pageCount || "No page count available."}</span>
             </h4>
            </h4>
        
            <h4 className="text-sm text-gray-700 text-justify mb-4">
              {item.volumeInfo.description || "No description available."}
            </h4>
  
            <div className="flex justify-center lg:justify-start">
              <a
                href={item.volumeInfo.previewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700 transition-transform transform hover:scale-105">
                  More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
