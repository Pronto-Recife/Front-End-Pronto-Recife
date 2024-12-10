import { useNavigate } from "react-router-dom";
import Superiorbar from "../../components/superiorbar";
import * as S from "./style";

export default function Ajudaesup() {
  const perguntas = [
    {
      id: 1,
      title: "Agendamento de Consultas",
      subtitle: "Saiba como marcar suas consultas de forma rápida e prática.",
    },
    {
      id: 2,
      title: "Prontuários e Resultados de Exames",
      subtitle: "Acesse seus prontuários e resultados de exames facilmente.",
    },
    {
      id: 3,
      title: "Suporte Técnico e Privacidade",
      subtitle: "Obtenha ajuda técnica e saiba mais sobre nossa política de privacidade.",
    },
    {
      id: 4,
      title: "Informações Gerais de Saúde",
      subtitle: "Encontre informações úteis sobre saúde e bem-estar.",
    },
    {
      id: 5,
      title: "Recursos Adicionais",
      subtitle: "Descubra funcionalidades extras disponíveis para você.",
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
            <strong>(SAC)</strong> do ProntoRecife. Queremos saber sua opinião e
            garantir a melhor experiência no uso dos nossos serviços.
          </p>

          <p>
            <span>Telefone:</span> <strong>1234-5678</strong> <br />
            <span>Whatsapp:</span> <strong>(81) 9 1234-5678</strong> <br />
            <span>E-mail:</span> <strong>sac@prontorecife.com.br</strong> <br />
            <span>Horário de atendimento:</span> Segunda a Sexta, das{" "}
            <strong>8h às 21h</strong>. Sábado, Domingo e Feriados das{" "}
            <strong>8h às 18h</strong>.
          </p>

          <h1>Perguntas Frequentes</h1>

          {perguntas.length > 0 ? (
            perguntas.map((item) => (
              <S.Card key={item.id}>
                <div className="informacoes">
                  <h2>{item.title}</h2>
                  <p>{item.subtitle}</p>
                </div>
              </S.Card>
            ))
          ) : (
            <p>Nenhuma pergunta frequente disponível no momento.</p>
          )}

          <S.Button onClick={() => navigate(-1)}>Voltar</S.Button>
        </S.Content>
      </S.Main>
    </S.Container>
  );
}
