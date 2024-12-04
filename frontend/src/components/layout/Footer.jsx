import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container bg-black text-white font-sm pt-5">
      {/*first section */}
      <div className="flex flex-row gap-9">
        <div>
          <div className="flex flex-row gap-2 pt-1 items-center">
            <div className="">
              <img
                src="https://images.pexels.com/photos/564094/pexels-photo-564094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="w-[100px] h-[100px] p-2 object-cover"
              />
            </div>

            <div className="">
              <Link to="/article/details/slug">
                <p className="font-bold hover:text-orange-600">
                  11 of Best Laptops Evaluated Based on Budget
                </p>
              </Link>
              <div className="flex flex-row gap-2">
                <p className="font-bold">adminName</p>
                <p>date</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 pt-1 items-center">
            <div className=" ">
              <img
                src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="w-[100px] h-[100px] p-2 object-cover"
              />
            </div>

            <div className="pr-2 ">
              <Link to="/article/details/slug">
                <p className="font-bold hover:text-orange-600">
                  11 of Best Laptops Evaluated Based on Budget
                </p>
              </Link>
              <div className="flex flex-row gap-2">
                <p className="font-bold">adminName</p>
                <p>date</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 pt-1 items-center">
            <div className="">
              <img
                src="https://images.pexels.com/photos/804570/pexels-photo-804570.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-[100px] h-[100px] p-2 object-cover"
              />
            </div>

            <div className="pr-2 ">
              <Link to="/article/details/slug">
                <p className=" hover:text-orange-600">
                  11 of Best Laptops Evaluated Based on Budget
                </p>
              </Link>
              <div className="flex flex-row gap-2">
                <p className="">adminName</p>
                <p>date</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" ml-8">
          {/*second section */}
          <div className="font-bold text-white ">
            <p className="pt-8 uppercase">Categories</p>
            <p className="pt-8">Food</p>
            <p className="pt-3">Travel</p>
            <p className="pt-3">Technology</p>
            <p className="pt-3">Education</p>
          </div>
          <div className=" text-white mt-6 ">
            <p className="uppercase font-bold">Tag</p>
            <div className="grid grid-cols-3 gap-5 ">
              <p className="-pb-3">Food</p>
              <p className="-pb-3">Food</p>
              <p className="-pb-3">Food</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="flex flex-row gap-2 pt-1 items-center">
              <div className="">
                <img
                  src="https://images.pexels.com/photos/564094/pexels-photo-564094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="w-[100px] h-[100px] p-2 object-cover"
                />
              </div>

              <div className="">
                <Link to="/article/details/slug">
                  <p className="font-bold hover:text-orange-600">
                    11 of Best Laptops Evaluated Based on Budget
                  </p>
                </Link>
                <div className="flex flex-row gap-2">
                  <p className="font-bold">adminName</p>
                  <p>date</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 pt-1 items-center">
              <div className=" ">
                <img
                  src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="w-[100px] h-[100px] p-2 object-cover"
                />
              </div>

              <div className="pr-2 ">
                <Link to="/article/details/slug">
                  <p className="font-bold hover:text-orange-600">
                    11 of Best Laptops Evaluated Based on Budget
                  </p>
                </Link>
                <div className="flex flex-row gap-2">
                  <p className="font-bold">adminName</p>
                  <p>date</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 pt-1 items-center">
              <div className="">
                <img
                  src="https://images.pexels.com/photos/804570/pexels-photo-804570.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-[100px] h-[100px] p-2 object-cover"
                />
              </div>

              <div className="pr-2 ">
                <Link to="/article/details/slug">
                  <p className=" hover:text-orange-600">
                    11 of Best Laptops Evaluated Based on Budget
                  </p>
                </Link>
                <div className="flex flex-row gap-2">
                  <p className="">adminName</p>
                  <p>date</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
