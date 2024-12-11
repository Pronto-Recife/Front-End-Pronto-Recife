import { useState, useEffect } from "react";
import Sidebarpacientes from "../../../components/sidebarpacientes";
import Superiorbar from "../../../components/superiorbar";
import * as S from "./style";
import Modalcancel from "../../../components/modalcancel";
import { api } from "../../../service/api";
import {TOKEN_STORAGE} from "../../../constants/TOKEN_STORAGE"
import { jwtDecode } from "jwt-decode";

export function HistoricoConsultas() {
  const [openModal, setOpenModal] = useState(false);
  const [consultaVisivel, setConsultaVisivel] = useState(true);
  const [userData, setUserData] = useState({});
  const [consultas, setConsulta] = useState([]);
  const [medico, setMedico] = useState([]);

  const handleCancel = () => {
    setConsultaVisivel(false); // Atualiza o estado para remover a consulta
  };

  const getUserIdFromToken = () => {
    const token =  localStorage.getItem(TOKEN_STORAGE);
    if(!token){
      return "";
    }
  
    const {sub} = jwtDecode(token)
    return sub;
  }

  const getUserData = async() => {
    const response = await api.get(`/paciente/find/id/${getUserIdFromToken()}`)
    setUserData(response.data)
  }

  const getMedicosData = async() => {
    const response = await api.get(`/medico`)
    setMedico(response.data)
  }

  const getMedico = (id) => {
    return medico.find(medico => medico.id == id)
  }

  const handleGetConsultas = async() => {
    const response = await api.get(`/consulta/pacientes/${getUserIdFromToken()}/consultas/realizadas`)
    const responseFuturas = await api.get(`/consulta/pacientes/${getUserIdFromToken()}/consultas/futuras`)
    setConsulta([...response.data, ...responseFuturas.data])
  }

  useEffect(() => {
    handleGetConsultas();
    getUserData();
    getMedicosData();
  }, [])

  return (
    <S.Container>
      <S.Sidebar>
        <Sidebarpacientes />
      </S.Sidebar>

      <S.Header>
        <Superiorbar />
      </S.Header>

      <S.Main>
        <h1>Histórico de Consultas</h1>

        {consultaVisivel ? (
          consultas.map((consulta) => (
            <S.List>
            <S.ListItem>
              <S.Consulta>
                <S.Info key={consulta.id}>
                  <p>
                    <strong>Nome:</strong> {userData.nomeCompleto}
                  </p>
                  <p>
                    <strong>Profissional:</strong> {getMedico(consulta.medicoId).nomeCompleto}
                  </p>
                  <p>
                    <strong>Data:</strong> {consulta.dataConsulta.split(" ")[0]}
                  </p>
                  <p>
                    <strong>Horário:</strong> {consulta.dataConsulta.split(" ")[1]}
                  </p>
                </S.Info>

                <S.Footer>
                  <p>
                    <strong>CRM:</strong> {getMedico(consulta.medicoId).CRM}
                  </p>
                  <p>
                    <strong>Especialidade:</strong> Clínica Geral
                  </p>
                  <p>
                    <strong>Contato:</strong> {getMedico(consulta.medicoId).telefone}
                  </p>
                  <p>
                    <strong>Email:</strong> {getMedico(consulta.medicoId).email}
                  </p>
                </S.Footer>
              </S.Consulta>
              <S.Btn>
                <S.Button>Reagendar Consulta</S.Button>
                <S.ButtonCancel
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  Cancelar Consulta
                </S.ButtonCancel>
                <Modalcancel
                  isOpen={openModal}
                  setModalClose={() => setOpenModal(false)}
                  onCancel={handleCancel}
                />
              </S.Btn>
            </S.ListItem>
          </S.List>
          ))
        ) : (
          <p>Sem consultas agendadas.</p>
        )}
      </S.Main>
    </S.Container>
  );
}
