//11. Formatação de Preço
//Crie uma função que recebe um número e retorna formatado em real (R$),
//  com duas casas decimais e vírgula no lugar do ponto. Ex: 10.5 → R$ 10,50. Use toFixed() e replace()
var prompt = require('prompt-sync')();
  
function formatacaoDePreco(preco) {
    return 'R$: ' + preco.toFixed(2).replace('.', ',');
  }
  console.log(formatacaoDePreco(10.5));
  