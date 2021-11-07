// ######################################### FILA DE CARROS ###########################################################################

let fila = []

// ######################################### FUNÇÃO PARA CONTROLE DO TAMANHO DA FILA ###########################################################

function Controle() {
    document.getElementById("controle").innerHTML = "";
    document.getElementById("controle").innerHTML = "PREENCHIMENTO DA FILA " + fila.length + "/5";
}

// ######################################### FUNÇOES PARA ENFILEIRAR ###########################################################################

/* ### Função comum (Mensagem Padrão)------------>*/ function telaPadrao() {
    document.getElementById("mostrar").innerHTML = ""
    document.getElementById("mostrar").innerHTML = "<h1  class='boasVindas'>SIMULADOR DE FILA</h1><h2  class='boasVindas'>NAVEGUE PELO MENU ACIMA PARA INTERAGIR COM O SISTEMA.</h2>";
}

/* ### Função comum (Coleta de dados)------------>*/ function ColetaDados() {
    this.fabricante = window.prompt("Informe o Fabricante: ");
    this.modelo = window.prompt("Informe o modelo: ");
    this.unidVend = Number(window.prompt("Informe a quantidade de unidades vendidas: "));
    this.precoMin = Number(window.prompt("Informe o preço mínimo: ")).toFixed(2);
    this.precoMax = Number(window.prompt("Informe o preço máximo: ")).toFixed(2);
}

function Enfileirar() {

    telaPadrao();

    if (fila.length >= 5) {

        window.alert("A fila está cheia! Não é possível inserir mais nenhum elemnto.")
    } else {

        fila.push(new ColetaDados())
    }

    Controle();
}

// ######################################### FUNÇÃO COMUM DE ORDENAÇÃO #######################################################################

function Ordenacao() {

    let tabela = "";

    for (let i = 0; i < fila.length; i++) {
        tabela += "<div class = 'colab'>"
        tabela += "Fabricante: " + fila[i].fabricante + "<br/>";
        tabela += "Modelo: " + fila[i].modelo + "<br/>";
        tabela += "Undidades Vendidas: " + fila[i].unidVend + "<br/>";
        tabela += "Preço Mínimo: R$ " + fila[i].precoMin + "<br/>";
        tabela += "Preco Máximo: R$ " + fila[i].precoMax + "<br/>";
        tabela += "</div>"

    }

    document.getElementById("mostrar").innerHTML = tabela;

}


// ######################################### FUNÇÃO PARA DESENFILEIRAR ###############################################################

/* ### Função comum (Verificar se ainda existe elementos na fila, de imediato) ------------>*/ function condicionalExibicao() {
    if (fila.length === 0) {
        telaPadrao();
    } else {
        Ordenacao()
    }
}

function Desenfileirar() {

    document.getElementById("controle").innerHTML = "";

    if (fila.length === 0) {

        window.alert("Não é possível desenfileirar, pois a fila está vazia.");
        telaPadrao();
    } else {

        fila.shift();
        condicionalExibicao();
    }

    Controle();
}

// ######################################### FUNÇÃO PARA EXIBIR ELEMENTOS DA FILA ##############################################################

function ExibirElementos() {

    document.getElementById("mostrar").innerHTML = "";

    if (fila.length === 0) {

        window.alert("Não é possível exibir os elementos, pois a fila está vazia.");
        telaPadrao()
    } else {

        Ordenacao()
    }

    Controle();
}


