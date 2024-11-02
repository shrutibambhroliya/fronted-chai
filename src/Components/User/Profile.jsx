import React, { useState, useEffect } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [updateForm, setUpdateForm] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [changePassword, setChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "http://localhost:4000/api/a1/users/getUser-Profile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        console.error("Data not found");
      }
      const data = await response.json();
      setProfile(data.data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log("Data not fetched:", error.message);
      setLoading(false);
    }
  };

  const updateUserForm = () => {
    setFormLoading(true);
    setTimeout(() => {
      setUpdateForm(true);
      setFormLoading(false);
    }, 1000);
    setUpdateForm(true);
  };

  const closeUpdateForm = () => {
    setUpdateForm(false);
    setChangePassword(false);
  };

  const updateUser = async () => {
    setUserName("");
    setEmail("");
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "http://localhost:4000/api/a1/users/updateUser-Profile",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userName, email }),
        }
      );

      if (!response.ok) {
        console.log("failed to update profile");
        return;
      } else {
        console.log("updated profile successfully!!");
      }
      const data = await response.json();
      setProfile(data.data);
      setUpdateForm(false);

      alert("profile updated successfully");
    } catch (error) {
      console.log("error updating profile:::", error.message);
    }
  };

  const toggleCurrentPassword = async () => {
    setShowCurrentPassword(!showCurrentPassword);
  };
  const toggleNewPassword = async () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleChangePassword = async () => {
    setShowChangePassword(!showChangePassword);
  };

  const resetPasswordForm = () => {
    setChangePassword(true);
  };

  const updatedPassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("new password do not match");
      return;
    }

    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "http://localhost:4000/api/a1/users/change-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            oldPassword: currentPassword,
            newPassword: newPassword,
          }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "failed to password update");
        console.log("failed");
        return;
      }
      alert("password updates successfully!!");
      console.log("success");
      closeUpdateForm();
    } catch (error) {
      console.log("error updating password", error);
    }
  };

  const changeImg = async () => {
    if (!selectedImage) {
      alert("Please select an image to upload");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", selectedImage);

    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "http://localhost:4000/api/a1/users/update-avatar",
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        console.error("Image upload failed");
        return;
      }

      const data = await response.json();
      setProfile(data.data);
      alert("Image updated successfully!");
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  return (
    <div className="relative">
      <div className={`${updateForm || changePassword ? "opacity-5" : ""}`}>
        {loading ? (
          <div className="absolute top-0 bg-slate-400 flex justify-center items-center z-[5] w-screen h-screen opacity-[0.8]">
            <div className="loader"></div>
          </div>
        ) : (
          <div>
            {profile.userName ? (
              <div className="flex justify-around">
                <div className="mt-5">
                  <h1 className="text-left mb-5 text-[22px] border-b-2 ">
                    MY PROFILE
                  </h1>
                  <img
                    src={profile.avatar}
                    alt={`${profile.userName}'s avatar`}
                    className="w-[350px] h-[350px] rounded-full "
                  />
                </div>

                <div className="text-left my-auto">
                  <div className="mb-12">
                    <h1 className="font-semibold">
                      FullName:
                      <div className="font-normal">{profile.userName}</div>
                    </h1>
                  </div>
                  <div className="mb-12">
                    <h1 className="font-semibold">
                      Email:
                      <div className="font-normal">{profile.email}</div>
                    </h1>
                  </div>
                  <div className="mb-12">
                    <h1 className="font-semibold">
                      Joined On:
                      <div className="font-normal">
                        {new Date(profile.createdAt).toLocaleDateString(
                          "en-GB"
                        )}
                      </div>
                    </h1>
                  </div>
                  <div>
                    <div>
                      <button
                        onClick={updateUserForm}
                        className="bg-orange-700 text-white py-1 px-14 rounded-md "
                      >
                        Update User
                      </button>
                    </div>
                    <br />
                    <button
                      onClick={resetPasswordForm}
                      className="bg-orange-700 text-white py-1 w-full rounded-md"
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <p>No profile data available</p>
            )}
          </div>
        )}
      </div>
      {formLoading && (
        <div className="absolute top-0 bg-slate-400 flex justify-center items-center z-[5] w-screen h-screen opacity-[0.8]">
          <div className="loader"></div>
        </div>
      )}

      {updateForm && !formLoading && (
        <div className="fixed inset-0 flex justify-center items-center w-full h-full z-[9999] bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-md shadow-lg  max-w-[600px]">
            <div className=" flex justify-between items-center border-b border-gray-300">
              <h2 className="text-base font-bold mb-4">Edit Profile</h2>
              <div>
                <i className="bx bxs-edit-alt text-[25px] text-black"></i>
              </div>
            </div>
            <div className="flex py-2">
              <div>
                <img
                  src={profile.avatar}
                  alt={`${profile.userName}'s avatar`}
                  className="w-[70px] h-[70px] rounded-full mr-4"
                />
              </div>
              <div>
                <h1 className="text-[20px] font-bold capitalize">
                  {profile.userName}
                </h1>
                <h2 className="text-gray-700 text-[13px]">{profile.email}</h2>
              </div>
            </div>
            <div className="py-4 flex items-center justify-between gap-2 border-y border-gray-300">
              <label htmlFor="username" className="block text-sm font-medium">
                Username
              </label>
              <input
                type="text"
                id="username"
                defaultValue={profile.userName}
                onChange={(e) => setUserName(e.target.value)}
                className="mt-1 py-[5px] px-1 border border-gray-300 rounded-md w-full text-sm "
              />
            </div>

            <div className="py-4 flex items-center justify-between gap-2 border-b border-gray-300">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                defaultValue={profile.email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 py-[5px] px-1 border border-gray-300 rounded-md w-full text-sm"
              />
            </div>

            <div className="py-4 border-b border-gray-300">
              <label htmlFor="avatar" className="block text-sm font-medium">
                Change Profile Image
              </label>
              <input
                type="file"
                id="avatar"
                accept="image/*"
                onChange={(e) => setSelectedImage(e.target.files[0])}
                className="mt-1 py-[5px] px-1 border border-gray-300 rounded-md w-full text-sm"
              />
            </div>

            <div className="py-3 flex items-center justify-center gap-4">
              <button
                onClick={updateUser}
                className="bg-orange-700 text-white py-2 px-6 rounded-md "
              >
                Save Changes
              </button>
              <button
                onClick={changeImg}
                className="bg-orange-700 text-white py-2 px-6 rounded-md "
              >
                Upload Image
              </button>
              <button
                onClick={closeUpdateForm}
                className="bg-black text-white py-2 px-6 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {changePassword && (
        <div className="fixed inset-0 flex justify-center items-center w-full h-full z-[9999] bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-md shadow-lg  max-w-[600px]">
            <div className=" flex justify-between items-center border-b border-gray-300">
              <h2 className="text-base font-bold mb-4">Change Password</h2>
              <div>
                <i className="bx bxs-edit-alt text-[25px] text-black"></i>
              </div>
            </div>

            <div className="py-4 flex items-center justify-between gap-2 border-y border-gray-300">
              <label
                htmlFor="currentPassword"
                className="block text-sm font-medium"
              >
                Current Password
              </label>

              <div className="relative w-full">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  id="currentPassword"
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="relative mt-1 py-[5px] px-1 border border-gray-300 rounded-md w-full text-sm "
                />
                <span
                  className="absolute right-2 top-2 cursor-pointer"
                  onClick={toggleCurrentPassword}
                >
                  {showCurrentPassword ? "🙈" : "👁️"}
                </span>
              </div>
            </div>

            <div className="py-4 flex items-center justify-between gap-2 border-b border-gray-300">
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium"
              >
                New Password
              </label>
              <div className="relative w-full">
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="newPassword"
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1 py-[5px] px-1 border border-gray-300 rounded-md w-full text-sm"
                />
                <span
                  className="absolute right-2 top-2 cursor-pointer"
                  onClick={toggleNewPassword}
                >
                  {showNewPassword ? "🙈" : "👁️"}
                </span>
              </div>
            </div>

            <div className="py-4 flex items-center justify-between gap-2 border-b border-gray-300">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium"
              >
                Confirm Password
              </label>
              <div className="relative w-full">
                <input
                  type={showChangePassword ? "text" : "password"}
                  id="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 relative py-[5px] px-1 border border-gray-300 rounded-md w-full text-sm"
                />
                <span
                  className="absolute right-2 top-2 cursor-pointer"
                  onClick={toggleChangePassword}
                >
                  {showChangePassword ? "🙈" : "👁️"}
                </span>
              </div>
            </div>

            <div className="py-4 flex items-center justify-center gap-4">
              <button
                onClick={updatedPassword}
                className="bg-orange-700 text-white py-2 px-6 rounded-md "
              >
                Save Password
              </button>
              <button
                onClick={closeUpdateForm}
                className="bg-black text-white py-2 px-6 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
