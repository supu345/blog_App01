import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { admin_login } from "../../store/actions/authActions";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../layout/Layout";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loader, errorMessage, successMessage, authenticate } = useSelector(
    (state) => state.adminReducer
  );

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const adminLogin = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
    //console.log(state);
  };

  // Navigate to dashboard if authenticated
  useEffect(() => {
    if (authenticate) {
      navigate("/dashboard");
    }
  }, [authenticate, navigate]);

  // Handle success messages
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch({ type: "LOGIN_SUCCESS_MESSAGE_CLEAR" });
    }
  }, [successMessage, dispatch]);

  // Handle error messages
  useEffect(() => {
    if (errorMessage) {
      // Error handling for both string and object error messages
      if (typeof errorMessage === "string") {
        toast.error(errorMessage);
      } else {
        if (errorMessage.email) toast.error(errorMessage.email);
        if (errorMessage.password) toast.error(errorMessage.password);
      }
    }
  }, [errorMessage]);

  return (
    <Layout>
      <div className="pt-[100px]">
        <div
          className="min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/gray-geometric-memphis-design-social-banner-vector_53876-168955.jpg?t=st=1731245025~exp=1731248625~hmac=f37a4d149363cc29702b07016c6ada130c81c84d7d3dc92fd892c48790f0b298&w=1060')`,
          }}
        >
          <Toaster
            position="bottom-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                fontSize: "15px",
              },
            }}
          />
          <div className="flex flex-row bg-white shadow-lg rounded-lg my-7">
            {/* Left Side - Form */}
            <div>
              <form className="w-[300px]" onSubmit={adminLogin}>
                <div className="pl-7 mt-4">
                  <div className="px-7 text-center">
                    <p className="pl-[80px] my-8 font-bold text-xl">
                      Admin Login
                    </p>
                  </div>
                </div>

                {/* Email Input */}
                <div className="pl-7 mt-4">
                  <label htmlFor="email" className="block text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={state.email}
                    onChange={inputHandle}
                    placeholder="Enter your email"
                    className="w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                {errorMessage?.email && (
                  <p className="text-red-500 pl-7 mt-2">{errorMessage.email}</p>
                )}

                {/* Password Input */}
                <div className="pl-7 mt-4">
                  <label htmlFor="password" className="block text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={state.password}
                    onChange={inputHandle}
                    placeholder="Enter your password"
                    className="w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                {errorMessage?.password && (
                  <p className="text-red-500 pl-7 mt-2">
                    {errorMessage.password}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-400 text-white p-3 rounded hover:bg-blue-700 transition duration-300 ml-7 mt-8"
                  disabled={loader} // Disable when loading
                >
                  {loader ? "Logging in..." : "Login"}
                </button>
              </form>

              <p className="text-center text-gray-500 mt-6 ml-6 mb-7">
                Register your Account
              </p>
            </div>

            {/* Right Side - image */}
            <div>
              <img
                src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7873.jpg?t=st=1731247185~exp=1731250785~hmac=f568f1ee125a76ed20294385c7635461299145c6ad81b4971f7e92486b14e617&w=740"
                alt="Login Illustration"
                className="h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminLogin;
