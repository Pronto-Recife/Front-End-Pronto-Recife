import { teams } from "./teams";
import * as S from "./styles";

import Ig from "../../assets/ig.svg";
import Gh from "../../assets/gh.svg";
import Link from "../../assets/link.svg";

export function Card() {
  return (
    <>
      {teams.map((item) => (
        <S.Container key={item.id}>
          <img src={item.img} alt="" />
          <h3>{item.name}</h3>
          <p> {item.cargo} </p>
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
      ))}
    </>
  );
}
