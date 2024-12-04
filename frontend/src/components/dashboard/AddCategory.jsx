import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Link, useNavigate } from "react-router-dom";
import { add_category } from "../../store/actions/Dashboard/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const AddCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loader, categoryError, categorySuccessMessage } = useSelector(
    (state) => state.category
  );
  console.log(loader);
  const [state, setState] = useState({
    categoryName: "",
    categoryDes: "",
  });

  const inputHendle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const addCategory = (e) => {
    e.preventDefault();
    dispatch(add_category(state));
  };

  useEffect(() => {
    if (categoryError && categoryError.error) {
      toast.error(categoryError.error);
      dispatch({ type: "CATEGORY_ERROR_MSG_CLEAR" });
    }
    if (categorySuccessMessage) {
      toast.success(categorySuccessMessage);
      dispatch({ type: "CATEGORY_SUCCESS_MSG_CLEAR" });

      navigate("/dashboard/all-category ");
    }
  });

  return (
    <Layout>
      <div className="text-2xl font-semibold mb-6">
        <div className="bg-slate-300 flex flex-row  items-center justify-between">
          <Toaster
            position="bottom-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                fontSize: "15px",
              },
            }}
          />

          <p className="p-2">Add Category</p>
          <Link to="/dashboard/all-articles">
            <button className="bg-green-700 text-white p-1 px-2 text-sm mr-2">
              All Category
            </button>
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={addCategory}>
          <div>
            <label htmlFor="fullName" className="block text-gray-600">
              Category Name
            </label>
            <input
              onChange={inputHendle}
              type="text"
              id="category_name"
              name="categoryName"
              placeholder="Enter Articles title"
              className="w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
            <p>{categoryError ? categoryError.categoryName : ""}</p>
          </div>
          <div>
            <label htmlFor="fullName" className="block text-gray-600">
              Category Image
            </label>
            <input
              onChange={inputHendle}
              type="text"
              id="category_name"
              name="categoryImg"
              placeholder="Enter Image Link"
              className="w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
            <p>{categoryError ? categoryError.categoryImg : ""}</p>
          </div>

          <div>
            <label htmlFor="fullName" className="block text-gray-600">
              Category Description
            </label>
            <textarea
              onChange={inputHendle}
              type="text"
              id="category_des"
              name="categoryDes"
              placeholder="Enter Articles slug"
              className="w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
            <p>{categoryError ? categoryError.categoryDes : ""}</p>
          </div>
          <div>
            {loader ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              <button className="bg-green-300 mt-2 px-2">Add Category</button>
            )}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddCategory;
