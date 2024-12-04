import React from "react";
import Layout from "../layout/Layout";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryArticles = () => {
  return (
    <Layout>
      <div className="flex flex-row gap-9 container mt-5">
        <div className="w-2/3">
          <div className="mt-[100px] ml-[40px]">Article </div>
          <div className="mt-[100px] ml-[40px]">Pagination </div>
        </div>
        {/* Right side (Sidebar) */}
        <div className="lg:w-1/3 w-full py-6 ">
          {/* Search items */}
          <div className="bg-white mt-6 p-5 shadow-md">
            <p className="py-1 text-center font-bold text-xl">Search</p>
            <form>
              <input
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Search..."
              />
              <button className="bg-green-600 mt-3 p-2 w-full text-white">
                Search
              </button>
            </form>
          </div>

          {/* Popular items */}
          <div className="mt-6">
            <p className="bg-yellow-400 px-4 text-center font-bold py-2">
              Popular Items
            </p>
            <div className="bg-white p-5 shadow-md">
              {[1, 2, 3].map((item, index) => (
                <div key={index} className="flex gap-3 mb-4">
                  <img
                    src="https://images.pexels.com/photos/28345114/pexels-photo-28345114/free-photo-of-a-person-sitting-on-a-bench-by-the-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Popular Item"
                    className="w-[70px] h-[50px] object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="font-bold">This is news title</p>
                    <p className="text-sm text-gray-500">Date</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Following Me */}
          <p className="bg-green-400 px-4 mt-6 text-center font-bold py-2">
            FOLLOWING ME
          </p>
          <div className="relative mt-3">
            <img
              src="https://images.pexels.com/photos/28345114/pexels-photo-28345114/free-photo-of-a-person-sitting-on-a-bench-by-the-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Following Me"
              className="w-full h-[150px] object-cover"
            />
            <p className="absolute top-4 left-4 text-white font-bold">
              Take patience
            </p>
            <div className="flex gap-5 absolute bottom-4 left-4">
              <p className="text-white font-bold cursor-pointer">Like page</p>
              <p className="text-white font-bold cursor-pointer">
                Send message
              </p>
            </div>
          </div>

          {/* Categories Section */}
          <p className="bg-yellow-400 px-4 mt-6 text-center font-bold py-2">
            Categories
          </p>
          <div className="bg-white py-4">
            <div className="flex items-center gap-2 px-4 py-2 text-gray-700">
              <FaAngleRight />
              <Link to="/">
                <p className="cursor-pointer">category</p>
              </Link>
              <p className="ml-auto">category</p>
            </div>
          </div>

          {/* Tags Section */}
          <p className="bg-blue-400 px-4 mt-6 text-center font-bold py-2">
            Tags
          </p>
          <div className="bg-white grid grid-cols-2 sm:grid-cols-3 gap-2 p-4">
            <Link to="/" className="text-center">
              <button className="bg-green-500 text-white p-1 rounded w-full">
                tag
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryArticles;
