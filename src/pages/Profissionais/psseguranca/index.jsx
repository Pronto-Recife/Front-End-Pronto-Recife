import Footerbar from "../../../components/footerbar";
import SidebarProfissionais from "../../../components/sidebarprofissionais";
import Sidebarprofissionais from "../../../components/sidebarprofissionais";
import Superiorbar from "../../../components/superiorbar";
import * as S from './style';

export default function Psseguranca() {
  return (
    <S.Container>
    <S.Sidebar>
      <SidebarProfissionais />
    </S.Sidebar>
    <S.Main>
      <S.Header>
        <Superiorbar />
      </S.Header>

      <S.Content>
        <h1>Segurança</h1>
        <p>
          Sua segurança é nossa prioridade. Estamos comprometidos em proteger seus dados e garantir que suas informações pessoais sejam tratadas com total confidencialidade.
          Utilizamos as melhores práticas de segurança digital para oferecer uma experiência segura e confiável.
          Ao acessar e utilizar nosso site, você concorda com os termos de uso e com a nossa política de privacidade, que detalha como coletamos, usamos e protegemos suas informações.
          Recomendamos que leia essas políticas para entender completamente as medidas de segurança que implementamos.
          Se você tiver qualquer dúvida ou preocupação sobre a segurança de seus dados, entre em contato com nossa equipe de suporte.
        </p>
      </S.Content>

    </S.Main>
  </S.Container>
  );
}
