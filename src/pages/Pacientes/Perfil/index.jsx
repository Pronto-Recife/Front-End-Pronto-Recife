import Footerbar from "../../../components/footerbar";
import Sidebarpacientes from "../../../components/sidebarpacientes";
import Superiorbar from "../../../components/superiorbar";
import Maria from "../../../assets/maria.svg";

import * as S from "./styles";

export default function Perfil() {
    const pacienteInfo = [
        {
            title: "Dados Pessoais",
            content: [
                { label: "Nome", value: "Maria Lucia da Silva" },
                { label: "Idade", value: "68 anos" },
                { label: "Telefone", value: "(00) 0000-0000" },
                { label: "Endereço", value: "R. Afonso Barbosa, 48" }
            ]
        },
        {
            title: "Informações da Consulta",
            content: [
                { label: "Primeira consulta", value: "2022-01-01" },
                { label: "Convênio", value: "Público" },
                { label: "Gênero", value: "Feminino" }
            ]
        },
        {
            title: "Outros Detalhes",
            content: [
                { label: "Email", value: "marialucia@gmail.com" },
                { label: "Atendimento", value: "1" },
                { label: "Faltas", value: "0" }
            ]
        }
    ];

    const historicoMedico = [
        {
            title: "Doenças Pré-existentes",
            content: "Hipertensão, diabetes e histórico de problemas cardíacos."
        },
        {
            title: "Condições Crônicas",
            content: "Asma diagnosticada aos 40 anos, monitoramento contínuo necessário."
        },
        {
            title: "Histórico de Medicação",
            content: "Uso regular de metformina e medicamentos para controle da pressão arterial."
        },
        {
            title: "Cirurgias Realizadas",
            content: "Cirurgia de catarata em 2020 e cirurgia ortopédica no joelho direito em 2018."
        },
        {
            title: "Alergias",
            content: "Alérgica a penicilina e frutos do mar."
        },
        {
            title: "Vacinas Atualizadas",
            content: "Vacinas contra gripe, hepatite B e COVID-19 atualizadas em 2023."
        }
    ];

    return (
        <>
            <Superiorbar />
            <S.Container>
                <Sidebarpacientes />
                <S.Main>
                    <div className="paciente">

                        


                        <div className="Inf">
                             <h2>Dados Pessoais</h2>
                            <div className="dados-pessoais">
                                
                                {pacienteInfo[0].content.map((item, idx) => (
                                    <p key={idx}>
                                        <strong>{item.label}:</strong> {item.value}
                                    </p>
                                ))}
                            </div>
                            <div className="dados-pessoais">
                                <h2>Informações da Consulta</h2>
                                {pacienteInfo[1].content.map((item, idx) => (
                                    <p key={idx}>
                                        <strong>{item.label}:</strong> {item.value}
                                    </p>
                                ))}
                            </div>
                            <div className="dados-pessoais">
                                <h2>Outros Detalhes</h2>
                                {pacienteInfo[2].content.map((item, idx) => (
                                    <p key={idx}>
                                        <strong>{item.label}:</strong> {item.value}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <S.Button>Visualizar Cadastro</S.Button>
                        <S.Button>Imprimir</S.Button>
                    </div>

                    <div className="historico">
                        <h1>Histórico Médico</h1>

                        {historicoMedico.map((item, index) => (
                            <S.Card key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </S.Card>
                        ))}
                    </div>
                </S.Main>
            </S.Container>
        </>
    );
}
