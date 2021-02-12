/*
Declara una variable con el texto "Bootcamp" y pinta cada letra por consola, luego utiliza un bucle FOR para recorrer el string y traducirlo a lenguaje ballena de la siguente manera:
​Las ballenas no utilizan consonantes, por lo tanto no se sumara al mensaje de salida
Las vocales (a,e,i,o,u) prevalecen, es decir, se sumaran al mensaje de salida
la u y la o son dobles, es decir que debes sumarlas 2 veces de manera que el la salida sera algo asi: 
-> bootcamp => ooooa
-> mapamundi => aauui
una vez tengas el string traducido a lenguaje ballena, almacénalo en un array. Por ejemplo: aauui => ['a','a','u','u','i']

*/

// let palabra = 'mapamundi';
let palabra = 'Bootcamp';

let lenguajeBallena = '';

let array = [];

for (let i = 0; i < palabra.length; i++) {
  let letras = palabra[i];

  if (letras === 'o') {
    lenguajeBallena += 'oo';
  } else if (letras === 'u') {
    lenguajeBallena += 'uu';
  } else if (letras === 'a') {
    lenguajeBallena += 'a';
  } else if (letras === 'e') {
    lenguajeBallena += 'e';
  } else if (letras === 'i') {
    lenguajeBallena += 'i';
  }
}

for (let i = 0; i < lenguajeBallena.length; i++) {
  const element = lenguajeBallena[i];

  array.push(element);
}

console.log(array);
