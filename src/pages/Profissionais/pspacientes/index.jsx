import { CirclePlus, Search } from "lucide-react";
import Superiorbar from "../../../components/superiorbar";
import * as S from "./style.js";
import SidebarProfissionais from "../../../components/sidebarprofissionais";

export default function Pspacientes() {
    const pacientes = [
        {
            id: "1",
            nome: "Maria Lucia Da Silva",
            idade: "68 anos",
            genero: "Feminino",
            telefone: "000-000-00",
            email: "marialucia@mail.com",
            endereco: "Rua Afonso Barbosa, 45",
            consulta: "**/**/2024",
            convenio: "Público",
            atendimentos: 5,
            faltas: 2,
            foto: "src/assets/maria.svg",
        },
        {
            id: "2",
            nome: "Carlos Eduardo",
            idade: "40 anos",
            genero: "Não Binário",
            telefone: "000-000-00",
            email: "carlosedu497@mail.com",
            endereco: "Rua Afonso Barbosa, 45",
            consulta: "**/**/2024",
            convenio: "Público",
            atendimentos: 4,
            faltas: 1,
            foto: "src/assets/carlos.svg",
        },
        {
            id: "3",
            nome: "Dalberto Costa",
            idade: "89 anos",
            genero: "Masculino",
            telefone: "000-000-00",
            email: "dalbertocosta@mail.com",
            endereco: "Rua Sergipe Melo, 45",
            consulta: "**/**/2024",
            convenio: "Público",
            atendimentos: 5,
            faltas: 2,
            foto: "src/assets/dalberto.svg",
        },
        {
            id: "4",
            nome: "Juliana Cosmo",
            idade: "28 anos",
            genero: "Feminino",
            telefone: "000-000-00",
            email: "julianacosmo@mail.com",
            endereco: "Rua São Paulo, 15",
            consulta: "**/**/2024",
            convenio: "Público",
            atendimentos: 5,
            faltas: 0,
            foto: "src/assets/juliana.svg",
        },
    ];

    return (
        <S.Content>
            <S.Sidebar>
                <SidebarProfissionais />
            </S.Sidebar>
            <S.Header>
                <Superiorbar />
            </S.Header>
            <S.Main>
                <h1>Pacientes</h1>
                <S.SearchSection>
                    <S.SearchBar>
                        <input type="text" placeholder="Pesquisar pacientes..." />
                        <button type="submit">
                            <Search size={24} color="#161B68" />
                        </button>
                    </S.SearchBar>
                </S.SearchSection>
                <S.ResultsTitle>
                    <p>Resultados</p>
                </S.ResultsTitle>
                <S.Cardlist>
                    {pacientes.map((item) => (
                        <S.Card key={item.id}>
                            <img className="img" src={item.foto} alt={item.nome} />
                            <div className="informacoes">
                                <div className="info">
                                    <h2>{item.nome}</h2>
                                    <p>
                                        <div>
                                            <strong>Idade:</strong> {item.idade}{" "}
                                            <strong>Gênero:</strong> {item.genero}
                                        </div>
                                        <div>
                                            <strong>Telefone:</strong> {item.telefone}{" "}
                                            <strong>E-mail:</strong> {item.email}
                                        </div>
                                        <div>
                                            <strong>Endereço:</strong> {item.endereco}
                                        </div>
                                        <div>
                                            <strong>Primeira Consulta em:</strong> {item.consulta}
                                        </div>
                                        <div>
                                            <strong>Convênio:</strong> {item.convenio}
                                        </div>
                                    </p>
                                </div>
                                <div className="info">
                                    <div>
                                        <strong>Atendimentos:</strong> {item.atendimentos}
                                    </div>
                                    <div>
                                        <strong>Faltas:</strong> {item.faltas}
                                    </div>
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
                <S.VejaMaisButton>
                    <CirclePlus size={24} color="#161B68" />
                    Veja mais
                </S.VejaMaisButton>
            </S.Main>
        </S.Content>
    );
}
