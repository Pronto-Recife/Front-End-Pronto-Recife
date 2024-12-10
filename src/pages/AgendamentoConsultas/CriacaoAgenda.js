let readlineSync = require("readline-sync");

// valores passados pelo profissional de saúde
const inicio = "08:00";
const h1 = parseInt(inicio.substring(0, 2)); // Hora de início e
const m1 = parseInt(inicio.substring(3, 5)); // Minuto de início

const almoco = "12:00";
const h2 = parseInt(almoco.substring(0, 2)); // Hora do almoço e
const m2 = parseInt(almoco.substring(3, 5)); // Minuto do almoço

const fim = "17:00";
const h3 = parseInt(fim.substring(0, 2)); // Hora de fim e
const m3 = parseInt(fim.substring(3, 5)); // Minuto de fim

let tempoConsultaMin = 30; // Tempo de cada consulta em minutos

// divisão em dois turnos: antes e depois do almoço
let turnoManhaMin = (h2 - h1) * 60 + (m2 - m1);
let totalConsulta = Math.floor(turnoManhaMin / tempoConsultaMin); // Quantidade de consultas pela manhã

let testeH = h1;
let testeM = m1;

// Calcula quantas consultas serão feitas e gera essa quantidade baseada no horário de início
for (let i = 0; i < totalConsulta; i++) {
  // Formatação para exibir o horário das consultas de forma padronizada (ex: 08:30)
  console.log(
    "Hora da consulta disponível: " +
      String(testeH).padStart(2, "0") +
      ":" +
      String(testeM).padStart(2, "0")
  );

  testeM += tempoConsultaMin; // Adiciona o tempo da consulta aos minutos

  // Ajusta as horas e os minutos caso os minutos ultrapassem 60
  if (testeM >= 60) {
    testeH += Math.floor(testeM / 60); // Atualiza a hora
    testeM = testeM % 60; // Mantém os minutos dentro do intervalo [0, 59]
  }
}

console.log("Ela vai ter " + totalConsulta + " consultas no dia.");

console.log("Seu horario é: %d minutos", turnoManhaMin);
console.log(totalConsulta);
console.log("Seu horario é: %02d:%02d", dfHora, dfMinuto);
