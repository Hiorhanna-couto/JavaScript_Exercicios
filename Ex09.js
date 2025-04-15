//9. Verificar Palíndromo com Funções
//Crie uma função que verifica se uma palavra
//é palíndroma usando split(), reverse() e join().

function verificarPalindromo(palavra) {
    const palavraReversa = palavra.split('').reverse().join('');
    return palavra === palavraReversa;
  }

  console.log(verificarPalindromo('arara'));
  console.log(verificarPalindromo('olá')); 
  console.log(verificarPalindromo('anna')); 
  console.log(verificarPalindromo('ovo')); 
  console.log(verificarPalindromo('nene')); 

  