/* 
Escribe un programa que muestre los números del 1 al 50 (pista: haz uso de un bucle for y de condicionales if else), con las siguientes excepciones:
 
Para los múltiplos de 3 muestra la palabra Fizz en lugar del número.
Para los múltiplos de 5 muestra la palabra Buzz en lugar del número.
Para los múltiplos de 3 y 5 muestra la palabra FizzBuzz en lugar del número.
*/

for (let i = 0; i <= 50; i++) {
  // const numeros = i;
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, 'Fizz buzz');
  } else if (i % 3 === 0) {
    console.log(i, 'Fizz');
  } else if (i % 5 === 0) {
    console.log(i, 'Buzz');
  }
}
