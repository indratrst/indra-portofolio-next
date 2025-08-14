"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SvgArrowLeft from "../molecules/SvgArrowLeft";
import SvgArrowRight from "../molecules/SvgArrowRight";

const Portfolio = () => {
  return (
    // <section
    //   id="portfolio"
    //   className="pt-36 pb-9 bg-slate-100 dark:bg-slate-800"
    // >
    //   <div className="container">
    //     <div className="w-full px-4">
    //       <div className="max-w-xl mx-auto text-center mb-16">
    //         <h4 className="font-semibold text-lg text-primary mb-2">
    //           Achievement
    //         </h4>
    //         <h2 className="font-bold text-dark text-3xl  sm:text-4xl lg:text-5xl dark:text-light">
    //           My Achievement
    //         </h2>
    //         <p className="font-medium text-base text-secondary md:text-lg ">
    //           Beberapa sertifikat yang telah saya dapatkan setelah menyelesaikan
    //           kelas dan event pada beberapa platform
    //         </p>
    //       </div>
    //     </div>

    // {/* <div className="slider relative h-[50vh] scroll-smooth transition-all ease-in-out overflow-y-hidden overflow-x-auto md:overflow-hidden">
    //   <div className="slider-inner absolute w-96 h-full flex pointer-events-none">
    //     <div className="achievement-card">
    //       <div className="rounded-md shadow-md overflow-hidden">
    //         <img
    //           src="/sertifikat/jago-lev2.png"
    //           alt="portfolio1"
    //           width="w-full"
    //         />
    //       </div>
    //       <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-light">
    //         Bootcamp Intensif Level 2 Development With Framework [React
    //         Js,Laravel,Mysql]
    //       </h3>
    //       <p className="font-medium text-base text-secondary"></p>
    //     </div>
    //     <div className="achievement-card">
    //       <div className="rounded-md shadow-md overflow-hidden">
    //         <img
    //           src="/sertifikat/jago-lev1.png"
    //           alt="portfolio1"
    //           width="w-full"
    //         />
    //       </div>
    //       <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-light">
    //         Bootcamp Intensif Level 1 Fundamental Programming
    //       </h3>
    //       <p className="font-medium text-base text-secondary"></p>
    //     </div>
    //     <div className="achievement-card">
    //       <div className="rounded-md shadow-md overflow-hidden">
    //         <img
    //           src="/sertifikat/frontend-expert.png"
    //           alt="portfolio1"
    //           width="w-full"
    //         />
    //       </div>
    //       <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-light">
    //         Kelas Front End Web Developer [Expert]
    //       </h3>
    //       <p className="font-medium text-base text-secondary"></p>
    //     </div>
    //     <div className="achievement-card">
    //       <div className="rounded-md shadow-md overflow-hidden">
    //         <img
    //           src="/sertifikat/fundamental-fe.png"
    //           alt="portfolio1"
    //           width="w-full"
    //         />
    //       </div>
    //       <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-light">
    //         Kelas Front End Web Developer [Begginer - Intermediate]
    //       </h3>
    //     </div>
    //     <div className="achievement-card">
    //       <div className="rounded-md shadow-md overflow-hidden">
    //         <img
    //           src="/sertifikat/frontend-pemula.png"
    //           alt="portfolio1"
    //           width="w-full"
    //         />
    //       </div>
    //       <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-light">
    //         Kelas Front End Web Developer [Beginner]
    //       </h3>
    //     </div>
    //     <div className="achievement-card">
    //       <div className="rounded-md shadow-md overflow-hidden">
    //         <img
    //           src="/sertifikat/dasar-web.png"
    //           alt="portfolio1"
    //           width="w-full"
    //         />
    //       </div>
    //       <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-light">
    //         Kelas Front End Web Developer [Basic - Beginner]
    //       </h3>
    //     </div>
    //     <div className="achievement-card">
    //       <div className="rounded-md shadow-md overflow-hidden">
    //         <img
    //           src="/sertifikat/aws.png"
    //           alt="portfolio1"
    //           width="w-full"
    //         />
    //       </div>
    //       <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-light">
    //         Kelas Dasar Aws Cloud
    //       </h3>
    //     </div>
    //     <div className="achievement-card">
    //       <div className="rounded-md shadow-md overflow-hidden">
    //         <img
    //           src="/sertifikat/backend-pemula.png"
    //           alt="portfolio1"
    //           width="w-full"
    //         />
    //       </div>
    //       <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-light">
    //         Kelas Backend Pemula
    //       </h3>
    //     </div>
    //     <div className="achievement-card">
    //       <div className="rounded-md shadow-md overflow-hidden">
    //         <img
    //           src="/sertifikat/dasar-js.png"
    //           alt="portfolio1"
    //           width="w-full"
    //         />
    //       </div>
    //       <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-light">
    //         Kelas Dasar Javascript
    //       </h3>
    //     </div>
    //     <div className="achievement-card">
    //       <div className="rounded-md shadow-md overflow-hidden">
    //         <img
    //           src="/sertifikat/bdd.png"
    //           alt="portfolio1"
    //           width="w-full"
    //         />
    //       </div>
    //       <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-light">
    //         Event Baparekraf Developer Day 2023
    //       </h3>
    //     </div>
    //     <div className="achievement-card">
    //       <div className="rounded-md shadow-md overflow-hidden">
    //         <img
    //           src="/sertifikat/dicoding-developer-conference-2023-certificate_page-0001.jpg"
    //           alt="portfolio1"
    //           width="w-full"
    //         />
    //       </div>
    //       <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-light">
    //         Event Dicoding Developer Conference 2023
    //       </h3>
    //     </div>
    //     <div className="achievement-card">
    //       <div className="rounded-md shadow-md overflow-hidden">
    //         <img
    //           src="/sertifikat/niagahoster.png"
    //           alt="portfolio1"
    //           width="w-full"
    //         />
    //       </div>
    //       <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-light">
    //         Webinar Fundamental Front End Web Development
    //       </h3>
    //     </div>
    //     <div className="achievement-card">
    //       <div className="rounded-md shadow-md overflow-hidden">
    //         <img
    //           src="/sertifikat/english-2020.png"
    //           alt="portfolio1"
    //           width="w-full"
    //         />
    //       </div>
    //       <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-light">
    //         Kelas Belajar Bahasa Inggris - Sekolah Pintar
    //       </h3>
    //     </div>
    //   </div>
    // </div> */}

    <>
      {/* <section id="portfolio" className="pt-36 pb-9 bg-white dark:bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16 grid gap-y-2">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Achievement
              </h4>
              <h2 className="font-bold text-dark text-3xl  sm:text-4xl lg:text-5xl dark:text-light">
                My Achievement
              </h2>
              <p className="font-medium text-base text-secondary md:text-lg ">
                Beberapa sertifikat yang telah saya dapatkan setelah
                menyelesaikan kelas dan event pada beberapa platform
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full -translate-x-1/2 transform left-1/2">
          <div className="flex flex-row-reverse items-center justify-around w-[100%] mx-auto text-red-600">
            <div className="swiper-button-next px-8">
              <button className="bg-slate-200/80 hover:bg-slate-400 text-black p-2 rounded-full shadow transition">
                <SvgArrowRight />
              </button>
            </div>

            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              slidesPerView={1}
              spaceBetween={10}
              direction="horizontal"
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              pagination={true}
              modules={[Pagination, Navigation]}
              className="w-full flex justify-center mt-4"
            >
              <SwiperSlide>
                <img
                  src="/sertifikat/niagahoster.png"
                  alt="Illustration of a person carrying ideas for a professional website design"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/sertifikat/english-2020.png" alt="portfolio1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/sertifikat/english-2020.png" alt="portfolio1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/sertifikat/english-2020.png" alt="portfolio1" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/sertifikat/english-2020.png"
                  alt="portfolio1"
                  width="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/sertifikat/english-2020.png"
                  alt="portfolio1"
                  width="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/sertifikat/english-2020.png"
                  alt="portfolio1"
                  width="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/sertifikat/english-2020.png"
                  alt="portfolio1"
                  width="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/sertifikat/english-2020.png"
                  alt="portfolio1"
                  width="w-full"
                />
              </SwiperSlide>
            </Swiper>
            <div className="swiper-button-prev px-8">
              <button className="bg-slate-200/80 hover:bg-slate-400 text-black p-2 rounded-full shadow transition">
                <SvgArrowLeft />
              </button>
            </div>
          </div>
        </div>
      </section> */}
      {/* // <!-- Start Timeline --> */}
      <section id="" className="pt-36 pb-32 bg-[#f1f5f9] dark:bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <div className=" mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Timeline
              </h4>
              <h2 className="font-bold text-slate-500 text-3xl mb-4 sm:text-3xl lg:text-4xl dark:text-white">
                Front End Web Dev
              </h2>
              <p className="font-medium text-base text-secondary md:text-lg">
                Kelas Front End ini saya ikuti dari beasiswa yang diadakan{" "}
                <span className="text-navy font-bold dark:text-white">
                  {" "}
                  Dicoding{" "}
                </span>{" "}
                berkolaborasi dengan{" "}
                <a
                  href="https://idcamp.ioh.co.id/"
                  className="text-orange-400 font-semibold"
                >
                  Indosat Ooredoo (IDCamp)
                </a>
              </p>
            </div>

            <div className="w-full px-4">
              <ol className="sm:flex p-2 items-baseline md:overflow-x-scroll pb-2">
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div
                      className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-blue-400
                   dark:bg-blue-900 sm:ring-8 dark:ring-blue-300 shrink-0"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-3 h-3 text-blue-800 dark:text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8 md:w-96">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Belajar Dasar Pemrograman Web
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Juni - Juli, 2022
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Di akhir pelatihan, peserta dapat Membangun website
                      menggunakan HTML dan CSS.. Menerapkan struktur website
                      yang baik menggunakan standar semantic HTML.
                    </p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div
                      className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-blue-400
                   dark:bg-blue-900 sm:ring-8 dark:ring-blue-300 shrink-0"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-3 h-3 text-blue-800 dark:text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8 md:w-96">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Belajar Membuat Front End Pemula
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Juli - Agustus, 2022
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Di akhir kelas, siswa dapat membuat aplikasi front-end web
                      yang interaktif serta memiliki fitur penyimpanan
                      menggunakan Web Storage.
                    </p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div
                      className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-blue-400
                   dark:bg-blue-900 sm:ring-8 dark:ring-blue-300 shrink-0"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-3 h-3 text-blue-800 dark:text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8 md:w-96">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Belajar Fundamental Front End Development
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      September - Oktober, 2022
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Di akhir kelas, siswa dapat membuat aplikasi front-end web
                      dengan kode JavaScript standar ES6, menerapkan Web
                      Components, Webpack, dan menampilkan data dinamis dari Web
                      API menggunakan AJAX.
                    </p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div
                      className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-blue-400
                   dark:bg-blue-900 sm:ring-8 dark:ring-blue-300 shrink-0"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-3 h-3 text-blue-800 dark:text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8 md:w-96">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Menjadi Expert Front End Development
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      November 2022 - January, 2023
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Di akhir kelas, siswa dapat membuat aplikasi front-end web
                      yang responsif, memiliki aksesibilitas yang baik, mudah
                      di-maintenance, memiliki sifat native, dapat diuji, dan
                      memiliki performa yang baik.
                    </p>
                  </div>
                </li>
              </ol>

              <div className="pt-9 mx-auto text-center mb-16">
                {/* <!-- <h4 className="font-semibold text-lg text-primary mb-2">Timeline</h4> --> */}
                <h2 className="font-bold text-slate-500 text-3xl mb-4 sm:text-3xl lg:text-4xl dark:text-white">
                  Back End Developer
                </h2>
                <p className="font-medium text-base text-secondary md:text-lg ">
                  Kelas Back End ini didapatkan dari beasiswa yang diadakan{" "}
                  <span className="text-navy font-bold dark:text-white">
                    {" "}
                    Dicoding{" "}
                  </span>{" "}
                  berkolaborasi dengan
                  <a
                    href="https://www.dbs.com/spark/index/id_id/site/codingcamp/index.html"
                    className="text-red-500 font-bold"
                  >
                    <span className="text-navy dark:text-white">DBS</span>{" "}
                    Foundation
                  </a>
                </p>
              </div>
              <ol className="items-baseline p-3 sm:flex overflow-x-scroll">
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div
                      className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-blue-400
                   dark:bg-blue-900 sm:ring-8 dark:ring-blue-300 shrink-0"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-3 h-3 text-blue-800 dark:text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8 md:w-96">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Belajar Dasar Amazon Web Service Cloud
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Januari, 2023
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Kelas ditujukan bagi pemula yang ingin memulai karirnya di
                      bidang cloud computing dengan mengacu pada standar
                      kompetensi internasional milik AWS. Di akhir kelas, siswa
                      dapat memahami AWS Cloud dengan segala jenis layanan,
                      infrastruktur global, hingga harganya.
                    </p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div
                      className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-blue-400
                   dark:bg-blue-900 sm:ring-8 dark:ring-blue-300 shrink-0"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-3 h-3 text-blue-800 dark:text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8 md:w-96">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Belajar Dasar Pemrograman Javascript
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Februari, 2023
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Kelas ini ditujukan untuk individu yang ingin melangkah
                      menjadi seorang Web Developer/Back-end developer
                      menggunakan teknologi Node.js menggunakan standar
                      kompetensi industri yang divalidasi oleh AWS.Di akhir
                      kelas, siswa dapat menguasai dasar JavaScript untuk
                      pengembangan aplikasi web menggunakan Node.Js.
                    </p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div
                      className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-blue-400
                   dark:bg-blue-900 sm:ring-8 dark:ring-blue-300 shrink-0"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-3 h-3 text-blue-800 dark:text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8 md:w-96">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Belajar Membuat Aplikasi Backend End Pemula
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Februari - Maret, 2023
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Kelas ini didesain untuk siswa yang sudah paham dengan
                      bahasa pemrograman JavaScript.Di akhir kelas, siswa dapat
                      membuat RESTful API sederhana secara mandiri untuk
                      mendukung fungsionalitas suatu aplikasi.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="pt-9 mx-auto text-center mb-16">
            {/* <!-- <h4 className="font-semibold text-lg text-primary mb-2">Timeline</h4> --> */}
            <h2 className="font-bold text-slate-500 text-3xl mb-4 sm:text-3xl lg:text-4xl dark:text-white">
              Full stack Web Developer
            </h2>
            <p className="font-medium text-base text-secondary md:text-lg ">
              Bootcamp intensif ini diadakan oleh{" "}
              <span className="text-navy font-bold dark:text-white">
                Pt Jagoo<span className="text-red-500 font-bold ">IT</span>
                Talenta Indonesia
              </span>{" "}
            </p>
          </div>
          <ol className="items-baseline p-3 sm:flex overflow-x-scroll">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div
                  className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-blue-400
             dark:bg-blue-900 sm:ring-8 dark:ring-blue-300 shrink-0"
                >
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-800 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pr-8 md:w-96">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Fundamental Programming
                  <br /> [Level 1]
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  April, 2023
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Pada level ini peserta bootcamp belajar secara online yang
                  dibimbing oleh tim dari Pt Jagoo IT. Mempelajari dasar
                  Html,Css,Javascript,Bootstrap,Database dan sedikit pengenalan
                  React Js yang diakhiri dengan tugas Search & Sort data
                  menggunakan React js:
                  <a
                    className="text-blue-500"
                    href="https://github.com/indratrst/Searcher-Items"
                  >
                    (Searcher-Items)
                  </a>
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div
                  className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-blue-400
             dark:bg-blue-900 sm:ring-8 dark:ring-blue-300 shrink-0"
                >
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-800 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pr-8 md:w-96">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Development With Framework [Level 2]
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Mei, 2023
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Pada awal level ini peserta dituntut untuk bisa membuat
                  aplikasi blog sederhana front end menggunakan React Js,
                  Backend - Api menggunakan Express Js dan database menggunakan
                  Mongo DB. Dan diakhir kelas ini peserta diwajibkan untuk
                  membuat aplikasi Booking Tiket Bioskop menggunakan framework
                  React Js , Laravel , Mysql dan wajib di presentasikan di depan
                  System Analyst{" "}
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>

    // </div>
    // </section>
  );
};

export default Portfolio;
