const NavBar = () => {
  return (
    <header className="w-full px-8 text-gray-700 bg-white body-font">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <a
          href="#_"
          className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0"
        >
          <span className="text-lg font-black leading-none text-gray-500 select-none logo">
            VI Body Spa<span className="text-green-600">.</span>
          </span>
        </a>
        <div className="relative flex flex-col md:flex-row">
          <nav className="flex flex-wrap items-center pt-3 pb-5 mb-4 text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0">
            <a href="#_" className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#_" className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900">
              Massages
            </a>
            <a href="#_" className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900">
              Nails
            </a>
            <a href="#_" className="font-medium leading-6 text-gray-600 md:mr-6 hover:text-gray-900">
              Packages
            </a>
          </nav>
          <div className="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
            <span className="inline-flex rounded-md shadow-sm">
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-md hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700"
              >
                Book an appointment
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
