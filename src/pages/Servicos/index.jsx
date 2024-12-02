import { useNavigate } from 'react-router-dom';
import Superiorbar from '../../components/superiorbar';
import * as S from './style';

export default function Servicos() {

    const navigate = useNavigate();
  return (
    <S.Container>
      <S.Main>
        <S.Header>
          <Superiorbar />
        </S.Header>

        <S.Content>
          <h1>Serviço de Atendimento ao Consumidor</h1>

          <p>
            Entre em contato com o Serviço de Atendimento ao Cliente <strong>(SAC)</strong> do ProntoRecife. Queremos saber sua opinião, estamos aqui para garantir a melhor experiência no uso dos nossos serviços.<br />
          </p>
            
          <p>
            <span>Telefone:</span> <strong>1234-5678</strong> <br />
            <span>Whatsapp:</span> <strong>(81) 9 1234-5678</strong> <br />
            <span>E-mail:</span> <strong>sac@prontorecife.com.br</strong> <br />
            <span>Horário de atendimento:</span> Segunda a Sexta, das <strong>8h às 21h</strong>. Sábado, Domingo e Feriados das <strong>8h às 18h</strong>
          </p>

          <S.Button onClick={() => navigate(-1)}>Voltar</S.Button>

        </S.Content>
      </S.Main>
    </S.Container>
  );
}
