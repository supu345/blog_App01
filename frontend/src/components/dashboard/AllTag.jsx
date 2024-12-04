import { Link, useParams } from "react-router-dom";
import Layout from "./Layout";
import { Helmet } from "react-helmet";
import { MdEdit, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  get_all_tag,
  delete_tag,
} from "../../store/actions/Dashboard/tagAction";
import Pagination from "../home/Pagination";
import toast, { Toaster } from "react-hot-toast";

const AllTag = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Extract and parse the page number from the URL
  const page = id && id.startsWith("page-") ? parseInt(id.split("-")[1]) : 1;
  const currentPage = isNaN(page) ? 1 : page;

  const { parPage, allTag, tagCount, tagSuccessMessage } = useSelector(
    (state) => state.tag
  );

  useEffect(() => {
    if (tagSuccessMessage) {
      toast.success(tagSuccessMessage);
      dispatch({ type: "TAG_SUCCESS_MSG_CLEAR" });
    }
    dispatch(get_all_tag(currentPage));
  }, [dispatch, currentPage, tagSuccessMessage]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tag?")) {
      dispatch(delete_tag(id));
    }
  };
  return (
    <Layout>
      <Helmet>
        <title>All Tags</title>
      </Helmet>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{ style: { fontSize: "15px" } }}
      />
      <div className="text-2xl font-semibold mb-6">
        <div className="bg-slate-300 flex flex-row items-center justify-between">
          <p className="p-2">Tag ({tagCount || 0})</p>
          <Link to="/dashboard/add-tag">
            <button className="bg-green-700 text-white p-1 px-2 text-sm mr-2">
              Add New
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {allTag?.map((tag) => (
          <div key={tag._id} className="bg-slate-300 shadow-md py-5">
            <p className="text-center">{tag.tagName}</p>
            <div className="flex flex-row gap-4 justify-center mt-5">
              <Link to={`/dashboard/tag/edit/${tag.tagSlug}`}>
                <MdEdit className="text-green-700 cursor-pointer" />
              </Link>
              <MdDelete
                className="text-red-700 cursor-pointer"
                onClick={() => handleDelete(tag._id)}
              />
            </div>
          </div>
        ))}
      </div>
      <Pagination
        pageNumber={currentPage}
        parPage={parPage}
        itemCount={tagCount}
        path="/dashboard/all-tag"
      />
    </Layout>
  );
};

export default AllTag;
