import Sidebarpacientes from "../../../components/sidebarpacientes";
import Superiorbar from "../../../components/superiorbar";
import * as S from './style';
import { useState, useEffect } from "react";
import { mockExames } from './mockExames';

export default function Laboratoriais() {
  const [exames, setExames] = useState([]);
  const [search, setSearch] = useState(""); 
  const [filteredExames, setFilteredExames] = useState([]); 

  useEffect(() => {
    setExames(mockExames);
  }, []);

  
  useEffect(() => {
    if (search) {
      const filtered = exames.filter((exame) =>
        exame.paciente.nome.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredExames(filtered);
    } else {
      setFilteredExames([]);
    }
  }, [search, exames]);

  return (
    <S.Container>
      <S.Sidebar>
        <Sidebarpacientes />
      </S.Sidebar>
      <S.Main>
        <S.Header>
          <Superiorbar />
        </S.Header>
        <S.Content>
          <h1>Resultados de Exames Laboratoriais</h1>

          
          <input
            type="text"
            placeholder="Buscar pelo nome do paciente"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          
          {filteredExames.length > 0 ? (
            filteredExames.map((exame) => (
              <div key={exame.exame_id}>
                <p><strong>Nome do Paciente:</strong> {exame.paciente.nome}</p>
                <p><strong>Data de Nascimento:</strong> {exame.paciente.data_nascimento}</p>
                <p><strong>Tipo de Exame:</strong> {exame.exame.tipo}</p>
                <p><strong>Resultado:</strong> {exame.exame.resultado}</p>
                <p><strong>Data do Exame:</strong> {exame.exame.data_exame}</p>
                <hr />
              </div>
            ))
          ) : (
            <p>Nenhum exame encontrado para esse paciente.</p>
          )}
        </S.Content>
      </S.Main>
    </S.Container>
  );
}
