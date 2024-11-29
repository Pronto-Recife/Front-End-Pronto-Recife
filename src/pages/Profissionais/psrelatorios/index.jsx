import Footerbar from "../../../components/footerbar";
import Sidebarprofissionais from "../../../components/sidebarprofissionais";
import Superiorbar from "../../../components/superiorbar";
import Logoprescricao from "../../../assets/logoprescricao.svg";
import { Search } from "lucide-react";

import * as S from "./style"

export default function Psrelatorios() {

    return (
        <>
        <Superiorbar />
        <S.Container>
        <Sidebarprofissionais />

        <div className="main">          
       <div className="submain">
       <div className="search">
                <input className="box" type= "text" placeholder="ID do Paciente, Nº do Relatório..."/>
                <button className="searchbutton" type="submit"><Search size={24} color="#161B68" /></button>
            </div>
        <main className="content">
        <div className="container">
        <div className="imgLogo">
        <img src= {Logoprescricao} alt="logoprescricao" />
        </div>
        <h1 className="title">Relatório Médico</h1>
      </div>

        <div className="text-context">
        <div className="header-content">
        <p><strong>Paciente:</strong> Maria Lúcia da Silva</p>
        <p><strong>Data de Nascimento:</strong> 07/04/1957</p>
        <p><strong>Data do Relatório:</strong> 27/11/2024</p>
        <p><strong>Médico Responsável:</strong> Dr. Roberto Lima</p>
        <p><strong>Especialidade Clínica:</strong> Geral</p>
        <p><strong>Número do Prontuário:</strong> 1715</p>
        </div>
           
        <h2>Queixa Principal</h2>
        <p>
          A paciente relata dores abdominais recorrentes nas últimas semanas. Outros
          exames mencionados incluem exames hepáticos e posse de apetite.
        </p>
        
        <h2>Histórico Clínico</h2>
        <p>
          A paciente possui histórico de hipertensão controlada, gastrite crônica. Medicamentos atuais incluem
          Losartana, Omeprazol e Captoril. Procedimentos anteriores incluem ultrassom de vias urinárias em 2018.
        </p>
        
        <h2>Exame Físico</h2>
        <p><strong>Temperatura Corporal:</strong> 37.2°C</p>
        <p><strong>Pressão Arterial:</strong> 120/80 mmHg</p>
        <p><strong>Frequência Cardíaca:</strong> 72 bpm</p>
        <p><strong>Frequência Respiratória:</strong> 18 rpm</p>
        
        <h2>Diagnóstico</h2>
        <p>
          Baseado nos sintomas relatados e exames realizados, o diagnóstico preliminar é de [Exemplo: gastrite
          associada a disfunção hepática leve].
        </p>
        
        <h2>Conduta e Tratamento</h2>
        <p>
          Recomenda-se a seguinte conduta: [Exemplo: omeprazol 20 mg, 1x ao dia, por 30 dias, retorno em
          consulta após 30 dias].
        </p>
        </div>
        <footer className="footer">
          <div>
            <p><strong>Dr. Lucas Ferreira Mendes</strong></p>
            <p>CRM: PE-123456</p>
            <p>Especialidade Clínica Geral</p>
            <p>Contato: (81) 97545-4321</p>
            <p>Email: lucas.mendes@clinicaficticia.com</p>
            </div>
        </footer>
        </main>
       </div>
       </div>
        </S.Container>
         <Footerbar />
        </>
    )
}