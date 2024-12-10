import Footerbar from "../../../components/footerbar";
import Sidebarprofissionais from "../../../components/sidebarprofissionais";
import Superiorbar from "../../../components/superiorbar";
import * as S from './style'

export default function Psdadoscadastrais() {

    const historicoMedico = [
        {
            title: "Nome Legal",
            content: "Maria Lucia Da Silva"
        },
        {
            title: "CPF",
            content: "123.456.789-00"
        },
        {
            title: "RG",
            content: "1234.5678.10"
        },
        {
            title: "Cônjuge",
            content: "Ananias Nicolau Benevides Dias"
        },
        {
            title: "Data de nasciemento",
            content: "19/04/1952"
        },
        {
            title: "Gênero",
            content: "Feminino"
        },
        {
            title: "Nacionalidade",
            content: "Brasileira"
        },
        {
            title: "Responsável Legal",
            content: "Juliana Maria Tenório da Silva"
        }
    ];

    const saude = [
        {
            title: "Peso",
            content: "86Kg"
        },
        {
            title: "Altura",
            content: "1,54m"
        },
        {
            title: "Tipo sanguíneo",
            content: "Tipo: 0 | fator RG: Negativo"
        },
    ];

    const contatos = [
        {
            title: "E-mail",
            content: "marialucia@gmail.com"
        },
        {
            title: "Telefone",
            content: "(81) 9 8765-4321"
        },
        {   title: 'Contato de Emengência',
            content: '(81) 9 1234-5678'

        },
        {
            title: "Endereço",
            content: "Rua da Lua, Número: 23, 53210-320"
        },
    ]

    return (
        <S.Container>
                <S.Sidebar>
                    <Sidebarprofissionais />
                </S.Sidebar>
                <S.Header>
                    <Superiorbar />
                </S.Header>

                <S.Main>

                <div>
                    <h1>Dados Pessoais </h1>
                {historicoMedico.map((item, index) => (
                        <S.Card key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </S.Card>
                    ))}
                </div>

                <div>
                <h1>Saúde</h1>
                {saude.map((item, index) => (
                        <S.Card key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </S.Card>
                    ))} 
                
                <div className="Contatos">
                <h1>Contatos</h1>
                {contatos.map((item, index) => (
                        <S.Card key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </S.Card>
                    ))} 
                </div>
                </div>
                </S.Main>
                
        

        
        </S.Container>
    )
}