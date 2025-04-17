//12. Sorteador de Nomes
//Peça uma lista de nomes separados por vírgula e 
// sorteie um aleatoriamente usando split() e Math.random().
var prompt = require('prompt-sync')();
  
let entrada = prompt ("Digite uma lista de nomes separados por vírgula :");

let frase = prompt("Voce deseja Sorteado o nome  : ");

 let nomes = entrada.split(",").map(nome => nome.trim());

let IndiceSorteado = Math.floor(Math.random()* nomes.length);

let nomeSorteado = nomes[IndiceSorteado];

Math.random ("Nome Sorteado :" + nomeSorteado);


console.log(nomeSorteado);

//entrada.split(",")
