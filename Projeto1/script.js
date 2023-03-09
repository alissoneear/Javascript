
function entrar() {
    var area = document.getElementById('area');
    var text = prompt('Digite o seu nome:');

    if(text == '' || text == null){
        alert('Digite seu nome novamente!');
        area.innerHTML = 'Bem vindo...';
    }else{
        area.innerHTML = 'Bem vindo ' + text;
    }
}

//sessionStorage --é excluído quando fecha o navegador.
//localStorage --cookies que fica no navegador mesmo fechando o mesmo.
localStorage.clear();
if (!typeof localStorage.nomediv == "undefined") {
    localStorage.nomediv = prompt("Digite seu nome: ");
}
nomediv = localStorage.nomediv;
document.getElementById('nome').innerHTML = nomediv;


//Spread Operator
function cadastroPessoa(info) {
    let novosDados = {
        ...info,
        cargo: "Desenvolvedor",
        código: 45114795
    };
    return novosDados;
}
console.log(cadastroPessoa({ nome: "Alisson", sobrenome: "Silva", idade: 25 }));


//Rest Operator
function minhalista(...nomes) {
    console.log(nomes);
}
minhalista("Alisson", "Lucas", "Kevin");



//map percorre todos os itens de uma lista e retornar algo que a gente queira
const lista = [1, 2, 3, 4, 5, 6];
const listaMulti = lista.map(function (item) { return item * 5 });
console.log(listaMulti);

//map com index(posição do número no array)
const listaSumIndex = lista.map(function (item, index) { return item + index });
console.log(listaSumIndex);

//reduce -> pega o total que começa com 0 e soma com o próximo número e assim por diante, e retorna um número só.
const listaReduce = lista.reduce(function (total, proximo) { return total + proximo });
console.log(listaReduce);

//find -> ele retorna "undefined" caso não encontre o item na lista.
const listaFind = lista.find(function (item) { return item === 6; });
console.log(listaFind);


//função no modo normal:
function adicionar(...numeros) {
    let total = numeros.reduce(function (total, proximo) { return total + proximo });
    console.log(total);
};
adicionar(1, 2, 3, 4, 5);

//função anonima (retira o "function" e coloca "=>" depois dos parâmetros)
//  e se tiver uma linha só no return, tira o "return" e as "{}"
function adicionarAnonym(...numeros) {
    let total = numeros.reduce((total, proximo) => total + proximo);
    console.log(total);
};
adicionarAnonym(1, 2, 3, 4);



