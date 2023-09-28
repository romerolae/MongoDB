// data
const numbers = [2, 5, 3, 4, 6, 4, 6, 6, 8];

// map() lo que hace es recorrer c/u de los elementos del array

// multipliar cada elmento del array por 10

const funcionMultiplicar = (number) => number * 10;

const modifiedArray = numbers.map(funcionMultiplicar);


document.querySelector('#header').innerHTML = modifiedArray;

document.getElementById('header').style.color = 'green'



