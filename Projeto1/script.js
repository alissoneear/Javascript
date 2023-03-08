
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