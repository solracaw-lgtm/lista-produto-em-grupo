const prompt = require("prompt-sync")();

// Estrutura para armazenar os produtos
let produtos = [];

// Função para cadastrar produto
function cadastrarProduto() {
    console.log("Cadastro de Produto");
    let nome = prompt("Nome do produto: ");
    let quantidade = parseInt(prompt("Quantidade em estoque: "));
    let preco = parseFloat(prompt("Preço unitário: R$ "));

    if (isNaN(quantidade) || isNaN(preco)) {
        console.log("Quantidade e preço devem ser numéricos!");
        return;
    } else if (preco < 0) {
        console.log("O preço não pode ser negativo!");
        return;
    }

    produtos.push({ nome, quantidade, preco });
    console.log("Produto cadastrado com sucesso!");
}

// Função para exibir lista de produtos
function listarProdutos() {
    console.log("Lista de Produtos");
    if (produtos.length === 0) {
        console.log("Nenhum produto cadastrado.");
    } else {
        produtos.forEach((p, i) => {
            console.log(`${i + 1}. ${p.nome} - Quantidade: ${p.quantidade}, Preço: R$ ${p.preco}`);
        });
    }
}

// Função para calcular total em estoque
function calcularTotalEstoque() {
    console.log("Total em Estoque");
    if (produtos.length === 0) {
        console.log("Nenhum produto cadastrado.");
    } else {
        produtos.forEach((p) => {
            let total = p.quantidade * p.preco;
            console.log(`${p.nome}: ${p.quantidade} x R$ ${p.preco.toFixed(2)} = R$ ${total.toFixed(2)}`);
        });
    }
}



// Função do menu principal
function menu() {
    let opcao = "";

    do {
        console.log("MENU PRINCIPAL");
        console.log("1 - Cadastrar produto");
        console.log("2 - Listar produtos");
        console.log("3 - Calcular total em estoque");
        console.log("0 - Sair");

        opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                cadastrarProduto();
                break;
            case "2":
                listarProdutos();
                break;
            case "3":
                calcularTotalEstoque();
                break;
            case "0":
                console.log("Saindo do programa...");
                break;
            default:
                console.log("Opção inválida!");
        }

    } while (opcao !== "0");
}

// Inicia o programa
menu();