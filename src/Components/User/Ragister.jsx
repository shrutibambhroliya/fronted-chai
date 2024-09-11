import React from "react";
import useTheme from "../../Context/Theme";

const Ragister = () => {
  const { themeMode, darkMode, lightMode } = useTheme();

  const toggleChange = (e) => {
    const themeChange = e.currentTarget.checked;
    if (themeChange) {
      darkMode();
    } else {
      lightMode();
    }
  };
  return (
    <div>
      <div className="back-ground h-screen w-full">
        <div className=" flex  flex-col min-h-screen items-center justify-center">
          <div className="w-full ">
            <div className="dark:bg-gray-950 dark:border-gray-700 bg-slate-100 max-w-md mx-auto  rounded-lg shadow py-5">
              <div className="w-full max-w-sm mx-auto flex justify-between items-center">
                <h2 className="mb-5 mt-2 text-center text-2xl font-bold leading-9 tracking-tight dark:text-white text-gray-900">
                  logIn your account
                </h2>
                <div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      onChange={toggleChange}
                      className="sr-only peer"
                      checked={themeMode === "dark"}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              <div className="w-full mx-auto max-w-sm">
                <form action="#" className="space-y-6">
                  <div>
                    <label
                      htmlFor="userName"
                      className="block text-base font-medium leading-6 dark:text-white"
                    >
                      userName
                    </label>
                    <div className="mt-2">
                      <input
                        name="userName"
                        type="text"
                        required
                        className="block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-medium leading-6 dark:text-white text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-base font-medium leading-6 dark:text-white text-gray-900"
                      >
                        Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        name="password"
                        type="password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex justify-evenly">
                    <button
                      type="submit"
                      className="flex justify-center rounded-md bg-indigo-600 px-9 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      LogIn
                    </button>
                    <button
                      type="submit"
                      className="flex  justify-center rounded-md bg-indigo-600 px-9 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ragister;
