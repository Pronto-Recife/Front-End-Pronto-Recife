import Footerbar from "../../../components/footerbar";
import Sidebarpacientes from "../../../components/sidebarpacientes";
import Superiorbar from "../../../components/superiorbar";
import * as S from "./styles";

export default function Exames() {
  return (
    <S.Container>
      <S.Sidebar>
        <Sidebarpacientes />
      </S.Sidebar>
      <S.Header>
        <Superiorbar />
      </S.Header>
      <S.Main>
        <h1>Exames</h1>
        <p>Bem-vindo(a) à seção de exames. Aqui você pode acessar e gerenciar informações importantes.</p>
        <S.FiltersContainer>
          <div>
            <label htmlFor="filter-date">Filtrar por Data:</label>
            <select id="filter-date">
              <option value="today">Hoje</option>
              <option value="week">Esta semana</option>
              <option value="month">Este mês</option>
            </select>
          </div>
          <div>
            <label htmlFor="filter-type">Filtrar por Tipo:</label>
            <select id="filter-type">
              <option value="all">Todos</option>
              <option value="blood">Exames de Sangue</option>
              <option value="imaging">Imagem</option>
            </select>
          </div>
        </S.FiltersContainer>
        <S.CardContainer>
          <S.Card>
            <h2>Próximos Exames</h2>
            <p>Veja os exames agendados e detalhes.</p>
            <ul>
              <li>Exame de Sangue - 30/11/2024 às 09:00</li>
              <li>Ultrassom Abdomen - 01/12/2024 às 14:30</li>
              <li>Raio-X Torácico - 05/12/2024 às 10:00</li>
            </ul>
          </S.Card>
          <S.Card>
            <h2>Histórico</h2>
            <p>Consulte o histórico de exames.</p>
            <ul>
              <li>Hemograma Completo - Realizado em 10/10/2024 - Resultado: Normal </li>
              <li>Tomografia Computadorizada - Realizado em 15/09/2024 - Resultado: Sem alterações </li>
              <li>Exame de Urina - Realizado em 20/08/2024 - Resultado: Infecção detectada</li>
            </ul>
          </S.Card>
        </S.CardContainer>
        <S.HistoryText>Você pode usar os filtros acima para refinar sua busca.</S.HistoryText>
      </S.Main>
    </S.Container>
  );
}
