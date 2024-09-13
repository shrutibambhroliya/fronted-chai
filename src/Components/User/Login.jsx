import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(false);
  const [switchNav, setSwitchNav] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setSwitchNav(!switchNav);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setUserName("");
    setEmail("");
    setPassword("");

    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    try {
      const createForm = await fetch(
        "http://localhost:4000/api/a1/users/register",
        {
          method: "POST",
          body: formData,
        }
      );

      if (createForm.ok) {
        const data = await createForm.json();
        console.log("user registered", data);
        setActiveTab("login");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setUserName("");
    setEmail("");
    setPassword("");

    try {
      const loginForm = await fetch(
        "http://localhost:4000/api/a1/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName, email, password }),
        }
      );

      if (loginForm.ok) {
        const data = await loginForm.json();
        console.log("User logged in!", data);

        const token = data.data.accessToken;
        localStorage.setItem("token", token); // Store token in local storage
      } else {
        console.error("login failed");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogOut = async () => {
    try {
      console.log("logOut successfully");
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.log("error during logout", error);
    }
  };

  return (
    <>
      <div className="relative">
        {loading && (
          <div className="absolute top-0 bg-slate-400 flex justify-center items-center z-[5] w-screen h-screen opacity-[0.8]">
            <div className="loader "></div>
          </div>
        )}

        <div className="bg-[#dcdbdb] block justify-center items-center min-h-screen">
          <div className="absolute top-5 right-0 flex flex-col gap-[5px]">
            <label htmlFor="avatar" onClick={toggleNav}>
              {avatar ? (
                <img
                  src={URL.createObjectURL(avatar)}
                  alt="avatar preview"
                  className="avatar-preview"
                />
              ) : (
                <i className="bx bxs-user-circle text-[30px] text-gray-700"></i>
              )}
            </label>

            {switchNav && (
              <div className="">
                <div className="mb-[5px] main_tools">
                  <i className="bx bx-list-ul text-[25px] text-gray-500 transition-[0.3s] hover:text-black"></i>
                  <p className="hidden tools">order-list</p>
                </div>
                <div className="mb-[5px] main_tools">
                  <i className="bx bx-user text-[25px] text-gray-500 transition-[0.3s] hover:text-black"></i>
                  <p className="hidden tools">user</p>
                </div>
                <div className="mb-[5px] main_tools">
                  <i className="bx bxs-cart-alt text-[25px] text-gray-500 transition-[0.3s] hover:text-black"></i>
                  <p className="hidden tools">cart</p>
                </div>

                <div onClick={handleLogOut} className="mb-[5px] main_tools ">
                  <i className="bx bx-log-out text-[25px] text-gray-500 transition-[0.3s] hover:text-black"></i>
                  <p className="hidden tools">logOut</p>
                </div>
              </div>
            )}
          </div>

          <div className="pt-12">
            <div className="border-2 w-[300px] m-auto bg-white ">
              <form
                onSubmit={
                  activeTab === "register"
                    ? handleRegister
                    : activeTab === "login"
                    ? handleLogin
                    : null
                }
              >
                <div className="flex text-center mb-7">
                  <button
                    onClick={() => setActiveTab("login")}
                    className={`w-full py-2 ${
                      activeTab === "login"
                        ? "border-b-2 border-orange-600"
                        : ""
                    }`}
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => setActiveTab("register")}
                    className={`w-full py-2 ${
                      activeTab === "register"
                        ? "border-b-2 border-orange-600"
                        : ""
                    }`}
                  >
                    Register
                  </button>
                </div>

                <div className="py-5 px-3">
                  {/* login form */}
                  {activeTab === "login" ? (
                    <div className="">
                      <div className="px-[15px] mb-5">
                        <div className="border-2 border-gray-400 py-1 rounded-sm text-center">
                          <label htmlFor="text">
                            <i className="bx bx-user text-[20px] text-gray-700"></i>
                            <input
                              type="text"
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                              className="ml-2"
                              required
                            />
                          </label>
                        </div>
                      </div>
                      <div className="px-[15px] mb-5">
                        <div className="border-2 border-gray-400 py-1 rounded-sm text-center">
                          <label htmlFor="text">
                            <i className="bx bx-envelope text-[20px] text-gray-700"></i>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="ml-2"
                              required
                            />
                          </label>
                        </div>
                      </div>
                      <div className="px-[15px] mb-7">
                        <div className="border-2 border-gray-400 py-1 rounded-sm text-center">
                          <label htmlFor="text">
                            <i className="bx bx-lock text-[20px] text-gray-700"></i>
                            <input
                              type="text"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="ml-2"
                              required
                            />
                          </label>
                        </div>
                      </div>
                      <div>
                        <p className="text-right text-gray-600 text-[13px] mb-6 mr-3">
                          <a href="">forget Password?</a>
                        </p>
                      </div>
                      <div className="px-5 text-center mb-6 ">
                        <button className="w-full bg-orange-500 text-white py-1 rounded-sm">
                          Log In
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {/* register form */}
                      <div className="px-[15px] mb-5">
                        <div className="border-2 border-gray-400 py-1 rounded-sm text-center">
                          <label htmlFor="text">
                            <i className="bx bx-user text-[20px] text-gray-700"></i>
                            <input
                              type="text"
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                              className="ml-2"
                              required
                            />
                          </label>
                        </div>
                      </div>
                      <div className="px-[15px] mb-5">
                        <div className="border-2 border-gray-400 py-1 rounded-sm text-center">
                          <label htmlFor="text">
                            <i className="bx bx-envelope text-[20px] text-gray-700"></i>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="ml-2"
                              required
                            />
                          </label>
                        </div>
                      </div>
                      <div className="px-[15px] mb-5">
                        <div className="border-2 border-gray-400 py-1 rounded-sm text-center">
                          <label htmlFor="text">
                            <i className="bx bx-lock text-[20px] text-gray-700"></i>
                            <input
                              type="text"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="ml-2"
                            />
                          </label>
                        </div>
                      </div>
                      <div className="px-[15px] mb-5">
                        <div className="flex justify-evenly items-center">
                          <label htmlFor="avatar">
                            {avatar ? (
                              <img
                                src={URL.createObjectURL(avatar)}
                                alt="avatar preview"
                                className="avatar-preview"
                              />
                            ) : (
                              <i className="bx bxs-user-circle text-[40px] text-gray-700"></i>
                            )}
                          </label>
                          <button className="container-btn-file">
                            Upload File
                            <input
                              className="file "
                              onChange={(e) => setAvatar(e.target.files[0])}
                              required
                              type="file"
                            />
                          </button>
                        </div>
                      </div>
                      <div className="px-5 text-center  mb-5 ">
                        <button
                          type="submit"
                          className="w-full bg-orange-500 text-white py-1 rounded-sm"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

// (
//   <div className="pt-12">
//     <div className="border-2 w-[300px] m-auto bg-white ">
//       <form
//         onSubmit={
//           activeTab === "register"
//             ? handleRegister
//             : activeTab === "login"
//             ? handleLogin
//             : null
//         }
//       >
//         <div className="flex text-center mb-7">
//           <button
//             onClick={() => setActiveTab("login")}
//             className={`w-full py-2 ${
//               activeTab === "login"
//                 ? "border-b-2 border-orange-600"
//                 : ""
//             }`}
//           >
//             Log In
//           </button>
//           <button
//             onClick={() => setActiveTab("register")}
//             className={`w-full py-2 ${
//               activeTab === "register"
//                 ? "border-b-2 border-orange-600"
//                 : ""
//             }`}
//           >
//             Register
//           </button>
//         </div>

//         <div className="py-5 px-3">
//           {/* login form */}
//           {activeTab === "login" ? (
//             <div className="">
//               <div className="px-[15px] mb-5">
//                 <div className="border-2 border-gray-400 py-1 rounded-sm text-center">
//                   <label htmlFor="text">
//                     <i className="bx bx-user text-[20px] text-gray-700"></i>
//                     <input
//                       type="text"
//                       value={userName}
//                       onChange={(e) => setUserName(e.target.value)}
//                       className="ml-2"
//                       required
//                     />
//                   </label>
//                 </div>
//               </div>
//               <div className="px-[15px] mb-5">
//                 <div className="border-2 border-gray-400 py-1 rounded-sm text-center">
//                   <label htmlFor="text">
//                     <i className="bx bx-envelope text-[20px] text-gray-700"></i>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="ml-2"
//                       required
//                     />
//                   </label>
//                 </div>
//               </div>
//               <div className="px-[15px] mb-7">
//                 <div className="border-2 border-gray-400 py-1 rounded-sm text-center">
//                   <label htmlFor="text">
//                     <i className="bx bx-lock text-[20px] text-gray-700"></i>
//                     <input
//                       type="text"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="ml-2"
//                       required
//                     />
//                   </label>
//                 </div>
//               </div>
//               <div>
//                 <p className="text-right text-gray-600 text-[13px] mb-6 mr-3">
//                   <a href="">forget Password?</a>
//                 </p>
//               </div>
//               <div className="px-5 text-center mb-6 ">
//                 <button className="w-full bg-orange-500 text-white py-1 rounded-sm">
//                   Log In
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div>
//               {/* register form */}
//               <div className="px-[15px] mb-5">
//                 <div className="border-2 border-gray-400 py-1 rounded-sm text-center">
//                   <label htmlFor="text">
//                     <i className="bx bx-user text-[20px] text-gray-700"></i>
//                     <input
//                       type="text"
//                       value={userName}
//                       onChange={(e) => setUserName(e.target.value)}
//                       className="ml-2"
//                       required
//                     />
//                   </label>
//                 </div>
//               </div>
//               <div className="px-[15px] mb-5">
//                 <div className="border-2 border-gray-400 py-1 rounded-sm text-center">
//                   <label htmlFor="text">
//                     <i className="bx bx-envelope text-[20px] text-gray-700"></i>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="ml-2"
//                       required
//                     />
//                   </label>
//                 </div>
//               </div>
//               <div className="px-[15px] mb-5">
//                 <div className="border-2 border-gray-400 py-1 rounded-sm text-center">
//                   <label htmlFor="text">
//                     <i className="bx bx-lock text-[20px] text-gray-700"></i>
//                     <input
//                       type="text"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="ml-2"
//                     />
//                   </label>
//                 </div>
//               </div>
//               <div className="px-[15px] mb-5">
//                 <div className="flex justify-evenly items-center">
//                   <label htmlFor="avatar">
//                     {avatar ? (
//                       <img
//                         src={URL.createObjectURL(avatar)}
//                         alt="avatar preview"
//                         className="avatar-preview"
//                       />
//                     ) : (
//                       <i className="bx bxs-user-circle text-[40px] text-gray-700"></i>
//                     )}
//                   </label>
//                   <button className="container-btn-file">
//                     Upload File
//                     <input
//                       className="file "
//                       onChange={(e) => setAvatar(e.target.files[0])}
//                       required
//                       type="file"
//                     />
//                   </button>
//                 </div>
//               </div>
//               <div className="px-5 text-center  mb-5 ">
//                 <button
//                   type="submit"
//                   className="w-full bg-orange-500 text-white py-1 rounded-sm"
//                 >
//                   Register
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </form>
//     </div>
//   </div>
// )
