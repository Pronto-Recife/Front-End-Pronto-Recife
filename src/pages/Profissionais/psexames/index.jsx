import Footerbar from "../../../components/footerbar";
import Sidebarprofissionais from "../../../components/sidebarprofissionais";
import Superiorbar from "../../../components/superiorbar";
import * as S from "./style";

export default function Psexames() {

    return (
        <S.Container>
      <S.Sidebar>
        <Sidebarprofissionais />
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
          </S.Card>
          <S.Card>
            <h2>Histórico</h2>
            <p>Consulte o histórico de exames realizados.</p>
          </S.Card>
          <S.Card>
            <h2>Resultados</h2>
            <p>Acesse os resultados disponíveis.</p>
          </S.Card>
        </S.CardContainer>
        <S.HistoryText>Você pode usar os filtros acima para refinar sua busca.</S.HistoryText>
      </S.Main>
      <S.Footer>
        <Footerbar />
      </S.Footer>
    </S.Container>
    )
}