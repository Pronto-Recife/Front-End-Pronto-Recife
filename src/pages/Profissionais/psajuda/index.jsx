import Footerbar from "../../../components/footerbar";
import SidebarProfissionais from "../../../components/sidebarprofissionais";
import Sidebarprofissionais from "../../../components/sidebarprofissionais";
import Superiorbar from "../../../components/superiorbar";
import * as S from './style';

export default function Psajuda() {

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
                    <h1>Ajuda e Suporte</h1>
                    <h3>Funcionalidades gerais do sistema</h3>

                    <S.Feature>
                        <h3>Centralização de Registros Clínicos</h3>
                        <p>Atualize informações médicas dos pacientes em tempo real. O sistema permite a centralização dos registros clínicos, com integração entre hospitais, clínicas e postos de saúde, garantindo que todos os profissionais tenham acesso a um histórico completo e atualizado.</p>
                    </S.Feature>

                    <S.Feature>
                        <h3>Busca de Informações Clínicas</h3>
                        <p>Localize rapidamente dados sobre o histórico médico do paciente, incluindo medicações, cirurgias anteriores e exames realizados. A busca é otimizada para garantir que médicos e enfermeiros possam acessar rapidamente as informações necessárias.</p>
                    </S.Feature>

                    <S.Feature>
                        <h3>Configurações de Acesso Segurado</h3>
                        <p>Personalize o nível de acesso de cada profissional de saúde. O sistema oferece controle granular sobre quais dados cada profissional pode visualizar, garantindo segurança e privacidade, conforme as permissões definidas.</p>
                    </S.Feature>

                    <S.Feature>
                        <h3>Relatórios e Análises</h3>
                        <p>Gere e exporte relatórios detalhados sobre a sua saúde. O sistema permite a análise de indicadores de saúde, ajudando a identificar padrões e a melhorar a eficiência do tratamento com base em dados consolidados.</p>
                    </S.Feature>

                    <S.Feature>
                        <h3>Alertas Automáticos e Notificações Médicas</h3>
                        <p>Notificações automáticas para os profissionais de saúde sobre interações de medicamentos, condições críticas e lembretes de procedimentos rotineiros. Isso garante que o acompanhamento dos pacientes seja contínuo e eficaz.</p>
                    </S.Feature>
                </S.Content>
            </S.Main>
        </S.Container>
    );
}