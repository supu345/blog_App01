import { CiSearch } from "react-icons/ci";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const DashboardArticles = () => {
  return (
    <Layout>
      <div className="text-2xl font-semibold mb-6 mt-[100px]">
        {/* Header with Search Bar and Add New Button */}
        <div className="bg-slate-300 flex flex-col md:flex-row items-center justify-between p-2 gap-4">
          <p className="text-lg">Articles 0</p>
          <form
            className="relative w-full md:w-auto"
            // onSubmit={(e) => e.preventDefault()} // Prevent form submission
          >
            <input
              //value={searchValue}
              //onChange={handleSearch}
              className="w-full md:w-64 bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Search..."
            />
            <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-xl" />
          </form>
          <Link to="/dashboard/article-add">
            <button className="bg-green-700 text-white p-2 text-sm">
              Add New
            </button>
          </Link>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Map through fetched articles */}

        <div className="w-full shadow-md p-4 rounded-lg bg-white">
          <img
            src="https://via.placeholder.com/150" // Add default image if no image found
            alt=""
            className="w-full h-[200px] object-cover rounded-md mb-4"
          />
          <p className="font-bold mb-2">title</p>
          <p className="text-sm text-gray-600">desc</p>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardArticles;
