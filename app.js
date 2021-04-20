let value = prompt('Deseja calcular Celsius ou Fahrenheit: ')
let temp = 0;
var part1;
var part2;
var part3;

switch (value) {
    case 'Celsius':
    case 'C':
    case 'c':
    case 'celsius':
        temp = prompt('Digite os Fahrenheit: ')
        part1 = temp - 32
        part2 = part1 * 5
        part3 = part2 / 9
        console.log(`${temp} graus Fahrenheit equivale a ${part3} graus Celsius`);
        break;
    case 'Fahrenheit':
    case 'F':
    case 'f':
    case 'fahrenheit':
        temp = prompt('Digite os Celsius: ')
        part1 = temp * 9
        part2 = part1 / 5
        part3 = part2 + 32
        console.log(`${temp} graus Celsius equivale a ${part3} graus Fahrenheit`);
        break;

}