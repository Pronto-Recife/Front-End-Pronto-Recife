import { teams } from "./teams";
import * as S from "./styles";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Ig from "../../assets/ig.svg";
import Gh from "../../assets/gh.svg";
import Link from "../../assets/link.svg";

export function Card() {
  return (
    <>
      <Swiper modules={[Navigation]} slidesPerView={4} navigation>
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
