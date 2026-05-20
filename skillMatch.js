let tenho = ["azul","amarelo","laranja","violeta"]

let precisa = ["amarelo","ciano","vermelho", "azul"]

//os que faltam

let falta = precisa.filter((item)=>{
    return !tenho.includes(item)
})

let possui = precisa.filter((item)=>{
    return tenho.includes(item)
})
let qtdPossui = possui.length
let qtd = precisa.length

let porcentagem = qtdPossui/qtd * 100

console.log(`Faltam ${falta}`)
console.log(`Possui ${qtdPossui} de ${qtd} itens, o que corresponde a ${porcentagem}%.`)
