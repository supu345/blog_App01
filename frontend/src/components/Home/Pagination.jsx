import React from "react";
import { Link } from "react-router-dom";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Pagination = ({ pageNumber, parPage, itemCount, path }) => {
  const totalPage = Math.ceil(itemCount / parPage);
  let startLink = pageNumber;
  let diff = totalPage - pageNumber;

  if (diff <= 4) {
    startLink = totalPage - 4;
  }
  let endLink = startLink + 4;

  if (startLink <= 0) {
    startLink = 1;
  }
  if (endLink > totalPage) {
    endLink = totalPage;
  }

  // Create the page links
  const createLinks = () => {
    const storeLinks = [];
    for (let i = startLink; i <= endLink; i++) {
      storeLinks.push(
        <li key={i} className={pageNumber === i ? "active" : ""}>
          <Link to={`${path}/page-${i}`}>{i}</Link>
        </li>
      );
    }
    return storeLinks;
  };

  // Function for next page
  const nextPage = () => {
    if (pageNumber < totalPage) {
      return (
        <li>
          <Link to={`${path}/page-${pageNumber + 1}`}>
            <FaChevronCircleRight />
          </Link>
        </li>
      );
    }
  };

  // Function for previous page
  const prePage = () => {
    if (pageNumber > 1) {
      return (
        <li>
          <Link to={`${path}/page-${pageNumber - 1}`}>
            <FaChevronCircleLeft />
          </Link>
        </li>
      );
    }
  };

  return (
    <div>
      <ul className="flex flex-row gap-2 items-center mt-9 text-xl">
        {prePage()}
        {createLinks()}
        {nextPage()}
      </ul>
    </div>
  );
};

export default Pagination;
