// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import toast, { Toaster } from "react-hot-toast";

import Layout from "../layout/Layout";

// import { user_login } from "../../store/actions/authAction";
const Login = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { loader, errorMessage, successMessage, authenticate } = useSelector(
  //   (state) => state.adminReducer
  // );
  // const [state, setState] = useState({
  //   email: "",
  //   password: "",
  // });

  // useEffect(() => {
  //   if (authenticate) {
  //     navigate("/dashboard");
  //   }
  //   if (errorMessage.error) {
  //     toast.error(errorMessage.error);
  //     dispatch({ type: "ERROR_CLEAR" });
  //   }
  // }, [errorMessage?.error, authenticate]);

  // useEffect(() => {
  //   dispatch({ type: "ERROR_CLEAR" });
  // }, []);

  // const inputHandle = (e) => {
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const login = (e) => {
  //   e.preventDefault();
  //   dispatch(user_login(state));
  // };
  return (
    <Layout>
      <div className="pt-[100px]">
        <div
          className="min-h-screen flex items-center  justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/gray-geometric-memphis-design-social-banner-vector_53876-168955.jpg?t=st=1731245025~exp=1731248625~hmac=f37a4d149363cc29702b07016c6ada130c81c84d7d3dc92fd892c48790f0b298&w=1060')`,
          }}
        >
          <div className="flex flex-row  bg-white shadow-lg rounded-lg my-7">
            {/* <Toaster
            position={"bottom-center"}
            reverseOrder={false}
            toastOptions={{
              style: {
                fontSize: "16px",
              },
            }}
          /> */}
            {/* Left Side - Form */}

            <div>
              <form className="w-[300px]">
                <div className="pl-7 mt-4">
                  <div className="px-7 text-center">
                    <p className="pl-[100px] my-8 font-bold text-xl">Login</p>
                  </div>
                </div>
                <div className="pl-7 mt-4">
                  <label htmlFor="email" className="block text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    //  onChange={inputHandle}
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
                    //onChange={inputHandle}
                    placeholder="Enter your password"
                    className="w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <div role="status">
                    {/* <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                    <span className="sr-only">Loading...</span>
                  </div>

                  <button
                    type="submit"
                    //onClick={login}
                    className="w-full bg-red-400 text-white p-3 rounded hover:bg-blue-700 transition duration-300 ml-7 mt-8"
                  >
                    Login
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-300 ml-7 mt-4"
                >
                  Signup with facebook
                </button>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white p-3 rounded hover:bg-blue-700 transition duration-300 ml-7 mt-4"
                >
                  Signup with google
                </button>
              </form>

              <p className="text-center text-gray-500 mt-6 ml-6 mb-7">
                Register your Account
              </p>
            </div>

            {/* Right Side - image */}
            <div>
              <img
                src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration-enter-application-mobile-screen-user-login-form-website-page-interface-ui-new-profile-registration-email-account_335657-936.jpg?t=st=1731246823~exp=1731250423~hmac=91fb43f6063a778c0fd5a0d3a0e0239ba501ee79966848d9a918e87e0418ef8f&w=740"
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

export default Login;
