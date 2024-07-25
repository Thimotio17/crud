criarPais();
listarPaises();
atualizarPais();
removerPais();


const prompt = require("prompt-sync")();

const paises = [];

const lerIndece = () => {
    const indice = parseInt(prompt("Digite o índice: "));
    return indice - 1;
};

const ValidarPais = pais => pais.nome !== "" && pais.sigla.length === 2;

const modelo = () => {
    const nome = prompt("Digite o nome do país: ");
    const sigla = prompt("Digite a sigla do país: ").toUpperCase();
    
    if (ValidarPais({nome, sigla})) {
        return {nome, sigla};
    }

    console.log("Dados inválidos!");
};

const criarPais = () => {
    const pais = modelo();

    if (pais !== undefined) {
        paises.push(pais);
        console.log("País criado com sucesso!");
    }
};

const listarPaises = () => {
    if (paises.length === 0) {
        console.log("Nenhum país cadastrado!");
    } else {
        paises.forEach((pais, indice) => {
            console.log(indice + 1, pais);
        });
    }
};

const atualizarPais = () => {
    listarPaises();
    const indice = lerIndece();

    if (indice >= 0 && indice < paises.length) {
        const pais = modelo();
        if (pais !== undefined) {
            paises[indice] = pais;
            console.log("País atualizado com sucesso!");
        }
    } else {
        console.log("Índice inválido!");
    }
};

const removerPais = () => {
    if (paises.length > 0) {
        listarPaises();
        const indice = lerIndece();

        if (indice >= 0 && indice < paises.length) {
            paises.splice(indice, 1);
            console.log("País removido com sucesso!");
        } else {
            console.log("Índice inválido!");
        }
    } else {
        console.log("Nenhum país cadastrado para remover!");
    }
};


module.export = {

criarPais,
listarPaises,
atualizarPais,
removerPais,


}