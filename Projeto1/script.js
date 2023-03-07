function entrar(){
    var area = document.getElementById('area');
    var text = prompt('Digite o seu nome:');

    if(text == '' || text == null){
        alert('Digite seu nome novamente!');
        area.innerHTML = 'Bem vindo...';
    }else{
        area.innerHTML = 'Bem vindo ' + text;
    }
}