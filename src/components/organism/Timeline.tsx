"use client";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SvgArrowLeft from "../molecules/SvgArrowLeft";
// import SvgArrowRight from "../molecules/SvgArrowRight";

const Portfolio = () => {
  return (
    <section
      id="timeline"
      className="pt-36 pb-32 bg-white dark:bg-basic relative z-10 overflow-hidden shadow-md mt-2 dark:mt-0 "
    >
      {/* <img
        src="/timeline-1.png"
        alt="pic hero"
        className="absolute inset-0 -z-10 -top-10 lg:-left-[170px]  -ms-[100px] md:-ms-[300px] lg:-ms-[500px] mt-[6em] scale-[1.2] lg:-mt-96 transform lg:scale-[.7] opacity-30 dark:opacity-95"
      /> */}
      <img
        src="/timeline-2.png"
        alt="pic hero"
        className="absolute ms-[120px] lg:ms-[700px] inset-0 -z-10 scale-[.9] mt-[80em] md:mt-[30em] lg:mt-12 transform lg:scale-[.4] opacity-10 dark:opacity-95"
      />
      <img
        src="/timeline-3.png"
        alt="pic hero"
        className="absolute inset-0 -z-10 -top-10 lg:-left-[250px] -ms-[120px] lg:-ms-[500px] mt-[161em] scale-[.9] lg:mt-[500px] transform lg:scale-[.3]  rotate-12 opacity-10 dark:opacity-95"
      />
      <div className="absolute z-0 inset-0 bg-basic/50 dark:bg-slate-800/90 "></div>

      <div className="container relative z-10">
        <img
          src="/timeline-1.png"
          alt="pic hero"
          className="absolute inset-0 -z-10 -top-10 lg:-left-[170px]  -ms-[100px] md:-ms-[300px] lg:-ms-[500px] mt-[6em] scale-[1.2] lg:-mt-96 transform lg:scale-[.7] opacity-10 dark:opacity-95"
        />
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Timeline
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-3xl lg:text-4xl dark:text-white">
              Front End Developer
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
                    menggunakan HTML dan CSS.. Menerapkan struktur website yang
                    baik menggunakan standar semantic HTML.
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
                    yang interaktif serta memiliki fitur penyimpanan menggunakan
                    Web Storage.
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

            <div className="pt-9 mx-auto text-center mb-16  ">
              {/* <!-- <h4 className="font-semibold text-lg text-primary mb-2">Timeline</h4> --> */}
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-3xl lg:text-4xl dark:text-white">
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
                    menjadi seorang Web Developer/Back-end developer menggunakan
                    teknologi Node.js menggunakan standar kompetensi industri
                    yang divalidasi oleh AWS.Di akhir kelas, siswa dapat
                    menguasai dasar JavaScript untuk pengembangan aplikasi web
                    menggunakan Node.Js.
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
                    membuat RESTful API sederhana secara mandiri untuk mendukung
                    fungsionalitas suatu aplikasi.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="pt-9 mx-auto text-center mb-16">
          {/* <!-- <h4 className="font-semibold text-lg text-primary mb-2">Timeline</h4> --> */}
          <h2 className="font-bold text-dark text-3xl mb-4 sm:text-3xl lg:text-4xl dark:text-white">
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

        <ol className="items-baseline ps-14 p-3 sm:flex ">
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
                {/* <a
                  className="text-blue-500"
                  href="https://github.com/indratrst/Searcher-Items"
                >
                  (Searcher-Items)
                </a> */}
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
                Pada awal level ini peserta dituntut untuk bisa membuat aplikasi
                blog sederhana front end menggunakan React Js, Backend - Api
                menggunakan Express Js dan database menggunakan Mongo DB. Dan
                diakhir kelas ini peserta diwajibkan untuk membuat aplikasi
                Booking Tiket Bioskop menggunakan framework React Js , Laravel ,
                Mysql dan wajib di presentasikan di depan System Analyst{" "}
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Portfolio;
