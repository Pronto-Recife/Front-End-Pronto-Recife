import Footerbar from "../../components/footerbar/";
import SidebarProfissionais from "../../components/sidebarprofissionais";
import Superiorbar from "../../components/superiorbar";
import { Search } from "lucide-react";
import { FilePenLine } from "lucide-react";

import * as S from "./styles";

export default function Usuarios() {
    return (
      <S.Container>
        <S.Sidebar>
          <SidebarProfissionais />
        </S.Sidebar>
            <S.Main>
                <S.Header>
                    <Superiorbar />
                </S.Header>
                <h1>ID</h1>

                <S.button>
                <button id="prof" >Profissionais</button>
                <button id="paci" >Pacientes</button>
                </S.button>

                <S.SearchSection>
                    <S.SearchBar>
                        <input
                            className="box"
                            type="text"
                            placeholder="ID do Usuário..."
                            />
                        <button   button className="searchbutton" type="submit">
                        <Search size={24} color="#161B68" />
                        </button>
                    </S.SearchBar>
                </S.SearchSection>

                <h2 className="Idlist" ></h2>
                <ul>
                    <li>Nome</li>
                    <li>E-mail</li>
                    <li> <FilePenLine size={30} color="#161B68" /> </li>
                </ul>

            </S.Main>

    </S.Container>
);
}
