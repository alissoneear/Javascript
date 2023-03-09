//includes -> verificar numa string, array, array de objetos etc, se existe o que você procura
let nomes = ["Alisson", "Lucas", "Kevin"];
console.log(nomes.includes('Alisson'));

//startsWith (CaseSensitive)
let nome = "Alisson";
console.log(nome.startsWith("Ali"));

//endsWith (CaseSensitive)
console.log(nome.endsWith("N"));

//some
console.log(nomes.some(nome => nome == "Alissn"));

//every -> todos precisão passar nos argumentos
let nomesObj = [
    { nome: "Alisson", idade: 25 },
    { nome: "Kevin", idade: 33 },
    { nome: "Henrique", idade: 17 }
];
console.log(nomesObj.every(nome => nome.idade >= 18));