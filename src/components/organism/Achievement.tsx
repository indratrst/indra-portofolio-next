import React, { useEffect, useMemo, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SvgArrowLeft from "../molecules/SvgArrowLeft";
import SvgArrowRight from "../molecules/SvgArrowRight";
import { acheivementData } from "@/data/dataAcheivement";
import { AcheivementType } from "@/data/type";
import Image from "next/image";

interface acheivementProps {
  acheivements: AcheivementType[];
}

const Achievement: React.FC<acheivementProps> = () => {
  const [offset, setOffset] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };
  useEffect(() => {
    const cards = document.querySelectorAll(".card-item");
    let max = 0;
    cards.forEach((c) => {
      if (c.clientHeight > max) max = c.clientHeight;
    });
    cards.forEach((c) => ((c as HTMLElement).style.height = max + "px"));
  }, []);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <section
        id="achievement"
        className="relative mt-1 dark:mt-0 pt-12 md:pt-36 pb-9 bg-white dark:bg-basic overflow-hidden shadow-lg"
      >
        <div
          className="absolute inset-0 bg-right bg-no-repeat bg-[length:400px] lg:bg-[length:600px] bg-fixed "
          style={{
            backgroundImage: "url('/champion.svg')",
            transform: `translateY(${offset * 0.4 - 1190}px)`, // parallax speed 0.3x
          }}
        ></div>
        <div className="absolute inset-0 bg-basic/50 dark:bg-slate-800/90"></div>
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-1 lg:w-1/2" data-aos="fade-up">
              <h4 className="font-bold  text-primary text-lg mb-3">
                Achievement
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl dark:text-light">
                My Achievement
              </h2>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
                Beberapa sertifikat yang telah saya dapatkan setelah
                menyelesaikan kelas dan event
              </p>
            </div>
            <div className="w-full lg:pt-1" data-aos="fade-up">
              <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:items-stretch">
                <div className="lg:col-span-2 lg:py-2">
                  <div className="flex flex-row mb-4 items-start py-4">
                    <div className="swiper-button-prev px-4">
                      <button className="bg-slate-200/80 hover:bg-slate-400 text-black p-2  rounded-full shadow transition">
                        <SvgArrowLeft />
                      </button>
                    </div>
                    <div className="swiper-button-next px-4">
                      <button className="bg-slate-200/80 hover:bg-slate-400 text-black p-2 rounded-full shadow transition">
                        <SvgArrowRight />
                      </button>
                    </div>
                  </div>

                  <Swiper
                    breakpoints={{
                      320: { slidesPerView: 1, spaceBetween: 10 },
                      640: { slidesPerView: 2, spaceBetween: 20 },
                      768: { slidesPerView: 2, spaceBetween: 40 },
                      1024: { slidesPerView: 3, spaceBetween: 50 },
                    }}
                    slidesPerView={1}
                    spaceBetween={10}
                    direction="horizontal"
                    navigation={{
                      prevEl: ".swiper-button-prev",
                      nextEl: ".swiper-button-next",
                    }}
                    pagination={{
                      clickable: true,
                      el: ".custom-swiper-pagination",
                    }}
                    modules={[Pagination, Navigation]}
                    className="w-full flex items-stretch"
                  >
                    <div className="custom-swiper-pagination flex mt-8 gap-1 lg:gap-4 justify-center" />

                    {acheivementData.map((item, index) => (
                      <SwiperSlide key={index} className="h-full">
                        <div className="relative m-5 h-full">
                          <span className="absolute -z-10 w-full h-full inset-1 bg-sand dark:bg-reds rounded-xl"></span>
                          <button className="absolute py-1 z-10 px-3 -left-4 -top-2 -rotate-[10deg] black_border bg-sand dark:bg-reds text-white font-bold">
                            {item.source}
                          </button>

                          <div className="p-6 border border-black dark:border-slate-500 sand_border bg-white dark:bg-dark rounded-xl z-20 h-full flex flex-col card-item">
                            <Image
                              src={item.image}
                              alt="sertifikat achievement"
                              onClick={() => openModal(item.image)}
                              className="aspect-auto w-full rounded object-cover"
                            />
                            <div className="text-dark dark:text-light font-medium text-md py-3 flex-grow">
                              {item.title}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          {isModalOpen && selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
              onClick={closeModal}
            >
              <div
                className="relative bg-transparent"
                onClick={(e) => e.stopPropagation()} // klik gambar tidak nutup modal
              >
                <button
                  className="absolute -top-14 -right-12 text-white text-3xl font-bold"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <Image
                  src={selectedImage}
                  alt="Achievement"
                  className="max-w-[70vw] lg:max-w-[100vw] max-h-[50vh] rounded-lg shadow-lg object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Achievement;
