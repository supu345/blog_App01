import React from "react";
import { Link } from "react-router-dom";

const HomeArticles = () => {
  return (
    <div className="pl-[100px] -mb-3">
      <div className="mt-[50px]">
        {/*1 */}
        <div className="bg-white mb-8 w-[680px]">
          <div className="flex flex-row gap-2 pt-1 items-center">
            <div className="w-1/3 ">
              <img
                src="https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="!w-[450px] h-[270px] p-2 object-cover"
              />
            </div>

            <div className="pr-2 w-2/3">
              <Link to="/">
                <p className="font-bold hover:text-orange-600">
                  11 of Best Laptops Evaluated Based on Budget
                </p>
              </Link>
              <div className="flex flex-row gap-2">
                <p className="font-bold">adminName</p>
                <p>date</p>
              </div>
              <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis assumenda possimus ullam sed consequatur beatae commodi
                tempore neque. Animi eaque, possimus soluta, vel numquam dolor
                harum laudantium consectetur tenetur nulla aliquid assumenda
              </p>
              <p className="py-4">Food</p>
            </div>
          </div>
          {/*2 */}
          <div className="flex flex-row gap-2 pt-1 items-center">
            <div className="w-1/3 ">
              <img
                src="https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="!w-[450px] h-[270px] p-2 object-cover"
              />
            </div>

            <div className="pr-2 w-2/3">
              <Link to="/">
                <p className="font-bold hover:text-orange-600">
                  11 of Best Laptops Evaluated Based on Budget
                </p>
              </Link>
              <div className="flex flex-row gap-2">
                <p className="font-bold">adminName</p>
                <p>date</p>
              </div>
              <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis assumenda possimus ullam sed consequatur beatae commodi
                tempore neque. Animi eaque, possimus soluta, vel numquam dolor
                harum laudantium consectetur tenetur nulla aliquid assumenda
              </p>
              <p className="py-4">Food</p>
            </div>
          </div>
          {/*3*/}
          <div className="flex flex-row gap-2 pt-1 items-center">
            <div className="w-1/3 ">
              <img
                src="https://images.pexels.com/photos/1860204/pexels-photo-1860204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="!w-[450px] h-[270px] p-2 object-cover"
              />
            </div>

            <div className="pr-2 w-2/3">
              <Link to="/">
                <p className="font-bold hover:text-orange-600">
                  11 of Best Laptops Evaluated Based on Budget
                </p>
              </Link>
              <div className="flex flex-row gap-2">
                <p className="font-bold">adminName</p>
                <p>date</p>
              </div>
              <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis assumenda possimus ullam sed consequatur beatae commodi
                tempore neque. Animi eaque, possimus soluta, vel numquam dolor
                harum laudantium consectetur tenetur nulla aliquid assumenda
              </p>
              <p className="py-4">Food</p>
            </div>
          </div>
          {/*4*/}
          <div className="flex flex-row gap-2 pt-1 items-center">
            <div className="w-1/3 ">
              <img
                src="https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="!w-[450px] h-[270px] p-2 object-cover"
              />
            </div>

            <div className="pr-2 w-2/3">
              <Link to="/">
                <p className="font-bold hover:text-orange-600">
                  11 of Best Laptops Evaluated Based on Budget
                </p>
              </Link>
              <div className="flex flex-row gap-2">
                <p className="font-bold">adminName</p>
                <p>date</p>
              </div>
              <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis assumenda possimus ullam sed consequatur beatae commodi
                tempore neque. Animi eaque, possimus soluta, vel numquam dolor
                harum laudantium consectetur tenetur nulla aliquid assumenda
              </p>
              <p className="py-4">Food</p>
            </div>
          </div>
          {/*5*/}
          <div className="flex flex-row gap-2 pt-1 items-center">
            <div className="w-1/3 ">
              <img
                src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="!w-[450px] h-[270px] p-2 object-cover"
              />
            </div>

            <div className="pr-2 w-2/3">
              <Link to="/article/details/slug">
                <p className="font-bold hover:text-orange-600">
                  11 of Best Laptops Evaluated Based on Budget
                </p>
              </Link>
              <div className="flex flex-row gap-2">
                <p className="font-bold">adminName</p>
                <p>date</p>
              </div>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis assumenda possimus ullam sed consequatur beatae commodi
                tempore neque. Animi eaque, possimus soluta, vel numquam dolor
                harum laudantium consectetur tenetur nulla aliquid assumenda
              </p>
              <p className="py-2">Food</p>
              <Link to="/article/details/slug">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeArticles;
