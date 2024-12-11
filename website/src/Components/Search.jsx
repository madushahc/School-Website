export default function Search({ placeholder = "Search", onSearchChange }) {
    const icon = (
      <span className="absolute inset-y-0 right-5 flex items-center justify-center -top-10">
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
  
    return (
        <div className="flex items-center justify-center ">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="border rounded-full border-gray-500 p-2 pl-10 w-full"
            placeholder={placeholder}
            onChange={onSearchChange}
          />
          {icon}
        </div>
      </div>
    );
  }
  