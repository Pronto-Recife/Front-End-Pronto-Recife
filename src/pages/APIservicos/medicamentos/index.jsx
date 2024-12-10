import Sidebarpacientes from "../../../components/sidebarpacientes";
import Superiorbar from "../../../components/superiorbar";
import * as S from "./style";
import { useState, useEffect } from "react";
import { mockMedicamentos } from './mockMedicamentos';

export default function Medicamentos() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (search) {
      const filteredMedicamentos = mockMedicamentos.filter((med) =>
        med.nome.toLowerCase().includes(search.toLowerCase())
      );
      setResults(filteredMedicamentos);
    } else {
      setResults([]); 
    }
  }, [search]);

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
          <h1>Componente Especializado da Assistência Farmacêutica (CEAF)</h1>

          <section>
            <h2>Buscar Medicamentos</h2>
            <S.SearchContainer>
              <input
                type="text"
                placeholder="Digite o nome do medicamento"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </S.SearchContainer>

            <S.Results>
              {results.length > 0 ? (
                results.map((med) => (
                  <S.Card key={med.id}>
                    <p>
                      <strong>Nome:</strong> {med.nome}
                    </p>
                    <p>
                      <strong>Disponibilidade:</strong> {med.disponibilidade}
                    </p>
                  </S.Card>
                ))
              ) : (
                <p>Nenhum medicamento encontrado.</p>
              )}
            </S.Results>
          </section>

          
          {results.length === 0 && (
            <>
              <section>
                <h2>O que é o CEAF?</h2>
                <p>
                  O CEAF é responsável por disponibilizar medicamentos para doenças
                  específicas seguindo critérios do SUS, permitindo o acesso
                  universal e igualitário.
                </p>
              </section>

              <section>
                <h2>Critérios de acesso</h2>
                <p>
                  Para obter os medicamentos, os pacientes devem atender aos
                  requisitos estabelecidos pelos Protocolos Clínicos e Diretrizes
                  Terapêuticas (PCDTs) do SUS.
                </p>
              </section>

              <section className="doc">
                <h2>Documentação necessária</h2>
                <ul>
                  <li>Prescrição médica</li>
                  <li>Laudos e exames</li>
                  <li>Cartão do SUS</li>
                  <li>Documento de identidade</li>
                </ul>
              </section>

              <section>
                <h2>Contato e Informações</h2>
                <p>
                  Para mais informações, procure a unidade mais próxima ou entre em
                  contato pelo canal oficial do CEAF.
                </p>
              </section>
            </>
          )}
        </S.Content>
      </S.Main>
    </S.Container>
  );
}
