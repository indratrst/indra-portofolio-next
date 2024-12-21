"use client";

import Toggle from "../molecules/Toggles";

export default function Header() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const handleThemeToggle = () => {
  //   const newMode = !isDarkMode;
  //   setIsDarkMode(newMode);
  //   localStorage.setItem("isDarkMode", JSON.stringify(newMode));
  // };
  return (
    <>
      <div className="bg-transparent absolute top-0 left-0 w-full flex items-center z-[9999]">
        <div className="container ">
          <div className="flex items-center justify-between relative ">
            <div className="px-4 ">
              <a
                href="#home"
                className="font-bold text-lg text-primary block py-6 "
              >
                Indra Tristia
              </a>
            </div>

            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
              >
                <span className="hamburger-line origin-top-left transition duration-300"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line origin-bottom-left transition duration-300"></span>
              </button>

              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none dark:bg-dark dark:lg:bg-transparent dark:shadow-red-900"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-primary border-b-2 border-b-transparent  group-hover:border-b-primary "
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-primary border-b-2 border-b-transparent  group-hover:border-b-primary "
                    >
                      About Me
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-primary border-b-2 border-b-transparent  group-hover:border-b-primary "
                    >
                      Achievement
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#timeline"
                      className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-primary border-b-2 border-b-transparent  group-hover:border-b-primary "
                    >
                      Timeline
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#project"
                      className="text-dark mx-6 dark:text-light flex text-base py-2 group-hover:text-primary border-b-2 border-b-transparent  group-hover:border-b-primary "
                    >
                      Project
                    </a>
                  </li>
                  <li className="flex items-center mt-3 lg:mt-0 sm:justify-center">
                    {/* <div className="flex justify-center ml-4">
                      <span className="text-sm text-slate-500 mr-2">light</span>
                      <input
                        type="checkbox"
                        id="dark-toggle"
                        className="hidden"
                        checked={isDarkMode}
                        onChange={handleThemeToggle}
                      />
                      <label htmlFor="dark-toggle">
                        <div className="w-9 h-5 bg-slate-800 rounded-full flex items-center p-1 cursor-pointer">
                          <div className="w-4 h-4 bg-white rounded-full toggle-circle transition duration-300 ease-in-out"></div>
                        </div>
                      </label>
                      <span className="text-sm text-slate-500 ml-2">dark</span>
                    </div> */}
                    <Toggle />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
