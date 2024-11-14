import { teams } from "./teams";
import * as S from "./styles";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Ig from "../../assets/ig.svg";
import Gh from "../../assets/gh.svg";
import Link from "../../assets/link.svg";
import { useEffect, useState } from "react";

export function Card() {
  const [slidePerView, setSlidePerView] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 490) {
        setSlidePerView(1);
      } else {
        if (window.innerWidth < 676) {
          setSlidePerView(2);
        } else {
          if (window.innerWidth < 906) {
            setSlidePerView(3);
          } else {
            if (window.innerWidth < 1135) {
              setSlidePerView(4);
            } else {
              if (window.innerWidth <= 1920) {
                setSlidePerView(4);
              } else {
                setSlidePerView(4);
              }
            }
          }
        }
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Swiper modules={[Navigation]} slidesPerView={slidePerView} navigation>
        {teams.map((item) => (
          <SwiperSlide key={item.id}>
            <S.Container>
              <img src={item.img} alt="" />
              <h1 className="team-dev">{item.dev}</h1>
              <h2 className="team-name">{item.name}</h2>
              <p className="team-cargo"> {item.cargo} </p>
              <div className="social-icons">
                <a href={item.ig}>
                  <img src={Ig} alt="" />
                </a>

                <a href={item.github}>
                  <img src={Gh} alt="github" />
                </a>

                <a href={item.linkedin}>
                  <img src={Link} alt="linkedin" />
                </a>
              </div>
            </S.Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
