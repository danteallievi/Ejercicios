/*
Escribe un programa que indique si un número es par o impar.
(Pista: Un número es par si al dividirlo entre 2, se obtiene como resto el 0. Si 4 % 2 == 0 es par, sino es impar).
*/
let numeros = [1, 2, 5];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log('Numeros pares: ', numeros[i]);
  }
}
