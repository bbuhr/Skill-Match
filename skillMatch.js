const candidato = {
  nome: "Ana",
  area: "Front-End",
  habilidades: ["JavaScript", "GitHub", "Kanban"],
  experienciaMeses: 3,
};

class Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade) {
    this.id = id;
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  exibirResumo() {
    return `${this.cargo} na empresa ${this.empresa}`;
  }
}

class VagaFrontEnd extends Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(id, empresa, cargo, requisitos, salario, modalidade);
    this.nivel = nivel;
  }

  exibirNivel() {
    return `Nível da vaga: ${this.nivel}`;
  }
}

const vagas = [
  new VagaFrontEnd(
    1,
    "TechStart",
    "Desenvolvedor Front-End Júnior",
    ["JavaScript", "GitHub", "Lógica de Programação"],
    2500,
    "Remoto",
    "Júnior",
  ),

  new VagaFrontEnd(
    2,
    "CodeLab",
    "Estágio Front-End",
    ["JavaScript", "Kanban", "GitHub"],
    1800,
    "Híbrido",
    "Estágio",
  ),

  new VagaFrontEnd(
    3,
    "WebSolutions",
    "Programador JavaScript Júnior",
    ["JavaScript", "Arrays", "Objetos", "Funções"],
    3000,
    "Presencial",
    "Júnior",
  ),
];

function criarContadorAnalises() {
  let total = 0;

  return function () {
    total++;
    return total;
  };
}

const contadorAnalises = criarContadorAnalises();

function match(tenho, precisa) {
  let falta = precisa.filter((item) => {
    return !tenho.includes(item);
  });

  let possui = precisa.filter((item) => {
    return tenho.includes(item);
  });
  let qtdPossui = possui.length;
  let qtd = precisa.length;

  let compatibilidade = (qtdPossui / qtd) * 100;

  return {
    falta,
    possui,
    compatibilidade,
  };
}

function classificarCompatibilidade(percentual) {
  if (percentual >= 80) {
    return "Alta compatibilidade";
  }

  if (percentual >= 50) {
    return "Média compatibilidade";
  }

  return "Baixa compatibilidade";
}

function encontrarMelhorVaga(resultadoVagas) {
  return resultadoVagas.reduce((melhor, vaga) => {
    return vaga.compatibilidade > melhor.compatibilidade ? vaga : melhor;
  });
}

function gerarRecomendacao(resultados) {
  const faltantes = resultados.flatMap((resultado) => resultado.falta);

  const recomendacao = [];

  // Valida se o item já existe na recomendação, caso contrário, adiciona-lo
  for (const item of faltantes) {
    if (!recomendacao.includes(item)) {
      recomendacao.push(item);
    }
  }

  return recomendacao;
}

function finalizarAnalise(nome, callback) {
  alert("Análise concluída.");

  callback(nome);
}

function exibirMensagemFinal(nome) {
  alert(
    `${nome}, revise suas habilidades faltantes e atualize seu plano de estudos.`,
  );
}

// Simulação de requisição assíncrona para buscar vagas
function buscarVagasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas);
    }, 1000);
  });
}

async function iniciarSistema() {
  alert("Carregando vagas...");

  const vagasCarregadas = await buscarVagasSimuladas();

  alert("Vagas carregadas com sucesso.");

  const resultados = vagasCarregadas.map((vaga) => {
    const resultado = match(candidato.habilidades, vaga.requisitos);

    const classificacao = classificarCompatibilidade(resultado.compatibilidade);

    contadorAnalises();

    alert(`
            ====================================

            ${vaga.exibirResumo()}

            ${vaga.exibirNivel()}

            Compatibilidade: ${resultado.compatibilidade.toFixed(0)}%

            Classificação:
            ${classificacao}

            Habilidades encontradas:
            ${resultado.possui.join(", ")}

            Habilidades faltantes:
            ${
              resultado.falta.length > 0
                ? resultado.falta.join(", ")
                : "Nenhuma"
            }

            ====================================
        `);

    return {
      vaga,
      compatibilidade: resultado.compatibilidade,
      falta: resultado.falta,
    };
  });

  const vagaRemota = vagasCarregadas.find(
    (vaga) => vaga.modalidade === "Remoto",
  );

  alert(`
Primeira vaga remota encontrada:

${vagaRemota.exibirResumo()}
    `);

  const atendeTodas = vagasCarregadas.every((vaga) => {
    return vaga.requisitos.every((req) => candidato.habilidades.includes(req));
  });

  alert(`
O candidato atende todos os requisitos
de todas as vagas?

${atendeTodas ? "SIM" : "NÃO"}
    `);

  const melhorVaga = encontrarMelhorVaga(resultados);

  alert(`
MELHOR VAGA ENCONTRADA

Cargo:
${melhorVaga.vaga.cargo}

Empresa:
${melhorVaga.vaga.empresa}

Compatibilidade:
${melhorVaga.compatibilidade.toFixed(0)}%
    `);

  const recomendacao = gerarRecomendacao(resultados);

  alert(`
RECOMENDAÇÃO DE ESTUDOS

${
  recomendacao.length > 0
    ? `Estude: ${recomendacao.join(", ")}`
    : "Você atende todos os requisitos analisados."
}
    `);

  finalizarAnalise(candidato.nome, exibirMensagemFinal);
}

iniciarSistema();
