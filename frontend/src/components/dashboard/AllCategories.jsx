import { Link, useParams } from "react-router-dom";
import Layout from "./Layout";
import { Helmet } from "react-helmet";
import { MdEdit, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  get_all_category,
  delete_category,
} from "../../store/actions/Dashboard/categoryAction";
import Pagination from "../home/Pagination";
import toast, { Toaster } from "react-hot-toast";

const AllCategories = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Extract and parse the page number from the URL
  const page = id && id.startsWith("page-") ? parseInt(id.split("-")[1]) : 1;
  const currentPage = isNaN(page) ? 1 : page;

  const { parPage, allCategory, categoryCount, categorySuccessMessage } =
    useSelector((state) => state.category);

  useEffect(() => {
    if (categorySuccessMessage) {
      toast.success(categorySuccessMessage);
      dispatch({ type: "CATEGORY_SUCCESS_MSG_CLEAR" });
    }
    dispatch(get_all_category(currentPage));
  }, [dispatch, currentPage, categorySuccessMessage]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      dispatch(delete_category(id));
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>All Categories</title>
      </Helmet>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{ style: { fontSize: "15px" } }}
      />
      <div className="text-2xl font-semibold mb-6">
        <div className="bg-slate-300 flex flex-row items-center justify-between">
          <p className="p-2">Articles ({categoryCount || 0})</p>
          <Link to="/dashboard/add-category">
            <button className="bg-green-700 text-white p-1 px-2 text-sm mr-2">
              Add New
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {allCategory?.map((category) => (
          <div
            key={category._id}
            className="bg-white border rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            {/* Category Image */}
            <img
              src={category.categoryImg}
              alt={category.categoryName}
              className="h-16 w-16 object-cover rounded-full"
            />

            {/* Category Name */}
            <p className="text-lg font-medium text-gray-800 mt-4 text-center">
              {category.categoryName}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-6">
              {/* Edit Button */}
              <Link
                to={`/dashboard/category/edit/${category.categorySlug}`}
                className="text-green-600 hover:text-green-800"
                title="Edit Category"
              >
                <MdEdit className="text-2xl cursor-pointer" />
              </Link>

              {/* Delete Button */}
              <button
                className="text-red-600 hover:text-red-800"
                onClick={() => handleDelete(category._id)}
                title="Delete Category"
              >
                <MdDelete className="text-2xl cursor-pointer" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        pageNumber={currentPage}
        parPage={parPage}
        itemCount={categoryCount}
        path="/dashboard/all-category"
      />
    </Layout>
  );
};

export default AllCategories;
