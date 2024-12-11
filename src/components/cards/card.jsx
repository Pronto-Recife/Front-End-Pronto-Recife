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
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  function getSlidesPerView() {
    const width = window.innerWidth;
    if (width < 490) return 1;
    if (width < 676) return 2;
    if (width < 906) return 3;
    if (width < 1135) return 4;
    return Math.floor(width / 300); // Ajuste aqui conforme necessário
  }

  useEffect(() => {
    function handleResize() {
      setSlidesPerView(getSlidesPerView());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Swiper modules={[Navigation]} slidesPerView={slidesPerView} navigation>
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
