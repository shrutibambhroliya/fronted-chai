import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./allUser.css";

const AllUser = () => {
  const [allUser, setAllUser] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const token = localStorage.getItem("token");
    setLoader(true);
    try {
      const response = await fetch(
        "http://localhost:4000/api/a1/users/getAll-user",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        console.log("data not found");
      }

      const data = await response.json();
      setAllUser(data.data);
      console.log(data.data);
    } catch (error) {
      console.log("data not fetched", error.message);
    } finally {
      setLoader(false);
    }
  };
  const updateUserRole = async (userId, role) => {
    const token = localStorage.getItem("token");
    setLoader(true);
    try {
      const response = await fetch(
        `http://localhost:4000/api/a1/users/c/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ role: role }),
        }
      );
      if (response.ok) {
        console.log("Role updated successfully!!");
        getUser();
      } else {
        console.log("failed to role updated");
      }
    } catch (error) {
      console.log("role updating error", error.message);
    } finally {
      setLoader(false);
    }
  };
  const deleteUser = async (userId, role) => {
    if (role !== "admin") {
      alert("only admin user can be deleted");
      return;
    }

    const token = localStorage.getItem("token");
    setLoader(true);
    try {
      const response = await fetch(
        `http://localhost:4000/api/a1/users/c/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        console.log("user deleted successfully!");
        setAllUser(allUser.filter((user) => user._id !== userId));
      } else {
        console.log("failed to user deleted!!");
      }
    } catch (error) {
      console.log("user deleted successfully", error.message);
    } finally {
      setTimeout(() => {
        setLoader(false);
      }, 3000);
    }
  };

  return (
    <div className="relative">
      {loader && (
        <div className="absolute top-0 bg-slate-400 flex justify-center items-center z-[5] w-screen h-screen opacity-[0.8]">
          <div className="loader"></div>
        </div>
      )}
      <div className="grid grid-cols-4 gap-4 my-9 mx-9">
        <div className="col-span-3 mr-5">
          <div className="flex justify-between items-center mb-5">
            <div>
              <p className="mb-2 text-gray-600 font-semibold">
                Mange members access
              </p>
              <h1 className="text-gray-700 font-bold text-[25px]"> Users</h1>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-gray-600 font-semibold">
                {allUser.length} Users
              </p>
              <Link to={"/login"}>
                <button className="bg-black text-white text-[14px] px-4 py-2 font-semibold rounded-md">
                  +Add User
                </button>
              </Link>
            </div>
          </div>

          {allUser.length > 0 ? (
            <div className="container">
              {allUser.map((item, index) => (
                <div key={index} className="border-y border-gray-300">
                  <ul className="flex justify-between items-center ">
                    <div className="flex gap-4 items-center py-2 ">
                      <li>
                        <img
                          src={item.avatar}
                          alt="no-img"
                          className="w-[30px] h-[30px] rounded-xl"
                        />
                      </li>
                      <li className="capitalize text-[17px] text-gray-800 font-medium">
                        {item.userName}
                      </li>
                      <li className="text-[16px] text-gray-500 font-medium">
                        {item.email}
                      </li>
                    </div>
                    <div className="flex gap-5 items-center ">
                      <li>
                        <select
                          value={item.role}
                          onChange={(e) =>
                            updateUserRole(item._id, e.target.value)
                          }
                          className="px-2 py-[6px] text-center text-[14px] font-semibold text-gray-800 bg-gray-200 outline-none rounded-md"
                        >
                          <option value="user">user</option>
                          <option value="admin">Admin</option>
                        </select>
                      </li>
                      <li>
                        {new Date(item.createdAt).toLocaleDateString("en-GB")}
                      </li>
                      <button onClick={() => deleteUser(item._id, item.role)}>
                        <i className="bx bx-user-minus text-[25px] text-gray-500 transition-[0.3s] hover:text-gray-700"></i>
                      </button>
                    </div>
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p>data not fetched </p>
          )}
        </div>
        <div className="cols-span-2 px-5">
          <h1 className="mb-5 text-[22px] text-gray-600 font-semibold">
            Access Control{" "}
          </h1>
          <div>
            <p className="text-[14px] font-semibold text-gray-500">
              Manage team members of your organization and set their access
              travel.You can invite new team members up to the seats allowed on
              your plan.
            </p>
          </div>
          <br />
          <div>
            <h1 className="text-[17px] text-gray-600 font-semibold">
              Admin role
            </h1>
            <p className="text-[14px] font-semibold text-gray-500">
              Admins have access the entire organization.They can edit and
              manage all project and organization settings,manage members as
              well as security,billing settings.
            </p>
          </div>
          <br />
          <div>
            <h1 className="text-[17px] text-gray-600 font-semibold">
              User role
            </h1>
            <p className="text-[14px] font-semibold text-gray-500">
              User can access all services.However,they cannot edit any
              organization settings,including billing information and inviting
              additional users to the organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
