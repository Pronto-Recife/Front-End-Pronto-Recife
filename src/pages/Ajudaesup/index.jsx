import { useNavigate } from "react-router-dom";
import Superiorbar from "../../components/superiorbar";
import * as S from "./style";

export default function Ajudaesup() {
  const perguntas = [
    {
      id: 1,
      title: "Agendamento de Consultas",
      subtitle: "dcevr",
    },
    {
      id: 2,
      title: "Prontuários e Resultados de Exames",
      subtitle: "dcevr",
    },
    {
      id: 3,
      title: "Suporte Técnico e Privacidade",
      subtitle: "dcevr",
    },
    {
      id: 4,
      title: "Informações Gerais de Saúde",
      subtitle: "dcevr",
    },
    {
      id: 5,
      title: " Recursos Adicionais",
      subtitle: "dcevr",
    },
  ];

  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Main>
        <S.Header>
          <Superiorbar />
        </S.Header>

        <S.Content>
          <h1>Ajuda e Suporte</h1>

          <p>
            Entre em contato com o Serviço de Atendimento ao Cliente{" "}
            <strong>(SAC)</strong> do ProntoRecife. Queremos saber sua opinião,
            estamos aqui para garantir a melhor experiência no uso dos nossos
            serviços.
            <br />
          </p>

          <p>
            <span>Telefone:</span> <strong>1234-5678</strong> <br />
            <span>Whatsapp:</span> <strong>(81) 9 1234-5678</strong> <br />
            <span>E-mail:</span> <strong>sac@prontorecife.com.br</strong> <br />
            <span>Horário de atendimento:</span> Segunda a Sexta, das{" "}
            <strong>8h às 21h</strong>. Sábado, Domingo e Feriados das{" "}
            <strong>8h às 18h</strong>
          </p>

          <h1> Perguntas Frequentes </h1>

          {perguntas.map((item) => (
            <S.Card key={item.id}>
              <div className="informacoes">
                <div className="info">
                  <h2>{item.nome}</h2>
                </div>
              </div>
            </S.Card>
          ))}

          <S.Button onClick={() => navigate(-1)}>Voltar</S.Button>
        </S.Content>
      </S.Main>
    </S.Container>
  );
}
