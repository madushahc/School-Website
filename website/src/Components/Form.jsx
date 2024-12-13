export default function Form() {
    return (
      <div className="flex justify-center items-center min-h-screen ">
        <div className="bg-slate-10 shadow-lg rounded-lg max-w-lg w-full p-6 border-2 border-blue-300">
          <h2 className="text-2xl font-semibold text-center text-gray-700 ">Student Registration</h2>
          <form>
            <div className="">
              <div>
                <label className="block text-sm font-medium text-gray-600 ">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-blue-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 ">Guardian Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your guardian full name"
                  className="w-full border border-blue-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 ">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-blue-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 ">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your number"
                  className="w-full border border-blue-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 ">Address</label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="w-full border border-blue-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 ">Stream</label>
                <select
                  className="w-full border border-blue-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="" disabled selected>
                    - Select Your Stream -
                  </option>
                  <option>Maths/Science</option>
                  <option>Commerce</option>
                  <option>Art</option>
                  <option>Technology</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 ">NIC Number</label>
                <input
                  type="text"
                  placeholder="Enter your NIC number"
                  className="w-full border border-blue-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 ">Registration Date</label>
                <input
                  type="date"
                  className="w-full border border-blue-300 rounded-md mb-6 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <fieldset>
                <legend className="text-sm font-medium text-gray-600">Gender</legend>
                <div className="flex items-center space-x-10 -mt-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      className="text-blue-500 focus:ring-blue-400"
                    />
                    <span className="ml-2 text-gray-700 mt-0">Male</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      className="text-blue-500 focus:ring-blue-400"
                    />
                    <span className="ml-2 text-gray-700 mt-0">Female</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      className="text-blue-500 focus:ring-blue-400"
                    />
                    <span className="ml-2 text-gray-700 mt-0">Other</span>
                  </label>
                </div>
              </fieldset>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  