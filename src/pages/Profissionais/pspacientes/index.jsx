import { CirclePlus, Container, Search } from "lucide-react";
import Footerbar from "../../../components/footerbar";
import Sidebarprofissionais from "../../../components/sidebarprofissionais";
import Superiorbar from "../../../components/superiorbar";

import * as S from "./style.js"

export default function Pspacientes() {

        const pacientes = [
            
            {   
                id: '1 a',
                nome: "Maria Lucia Da Silva",
                idade: "68 anos",
                genero: "Feminino",
                telefone: "000-000-00",
                email: "marialucia@mail.com",
                endereço: "Rua Afonso Barbosa, 45",
                consulta: "**/**/2024",
                convenio: "Público",
                atendimentos: 5,
                faltas: 2,
                foto: "src/assets/maria.svg"
            },
            
            {
                id: '2 a',
                nome: "Carlos Eduardo",
                idade: "40 anos",
                genero: "Não Binário",
                telefone: "000-000-00",
                email: "carlosedu497@mail.com",
                endereço: "Rua Afonso Barbosa, 45",
                consulta: "**/**/2024",
                convenio: "Público",
                atendimentos: 4,
                faltas: 1,
                foto: "src/assets/carlos.svg"
            },
            
            {   
                id: '3 a',
                nome: "Dalberto Costa",
                idade: "89 anos",
                genero: "Masculino",
                telefone: "000-000-00",
                email: "dalbertocosta@mail.com",
                endereço: "Rua. Sergipe Melo, 45",
                consulta: "**/**/2024",
                convenio: "Público",
                atendimentos: 5,
                faltas: 2,
                foto: "src/assets/dalberto.svg"
            },
            {
                id:4,
                nome: "Juliana Cosmo",
                idade: "28 anos",
                genero: "Feminino",
                telefone: "000-000-00",
                email: "julianacosmo@mail.com",
                endereço: "Rua. São Paulo, 15",
                consulta: "**/**/2024",
                convenio: "Público",
                atendimentos: 5,
                faltas: 0,
                foto: "src/assets/juliana.svg"
            },
        ];

    return (
        <>
        <Superiorbar />
        <S.Content>
        <Sidebarprofissionais />
        <S.Container>
            <div className="pesquisa">
            <div className="titlecontent">
            <h1>Pacientes</h1>
            </div>
            <div className="search">
                <input className="box" type= "text" placeholder="Pesquisar pacientes..."/>
                <button className="searchbutton" type="submit"><Search size={24} color="#161B68" /></button>
            </div>
            </div>
            <div className="titleresultados">
            <p>Resultados</p>
            </div>
            <S.Cardlist>
              {pacientes.map((item) => (
                  <S.Card key={item.id}>
                    <img class="img" src={item.foto} alt="" />                           
                    <div className="informacoes">
                    <div className="info">
                        <h2>{item.nome}</h2>
                        <p className="infos">
                            <div><strong>Idade:</strong> {item.idade} <strong>Gênero:</strong> {item.genero}</div>
                            
                            <div><strong>Telefone:</strong> {item.telefone} <strong>E-mail:</strong> {item.email}</div>
                            
                            <div><strong>Endereço:</strong> {item.endereço}</div>
                            <div><strong>Primeira Consulta em:</strong> {item.consulta}</div>
                            <div> <strong>Convênio:</strong> {item.convenio}</div>                           
                        </p>

                    </div>
                    <div className="infos">
                    <div><strong>Atendimentos:</strong> {item.atendimentos}</div>
                    <div><strong>Faltas:</strong> {item.faltas}</div>
                    </div>
                    <div className="botao">
                    <button>Visualizar Cadastro</button>
                    <button>Inserir E-mail Automático</button>
                    <button>Ver Exames</button>
                    </div>
                    </div>
                </S.Card>
              ))}
            </S.Cardlist>
        </S.Container>

                        <S.VejaMaisButton>
                            <CirclePlus size={24} color="#161B68" />
                            Veja mais
                        </S.VejaMaisButton>
                    
        </S.Content>
        <footer>
         <Footerbar />
        </footer>
        </>
    )}