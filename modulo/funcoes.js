/*********************************************
 * Objetivo: Calcular o Fatorial de um número fornecido pelo usuário
 * Data: 26/09/2024
 * Autor: Hugo Lopes
 * Versão: 1.0
 *********************************************/

function calcularFatorial(numero) {
   
    if (numero === '') {
        return 'Entrada não pode estar vazia.';
    }

    let num = parseInt(numero);


    if (isNaN(num)) {
        return 'Por favor, insira um número válido.'
    }


    if (num == 0) {
        return 'Não existe fatorial de 0.'
    }


    if (num == 1) {
        return 'Não é possível calcular o fatorial de 1. Deve ser um número maior que 1.'
    }

   
    let fatorial = 1;
    for (let i = num; i > 1; i--) {
        fatorial *= i
    }

    return `Fatorial de ${num} é ${fatorial}`
}

console.log(calcularFatorial(5));