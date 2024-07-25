const prompt = require("prompt-sync")

const paises = []


const ValidarPais = pais => pais.nome != "" && sigla.length == 2 


const modelo = () => {
    const nome = prompt("Digite o nome do país: ")
    const sigla = prompt ("Digite a sigla do paaís: ").toUpperCase()
    
    if(ValidarPais({nome, sigla})){
   return{nome, sigla}
    }

    console.log("Dados invalidos!")
}


const criarPais = () => {
    const pais = modelo()

    if(pais != undefined){
        pais.push({nome, sigla})
console.log("Pais criado com sucesso!")
    }
    
}


const listarPais =  () => {
    if(pais.length == 0){
        console.log("Nenhum pais cadastrado!")
    }else{
        
        paises.forEach((pais, indice)=> {
            console.log(indice + 1, pais)

        })
    }}

    const atualizarPais = () => {

listarPais()
if (paises.length > 0 ){

const indice = prompt("Digite o pais que deseja atualizar: ")


}


    }
