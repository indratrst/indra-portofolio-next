"use client";
export default function Timeline() {
  return (
    <section id="timeline" className="pt-36 pb-32 bg-slate-800 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className=" mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Experience
            </h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Works Experience
            </h2>
            <p className="font-medium text-base text-secondary md:text-lg ">
              Perjalanan karir yang dilalui setelah beberapa tahun kebelakang.
            </p>
          </div>

          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2021 - 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-200 dark:text-white">
                Crew Store - Mixue Raya Kopo
              </h3>
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>Membuat jadwal kerja karyawan & General cleaning</li>
                <li>Melakukan perawatan dan pengecekan mesin</li>
                <li>Mengoperasikan mesin kasir dan mesin edc</li>
                <li>Membuat produk dengan baik dengan mengikuti sop</li>
              </ul>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                -2021
              </time>
              <h3 className="text-lg font-semibold text-gray-200 dark:text-white">
                Admin - PT Karya Lima Utama
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
              <ul className="w-full space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>
                  Penginputan data barang ke sistem berdasarkan data dilapangan
                </li>
                <li>
                  Membuat laporan harian dan mingguan pelaksanaan pekerjaan yang
                  antara lain adalah membuat laporan harian dan mingguan
                  penggunaan bahan yang digunakan dilapangan
                </li>
                <li>
                  Membuat laporan kemajuan pekerjaan (progress) pelaksanaan
                  pekerjaan
                </li>
              </ul>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2019 - 2020
              </time>
              <h3 className="text-lg font-semibold text-gray-200  dark:text-white">
                Crew Store - Liu liu
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
              <ul className="w-full space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>Membuat minuman sesuai standard yang telah ditentukan</li>
                <li>
                  Melakukan pengontrolan barang dan melakukan pencatatan sebagai
                  data rekapan.
                </li>
                <li>Menjaga kebersihan area kerja sesuai sop</li>
              </ul>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2018
              </time>
              <h3 className="text-lg font-semibold text-gray-200  dark:text-white">
                Web Developer ( Intern ) - Pt Softindo Computech
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
              <ul className="w-full space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>
                  Membuat Geographic Information System menggunakan google api
                  dan mengambil data dari json menggunakan framework laravel
                </li>
                <li>Membuat component element page website</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
