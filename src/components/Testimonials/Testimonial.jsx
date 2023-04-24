import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Thank you so much for your hard work and dedication to this project. Your programming skills have been invaluable, and I couldn't have done this without you.",
    },
    {
      img: profilePic2,
      review:
        "I really appreciate your attention to detail and your ability to solve complex problems. Your programming expertise has made a huge difference in the success of this project.",
    },
    {
      img: profilePic3,
      review:
        "Your programming skills are simply amazing! It's been a pleasure working with you and watching you bring my ideas to life.",
    },
    {
      img: profilePic4,
      review:
        "Your programming skills have not only saved me time and effort, but also produced high-quality work that exceeded my expectations. Your dedication and professionalism are greatly appreciated, and I am lucky to have you on my team.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
