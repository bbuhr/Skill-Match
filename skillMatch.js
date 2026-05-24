const candidato = {
  nome: "Ana",
  area: "Front-End",
  habilidades: [
    "JavaScript",
    "GitHub",
    "Lógica de Programação",
    "Kanban",
    ],
  experienciaMeses: 3
}

class Vaga {
    constructor(id, empresa, cargo, requisitos, salario, modalidade) {
        this.id = id
        this.empresa = empresa
        this.cargo = cargo
        this.requisitos = requisitos
        this.salario = salario
        this.modalidade = modalidade
    }
    
    exibirResumo() {
        return `${this.cargo} na empresa ${this.empresa}`
    }
}

class VagaFrontEnd extends Vaga {
    constructor(
        id,
        empresa,
        cargo,
        requisitos,
        salario,
        modalidade,
        nivel
    ) {
        super(
            id,
            empresa,
            cargo,
            requisitos,
            salario,
            modalidade,
        )
        this.nivel = nivel
    }

    exibirNivel() {
        return `Nível da vaga: ${this.nivel}`
    }
}

const vagas = [
    new VagaFrontEnd(
        1,
        "TechStart",
        "Desenvolvedor Front-End Júnior",
        [
            "JavaScript",
            "GitHub",
            "Lógica de Programação",
        ],
        2500,
        "Remoto",
        "Júnior"
    ),

    new VagaFrontEnd(
        2,
        "CodeLab",
        "Estágio Front-End",
        [
            "JavaScript",
            "Kanban",
            "GitHub",
        ],
        1800,
        "Híbrido",
        "Estágio"
    ),

    new VagaFrontEnd(
        3,
        "WebSolutions",
        "Programador JavaScript Júnior",
        [
            "JavaScript",
            "Arrays",
            "Objetos",
            "Funções",
        ],
        3000,
        "Presencial",
        "Júnior"
    )
]

function match(tenho, precisa) {

    let falta = precisa.filter((item)=>{
        return !tenho.includes(item)
    })

    let possui = precisa.filter((item)=>{
        return tenho.includes(item)
    })
    let qtdPossui = possui.length
    let qtd = precisa.length

    let compatibilidade = qtdPossui/qtd * 100

    return{
        falta,
        possui,
        compatibilidade
    }
}

function classificarCompatibilidade(percentual){
    
    if (percentual >= 80) {
        return "Alta compatibilidade"        
    }
    
    if (percentual >= 50) {
        return "Média compatibilidade"
    }

    return "Baixa compatibilidade"
}

