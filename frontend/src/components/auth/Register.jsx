import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import { register } from "../../store/actions/authAction";
// import { useEffect } from "react";
// import toast, { Toaster } from "react-hot-toast";
const Register = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { loader, errorMessage, successMessage, authenticate } = useSelector(
  //   (state) => state.adminReducer
  // );
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  // const [showImage, setShowImage] = useState("");
  // const handleChange = (e) => {
  //   setState({ ...state, [e.target.name]: e.target.value });
  // };
  // const imageHandle = (e) => {
  //   if (e.target.files.length !== 0) {
  //     setState({
  //       ...state,
  //       image: e.target.files[0],
  //     });
  //     const rander = new FileReader();
  //     rander.onload = () => {
  //       setShowImage(rander.result);
  //     };
  //     rander.readAsDataURL(e.target.files[0]);
  //   }
  // };
  // console.log(state.image);

  const user_reggister = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", state.name);
    formData.append("email", state.email);
    formData.append("password", state.password);
    formData.append("image", state.image);

    // dispatch(register(formData));
  };

  // useEffect(() => {
  //   if (authenticate) {
  //     navigate("/");
  //   }
  //   if (successMessage) {
  //     navigate("/register/email-verify");
  //   }
  //   if (errorMessage.error) {
  //     toast.error(errorMessage.error);
  //     dispatch({ type: "ERROR_CLEAR" });
  //   }
  // }, [successMessage, errorMessage?.error, authenticate]);
  // useEffect(() => {
  //   dispatch({ type: "ERROR_CLEAR" });
  // }, []);

  return (
    <Layout>
      <div className="pt-[100px] py-7">
        <div
          className="min-h-screen flex items-center  justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/gray-geometric-memphis-design-social-banner-vector_53876-168955.jpg?t=st=1731245025~exp=1731248625~hmac=f37a4d149363cc29702b07016c6ada130c81c84d7d3dc92fd892c48790f0b298&w=1060')`,
          }}
        >
          {/* <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: "15px",
            },
          }}
        /> */}
          <div className="flex flex-row bg-white shadow-lg rounded-lg l">
            {/* Left Side - Form */}

            <div>
              <form className="">
                <div className="pl-7 mt-4">
                  <div className="px-7 text-center">
                    <p className="pl-[100px] my-8 font-bold text-xl">
                      Register
                    </p>
                  </div>
                  <label htmlFor="fullName" className="block text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={state.name}
                    //onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="pl-7 mt-4">
                  <label htmlFor="email" className="block text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={state.email}
                    // onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="pl-7 mt-4">
                  <label htmlFor="password" className="block text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={state.password}
                    //  onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="pl-7 mt-4 ">
                  <label htmlFor="password" className="block text-gray-600">
                    Image
                  </label>

                  <input
                    type="file"
                    id="reg-image"
                    name="image"
                    //onChange={imageHandle}
                    placeholder="Enter your image"
                    className="w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                  <div className="mt-5 flex flex-row gap-3 items-center">
                    <div className="w-[50px] h-[50px] rounded-full border overflow-hidden">
                      {/* {showImage && (
                      <img src={`${showImage}`} alt="profile image" />
                    )} */}
                    </div>
                    <p>{state.image && state.image.name}</p>
                  </div>
                </div>

                <div>
                  <div role="status">
                    {/* <svg
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
                  </svg> */}
                    <span class="sr-only">Loading...</span>
                  </div>

                  <button
                    onClick={user_reggister}
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-300 ml-7 mt-8"
                  >
                    Register
                  </button>
                </div>
              </form>

              <p className="text-center text-gray-500 mt-6 ml-6 mb-7">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Sign In
                </Link>
              </p>
            </div>

            {/* Right Side - image */}
            <div>
              <img
                src="https://img.freepik.com/free-vector/biophilic-design-workspace-abstract-concept_335657-3081.jpg?t=st=1731243743~exp=1731247343~hmac=0045a05ac10e3ca11dbd12be823276d36c63a797ac6328204d71d3c1a1ed2604&w=740"
                alt=""
                className="h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
