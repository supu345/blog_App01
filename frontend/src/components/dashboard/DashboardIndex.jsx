import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { PiArticleNyTimesFill } from "react-icons/pi";
import { BsFillTagsFill } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import Chart from "react-apexcharts";

const DashboardIndex = () => {
  const chartOptions = {
    series: [
      {
        name: "Visitors",
        data: [100, 120, 90, 200, 244, 324, 123, 123, 213, 342, 321, 133],
      },
    ],
    options: {
      colors: ["#181ee8"],
      chart: {
        type: "bar",
        background: "transparent",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          style: {
            colors: "#6b7280", // Gray color
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#6b7280",
            fontSize: "12px",
          },
        },
      },
      grid: {
        borderColor: "#e5e7eb",
        strokeDashArray: 5,
      },
      legend: {
        position: "top",
        labels: {
          colors: "#374151",
        },
      },
    },
  };

  return (
    <div>
      {/* Cards Section */}
      <div className="grid grid-cols-4 gap-4 mb-10">
        <div className="w-[200px] bg-white flex flex-row gap-8 items-center px-6 shadow-md rounded-xl hover:bg-yellow-500">
          <BsPeopleFill className="text-3xl my-7" />
          <div>
            <p className="text-xl font-bold">23</p>
            <p className="font-normal">Visitors</p>
          </div>
        </div>
        <div className="w-[200px] bg-white flex flex-row gap-8 items-center px-6 shadow-md rounded-xl hover:bg-purple-400">
          <PiArticleNyTimesFill className="text-3xl my-7" />
          <div>
            <p className="text-xl font-bold">23</p>
            <p className="font-normal">Articles</p>
          </div>
        </div>
        <div className="w-[200px] bg-white flex flex-row gap-8 items-center px-6 shadow-md rounded-xl hover:bg-green-400">
          <MdCategory className="text-3xl my-7" />
          <div>
            <p className="text-xl font-bold">23</p>
            <p className="font-normal">Category</p>
          </div>
        </div>
        <div className="w-[200px] bg-white flex flex-row gap-8 items-center px-6 shadow-md rounded-xl hover:bg-red-400">
          <BsFillTagsFill className="text-3xl my-7" />
          <div>
            <p className="text-xl font-bold">23</p>
            <p className="font-normal">Tags</p>
          </div>
        </div>
        <div className="w-[200px] bg-white flex flex-row gap-8 items-center px-6 shadow-md rounded-xl hover:bg-blue-400">
          <RiAdminFill className="text-3xl my-7" />
          <div>
            <p className="text-xl font-bold">23</p>
            <p className="font-normal">Sub Admin</p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <Chart
          options={chartOptions.options}
          series={chartOptions.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default DashboardIndex;
