import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vi Body Spa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="w-full px-8 text-gray-700 bg-white body-font">
          <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
            <a
              href="#_"
              className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0"
            >
              <span className="text-lg font-black leading-none text-gray-500 select-none logo">
                VI Body Spa<span className="text-indigo-600">.</span>
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
                    className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                  >
                    Book an appointment
                  </a>
                </span>
              </div>
            </div>
          </div>
        </header>
        <section className="pt-24 pb-32 bg-white">
          <div className="px-8 mx-auto max-w-7xl lg:px-12 xl:px-16">
            <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
              <div className="w-full lg:w-1/2 lg:pr-10">
                <div className="relative max-w-lg mx-auto font-sans leading-6 text-center text-gray-700 border-gray-200 lg:text-left">
                  <h1 className="m-0 text-3xl font-bold leading-tight text-left text-gray-900 border-solid sm:text-4xl md:text-5xl">
                    Enjoy our Spa <span className="block font-sans text-left text-purple-700">Next Great Idea</span>
                  </h1>
                  <p className="pr-5 mx-0 my-5 text-base text-left text-gray-500 lg:my-8 xl:text-lg">
                    You will be sure to have the time of your life. Just the way that you love what you do.{" "}
                  </p>
                  <div className="relative flex items-center max-w-md leading-6 text-center lg:mx-0">
                    <input
                      type="text"
                      placeholder="Your E-mail Address"
                      className="w-full py-4 pr-0 m-0 overflow-visible font-medium duration-300 border-2 border-gray-200 rounded-full outline-none sm:py-5 sm:pr-48 cursor-text pl-7 focus:outline-none focus-within:border-purple-700 hover:border-gray-400"
                    />
                    <button className="absolute right-0 h-12 px-8 mr-3 text-white bg-purple-700 rounded-full">Get Started</button>
                  </div>
                  <div className="mt-12 leading-6 text-left border-solid lg:mt-12">
                    <p className="m-0 font-sans text-sm font-bold tracking-wider text-gray-400 uppercase lg:text-xs">Trusted by industry leaders</p>
                    <div className="flex mt-5 space-x-4">
                      <svg className="w-auto h-8 text-gray-300 fill-current" viewBox="0 0 2428 1267" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" strokeWidth={1} fillRule="evenodd">
                          <g fillRule="nonzero">
                            <path d="M742.056 658.303H574.552l19.04-291.146-108.778 291.146H329.267L576.07.23h165.507l-19.104 295.14L833.312.23H988.87L742.056 658.303zm20.207 0L1009.052.23h155.546L917.81 658.303H762.263z" />
                            <path d="M311.33 431.474c-217.36 255.258-422.399 594.898-241.29 751.3 175.495 151.565 394.852 61.827 544.42 1.997 149.567-59.83 1802.732-777.732 1802.732-777.732 15.953-7.976 12.97-17.95-6.978-12.97-8.04 2.011-1799.736 487.573-1799.736 487.573-227.36 63.824-486.6-75.276-299.148-450.168z" />
                            <path d="M1868.364 109.915L1910.165.23H1435.55l-162.966 197.426L1347.822.23h-157.544L945.461 658.303h155.546l104.524-275.193 7.159 275.193 477.274-1.038 45.434-126.585h-181.46l59.622-159.528h149.554l46.017-122.642h-149.555l51.27-138.595h157.518zm-501.36 504.511l-9.973-342.985 235.18-258.216-225.207 601.201z" />
                          </g>
                        </g>
                      </svg>
                      <svg className="w-auto h-8 text-gray-300 fill-current" viewBox="0 0 2500 759" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" strokeWidth={1} fillRule="evenodd">
                          <g fillRule="nonzero">
                            <path d="M0 536.817V11.12h92.34v525.698H0zm328.727-381.376c-118.401 0-200.332 91.034-200.332 195.23 0 116.286 89.135 196.401 201.252 196.401 106.405 0 198.742-78.633 198.742-196.652 0-99.238-76.516-194.979-199.662-194.979zm-1.09 89.085c61.964 0 107.568 48.23 107.568 106.48 0 61.762-50.284 106.813-105.897 106.813-65.71 0-107.066-52.08-107.066-106.647 0-59.809 46.693-106.646 105.395-106.646zm432.766-89.085c-118.397 0-200.33 91.034-200.33 195.23 0 116.286 89.134 196.401 201.25 196.401 106.406 0 198.742-78.633 198.742-196.652 0-69.496-30.095-100.33-30.095-100.33l25.597-8.778v-74.946H824.41s-28.436-10.925-64.008-10.925zm-1.087 89.085c61.96 0 107.568 48.23 107.568 106.48 0 61.762-50.285 106.813-105.896 106.813-65.71 0-107.065-52.08-107.065-106.647 0-59.809 46.693-106.646 105.393-106.646zm106.915 317.988c0 61.76-50.281 107.15-105.894 107.15-65.713 0-107.234-52.589-107.234-107.15h-93.682c0 116.287 89.132 196.397 201.252 196.397 106.403 0 198.74-78.387 198.74-196.397h-93.182zm130.821-25.699V166.366h92.346v370.45h-92.346zm182.014 0v-287.47h-49.518v-82.979h49.518V52.608h92.344v113.758h50.857v82.979h-50.857v287.47h-92.344zm-74.883-475.663c0 33.772-27.378 61.15-61.148 61.15-33.777 0-61.153-27.38-61.153-61.15 0-33.773 27.38-61.152 61.153-61.152 33.771 0 61.148 27.379 61.148 61.152zm425.693 94.04c-118.96 0-195.647 91.077-195.647 198.825 0 111.346 76.945 193.307 197.572 193.307 112.523 0 167.876-70.267 167.876-70.267l-61.73-61.815s-46.61 50.274-104.977 50.274c-48.655 0-87.555-27.157-101.13-76.954h287.743v-25.427c0-101.464-58.724-207.943-189.707-207.943zm-2.926 81.304c42.539 0 86.044 22.758 95.774 77.12h-193.39c7.656-38.214 41.09-77.12 97.616-77.12zm423.614 310.878c-119.292 0-200.58-90.864-200.58-197.992 0-110.557 91.866-194.26 200.197-194.26 104.723 0 158.333 73.928 158.333 73.928l-64.423 64.129s-37.315-48.215-94.35-48.215c-63.21 0-106.431 48.357-106.431 105.836 0 60.69 45.975 107.257 105.72 107.257 57.953 0 94.971-48.135 94.971-48.135l65.065 64.091s-53.085 73.361-158.499 73.361h-.003zm192.1-10.29V9.783h92.342v193.733s35.36-48.393 112.276-48.393c96.697 0 152.716 71.88 152.716 163.813v218.148h-92.345V332.893c0-61.763-38.45-87.389-81.05-87.389-48.535 0-91.593 27.622-91.593 92.166v199.414h-92.346z" />
                          </g>
                        </g>
                      </svg>
                      <svg className="w-auto h-8 text-gray-300 fill-current" viewBox="0 0 2500 2500" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" strokeWidth={1} fillRule="evenodd">
                          <g fillRule="nonzero">
                            <path d="M1249.997 2500c333.885 0 647.78-130.03 883.882-366.121C2369.97 1897.782 2500 1583.882 2500 1249.997c0-333.88-130.03-647.779-366.121-883.876C1897.782 130.024 1583.882 0 1249.997 0 560.744 0 0 560.744 0 1249.997c0 333.885 130.024 647.785 366.121 883.882C602.218 2369.97 916.118 2500 1249.997 2500z" />
                            <path
                              d="M43.25 1249.997c0-322.325 125.525-625.367 353.453-853.294C624.63 168.77 927.667 43.249 1249.997 43.249c322.33 0 625.373 125.521 853.295 353.454 227.928 227.927 353.454 530.964 353.454 853.294 0 665.408-541.346 1206.754-1206.749 1206.754-322.33 0-625.367-125.526-853.294-353.454-227.928-227.932-353.454-530.97-353.454-853.3z"
                              fill="#FFF"
                            />
                            <path d="M1249.997 92.983c-638.993 0-1157.014 518.021-1157.014 1157.014 0 638.994 518.021 1157.02 1157.014 1157.02 638.994 0 1157.015-518.026 1157.015-1157.02 0-638.993-518.021-1157.014-1157.015-1157.014z" />
                            <path
                              d="M1249.997 1989.06c-408.167 0-739.062-330.89-739.062-739.063 0-408.167 330.895-739.062 739.062-739.062 408.168 0 739.063 330.895 739.063 739.062 0 408.173-330.89 739.063-739.063 739.063z"
                              fill="#FFF"
                            />
                            <path d="M558.482 1249.997h691.515V558.482c-381.908 0-691.515 309.612-691.515 691.515zm691.515 0v691.52c381.909 0 691.516-309.606 691.516-691.52h-691.516z" />
                            <path
                              d="M706.876 544.846c-24.498-23.811-62.366-30.988-97.918-8.947 6.79-17.597 4.017-35.556.411-45.466-15.315-27.928-20.661-31.424-33.284-42.015-40.863-34.288-83.866-5.015-114.623 31.64L312.857 657.152 546.46 853.174l156.714-186.759c35.808-42.673 41.344-84.98 3.701-121.569zm581.832-84.152l80.226-212.641v212.641h60.972V156.153h-91.61L1254.973 374.2h.863l-83.324-218.047h-91.605v304.541h60.968V248.053l80.23 212.641h66.604zm819.755 126.7l-114.794 162.521 177.963-84.488 47.12 58.19-280.108 135.781-55.3-68.841 110.175-161.097-.652-.808-180.486 74.273-55.842-68.405 191.057-245.756 47.121 58.19-119.643 156.508 182.837-78.495 50.552 62.427z"
                              fill="#FFF"
                            />
                            <path d="M493.934 523.889c10.34-12.327 33.71-11.82 48.74.787 16.525 13.866 16.565 33.525 5.467 46.745l-88.25 105.17-55.214-46.334 89.257-106.368zm157.015 124.066l-93.044 110.882-58.344-48.957 93.796-111.784c10.591-12.623 34.207-16.3 50.135-2.93 18.029 15.121 19.814 38.065 7.457 52.789z" />
                          </g>
                        </g>
                      </svg>
                      <svg className="w-auto h-8 text-gray-300 fill-current" viewBox="0 0 2500 829" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M235.978 764.863L129.39 700.954l-64.695-64.62L0 571.714V0h271.862l64.446 64.41 64.444 64.409h291.49c287.02 0 291.506-.034 292.67-2.205.77-1.443 1.179-23.71 1.179-64.41V0h485.617l.295 64.124.294 64.125 63.84.57 63.84.57.301 33.915c.167 18.653.668 33.914 1.115 33.914.447 0 16.234-15.39 35.081-34.2l34.268-34.199h143.507l64.446-64.41L1943.142 0h270.72v62.205c0 40.699.408 62.966 1.18 64.41 1.15 2.146 3.229 2.204 78.95 2.204h77.767l64.12 64.128L2500 257.076v428.76l-106.874 71.49-106.874 71.49-71.487-.022-71.486-.02-.333-34.108c-.183-18.757-.698-34.47-1.143-34.915-.444-.444-22.818 14.904-49.717 34.107l-48.905 34.915h-129.136v-34.2c0-26.69-.315-34.2-1.432-34.2-.788 0-16.815 15.39-35.618 34.2l-34.185 34.2h-229.167l-34.73-34.744c-19.102-19.11-35.13-34.347-35.618-33.858-.487.487-3.7 14.968-7.137 32.179-3.438 17.211-6.526 32.447-6.863 33.857l-.61 2.565h-200.04l-34.185-34.2c-18.802-18.81-34.83-34.2-35.618-34.2-1.117 0-1.432 7.511-1.432 34.2v34.2h-100.32c-55.175 0-100.318-.151-100.318-.338 0-1.795-13.816-68.576-14.285-69.044-.342-.344-16.381 15.128-35.641 34.379l-35.017 35.004H599.65l-34.216-13.68c-18.818-7.523-34.725-13.68-35.347-13.68-.686 0-1.132 5.386-1.132 13.68v13.68H342.567l-106.589-63.91zm106.59-200.568v-78.089l-63.84-.57-63.84-.57V343.707l63.84-.57 63.84-.57V186.39l-63.84-.57-63.84-.57-.57-63.84-.57-63.84H57.57l-.288 242.786-.288 242.785 49.866 49.914 49.867 49.915 92.92-.292 92.92-.292v-78.09zm593.67 28.751l49.861-49.909-.288-178.374-.289-178.374-78.37-.293-78.37-.293-.29 149.631-.289 149.632h-55.86l-.57-149.339-.57-149.338-78.369-.293-78.37-.293-.29 149.631-.289 149.632h-55.86l-.57-149.339-.57-149.338-78.374-.293-78.374-.293v457.152h486.241l49.86-49.909zm263.602-178.66V186.39l-78.374-.293-78.374-.293V642.97l78.374-.293 78.374-.293V414.387zm342.568 149.919v-78.65l-63.555-.295-63.554-.294V343.707l63.554-.294 63.555-.295v-157.28l-63.555-.295-63.554-.294-.57-63.84-.57-63.84h-156.18l-.286 242.81-.289 242.812 49.873 49.882 49.872 49.882h185.259v-78.65zm400.136-.012v-78.66h-92.217c-83.038 0-92.285-.178-92.91-1.801-.903-2.357-.903-136.537 0-138.894.625-1.623 9.872-1.803 92.91-1.803h92.217V185.816h-243.358l-49.32 49.32-49.319 49.32v259.859l49.32 49.32 49.32 49.318h243.357v-78.66zm214.6-70.964l.289-149.624h127.679l.57 149.339.57 149.339h156.178l.289-178.375.288-178.374-49.86-49.909-49.86-49.909h-91.933c-75.52 0-92.159-.273-93.202-1.53-.89-1.074-1.357-20.206-1.564-64.124l-.295-62.595h-156.179l-.292 291.268c-.16 160.197-.049 291.91.249 292.693.426 1.12 17.214 1.425 78.662 1.425h78.122l.288-149.624zM1199.84 92.907v-35.34h-156.178l-.302 34.189c-.167 18.801-.054 34.837.251 35.631.443 1.152 16.374 1.386 78.392 1.153l77.837-.293v-35.34z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Image */}
              <div className="relative w-full mt-20 lg:w-1/2 lg:mt-0">
                <img
                  src="https://cdn.devdojo.com/images/december2020/dashboard-01.png"
                  className="relative z-10 p-0 mt-10 transform shadow-2xl rounded-xl lg:scale-110"
                />
                <div className="absolute top-0 right-0 w-full h-full mt-4 -mr-5 transform scale-125 rotate-45">
                  <svg
                    className="absolute top-0 w-full h-full transform fill-current lg:scale-x-150 text-purple-50"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43.5,-76.5C55.9,-68.2,65.2,-55.6,71.9,-42.1C78.5,-28.6,82.7,-14.3,81.3,-0.8C79.8,12.7,72.8,25.3,64.7,36.3C56.5,47.2,47.2,56.3,36.2,63.3C25.2,70.2,12.6,75,-1.1,76.9C-14.8,78.9,-29.7,78,-43.7,72.8C-57.7,67.6,-70.9,58.1,-79.3,45.2C-87.7,32.4,-91.2,16.2,-90.7,0.3C-90.3,-15.7,-85.9,-31.4,-76.4,-42.3C-66.9,-53.1,-52.3,-59.2,-38.7,-66.9C-25.1,-74.5,-12.6,-83.7,1.5,-86.3C15.6,-88.8,31.1,-84.8,43.5,-76.5Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex items-center justify-center py-16 bg-gray-100 min-w-screen">
          <div className="max-w-6xl px-12 mx-auto bg-gray-100 md:px-16 xl:px-10">
            <div className="flex flex-col items-center lg:flex-row">
              <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
                <p className="mb-2 text-base font-medium tracking-tight text-indigo-500 uppercase">Our customers love our product</p>
                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                  Testimonials
                </h2>
                <p className="my-6 text-lg text-gray-600">
                  Don't just take our word for it, read from our extensive list of case studies and customer testimonials.
                </p>
                <a
                  href="#_"
                  className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10"
                >
                  View Case Studies
                </a>
              </div>
              <div className="w-full lg:w-1/2">
                <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-white rounded-lg shadow">
                  <div className="flex flex-col pr-8">
                    <div className="relative pl-12">
                      <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                        <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                      </svg>
                      <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                        Such an amazing person that Sam is. She did the best job ever.{" "}
                      </p>
                    </div>
                    <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm ">
                      Jane Cooper
                      <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span>
                    </h3>
                  </div>
                  <img
                    className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 wl:h-24"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                    alt
                  />
                </blockquote>
                <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
                  <div className="flex flex-col pr-10">
                    <div className="relative pl-12">
                      <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                        <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                      </svg>
                      <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                        I can't express enough, how amazing this service has been for my company.
                      </p>
                    </div>
                    <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm ">
                      John Doe
                      <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span>
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500 truncate" />
                  </div>
                  <img
                    className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&aauto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                    alt
                  />
                </blockquote>
                <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
                  <div className="flex flex-col pr-10">
                    <div className="relative pl-12">
                      <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                        <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                      </svg>
                      <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                        I can't express enough, how amazing this service has been for my company.
                      </p>
                    </div>
                    <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm ">
                      John Smith
                      <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span>
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500 truncate" />
                  </div>
                  <img
                    className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                    src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rrb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&aauto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                    alt
                  />
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl px-8 mx-auto lg:px-4">
            <div className="mb-16 text-center">
              <h2 className="max-w-lg mx-auto mb-4 text-5xl font-bold text-gray-700 font-heading">
                <span>Simple</span>
                <span className="relative pl-2 mr-2 text-blue-600">
                  <span className="relative z-10">Pricing</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 transform -skew-x-6 bg-blue-100"></span>
                </span>
                <span>Plans</span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-500">Pricing for businesses of all sizes. No commitment. Cancel Anytime.</p>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/3">
                <div className="px-8 pt-12 pb-8 text-center bg-white rounded-lg shadow">
                  <img className="h-24 mx-auto mb-8" src="https://cdn.devdojo.com/tails/icons/acorn.png" alt="starter plan image" />
                  <h3 className="mb-4 text-5xl font-bold font-heading">Starter</h3>
                  <span className="flex items-center justify-center text-4xl font-bold text-gray-900 font-heading">
                    $15<span className="ml-1 text-xs">/ mo</span>
                  </span>
                  <p className="mt-3 mb-8 text-sm text-gray-400">This plan is ideal for startups and small companies or organizations</p>
                  <div className="flex flex-col items-center mb-8">
                    <ul className="text-gray-400">
                      <li className="flex mb-3">
                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>3 Projects</span>
                      </li>
                      <li className="flex mb-3">
                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>1 Admin User</span>
                      </li>
                      <li className="flex mb-3">
                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Unlimited Domains</span>
                      </li>
                      <li className="flex">
                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>10 GB Storage</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      className="block px-6 py-5 mb-4 text-base font-semibold leading-none text-center text-white bg-blue-600 rounded-lg sm:mb-0 hover:bg-blue-700"
                      href="#"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/3">
                <div className="px-8 pt-8 pb-8 text-center text-white transform scale-100 rounded-lg shadow-2xl lg:scale-105 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600">
                  <img className="h-24 mx-auto mb-8" src="https://cdn.devdojo.com/tails/icons/cube-b.png" alt="basic plan image" />
                  <h3 className="mb-4 text-5xl font-bold font-heading">Basic</h3>
                  <span className="flex items-center justify-center text-4xl font-bold text-white font-heading">
                    $25<span className="ml-1 text-xs">/ mo</span>
                  </span>
                  <p className="mt-4 mb-8 text-sm">This plan is ideal for small to medium sized businesses and organizations</p>
                  <div className="flex flex-col items-center mb-8">
                    <ul>
                      <li className="flex items-center mb-3">
                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>6 Projects</span>
                      </li>
                      <li className="flex items-center mb-3">
                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>4 Admin Users</span>
                      </li>
                      <li className="flex items-center mb-3">
                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Unlimited Domains</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>35 GB Storage</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      className="block px-6 py-5 mb-4 text-base font-semibold leading-none text-center text-blue-600 rounded-lg bg-purple-50 hover:bg-white sm:mb-0 hover:text-blue-700"
                      href="#"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-3 mb-6 lg:w-1/3">
                <div className="px-8 pt-8 pb-8 text-center bg-white rounded-lg shadow">
                  <img className="h-24 mx-auto mb-8" src="https://cdn.devdojo.com/tails/icons/bucket-a.png" alt="plus plan image" />
                  <h3 className="mb-4 text-5xl font-bold font-heading">Plus</h3>
                  <span className="flex items-center justify-center text-4xl font-bold text-gray-900 font-heading">
                    $50<span className="ml-1 text-xs">/ mo</span>
                  </span>
                  <p className="mt-4 mb-8 text-sm text-gray-400">This plan is perfect for medium to larger sized companies and organizations</p>
                  <div className="flex flex-col items-center mb-8">
                    <ul className="text-gray-400">
                      <li className="flex mb-3">
                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Unlimited Projects</span>
                      </li>
                      <li className="flex mb-3">
                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Ulimited Users</span>
                      </li>
                      <li className="flex mb-3">
                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Unlimited Domains</span>
                      </li>
                      <li className="flex">
                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>50 GB Storage</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      className="block px-6 py-5 mb-4 text-base font-semibold leading-none text-center text-white bg-blue-600 rounded-lg sm:mb-0 hover:bg-blue-700"
                      href="#"
                    >
                      Reserve an appointment today.{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="text-gray-700 bg-white body-font">
          <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
            <a href="#_" className="text-xl font-black leading-none text-gray-900 select-none logo">
              Vi Body Spa<span className="text-indigo-600"></span>
            </a>
            <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">© 2020 tails - Tailwindcss Page Builder</p>
            <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
