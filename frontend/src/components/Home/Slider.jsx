import React from "react";

const Slider = () => {
  return (
    <div className="mt-[120px] container mx-auto">
      <div className="flex flex-wrap md:flex-nowrap gap-1 ">
        {/* Left Section */}
        <div className="md:w-6/12 relative">
          <img
            src="https://images.pexels.com/photos/26537680/pexels-photo-26537680/free-photo-of-supermercado-del-puerto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Supermarket"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 p-4 text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <p className="bg-red-600 inline-block px-2 py-1 font-bold">Food</p>
            <p className="mt-2 text-2xl font-bold">
              11 of Best Laptops Evaluated Based on Budget
            </p>
            <div className="flex gap-2 mt-2 text-sm">
              <p>Writer name</p>
              <p>|</p>
              <p>date</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-6/12 flex flex-col gap-1">
          {/* Top Image with Overlay */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1038628/pexels-photo-1038628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Scenic Landscape"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <p className="bg-red-600 inline-block px-2 py-1 font-bold">
                Food
              </p>
              <p className="mt-2 text-2xl font-bold">
                A Scenic Landscape for Your Next Trip
              </p>
              <div className="flex gap-2 mt-2 text-sm">
                <p>Writer name</p>
                <p>|</p>
                <p>date</p>
              </div>
            </div>
          </div>

          {/* Bottom Images */}
          <div className="flex gap-1">
            {/* Image 1 */}
            <div className="relative w-1/2">
              <img
                src="https://images.pexels.com/photos/839441/pexels-photo-839441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Urban Scene"
                className="w-full h-[220px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <p className="bg-red-600 inline-block px-2 py-1 font-bold">
                  Travel
                </p>
                <p className="mt-2 text-lg font-bold">Urban City Vibes</p>
                <div className="flex gap-2 mt-1 text-sm">
                  <p>Writer name</p>
                  <p>|</p>
                  <p>date</p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative w-1/2">
              <img
                src="https://images.pexels.com/photos/196660/pexels-photo-196660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Desert Landscape"
                className="w-full h-[220px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <p className="bg-red-600 inline-block px-2 py-1 font-bold">
                  Adventure
                </p>
                <p className="mt-2 text-lg font-bold">Exploring the Desert</p>
                <div className="flex gap-2 mt-1 text-sm">
                  <p>Writer name</p>
                  <p>|</p>
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

export default Slider;
