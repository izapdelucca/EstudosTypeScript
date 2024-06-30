//COISAS QUE SÓ TEM NO TYPESCRIPT (nn tem no js)

//TIPOS BÁSICOS:

//mesmo se não definir o tipo da variavel, o typescript vai definir baseando no valor atribuido
let age: number = 5; //tipagem de age para number
//age = '5'; //da erro por ser de tipo 'string' e não 'number'
console.log(age);

const firstName: string = "Miguel";
const isValid: boolean = true;
let idk: any = 5; //any pode assinalar pra qualquer tipo

idk = "12";
idk = true;

const ids: number[] = [1, 2, 3, 4, 5]; //'number[]' fala pro ts que é uma lista de numeros
const booleans: boolean[] = [true, false, true, false];
const names: string[] = ["Izabella", "Adriana", "Miguel", "Bruna"];

//TUPLA:
//tipo de variavel que se usa quando quer uma variavel que tenha um determinado tipo de
//valor em uma determinada ordem

const person: [number, string] = [1, ""]; //usa-se quando quer garantir uma ordem de valores

//LISTA DE TUPLAS:
const people: [number, string][] = [
  [1, ""],
  [2, ""],
  [3, ""],
];

//INTERSECTIONS:
//é quando quer que uma varivael tenha de um tipo, ou de outro.
//por exemplo quer que uma variavel seja ou string ou number.

const productId: string | number | boolean = false; //consegue assinalar ou um numero ou uma string

//ENUM:
//é bom em situações que se tem, por exemplo, um valor que sempre vai ser atribuido a outro valor

enum Direction {
  Up = 1,
  Down = 2,
  Left = "Esquerda",
}

const direction = Direction.Left;

console.log(direction);

//TYPE ASSERTIONS:
//quando quer mudar o tipo de uma variavel, quando quer tratar uma variavel que é de
//determinado tipo, como um tipo diferente.

const productName: any = "Boné";

//igualou itemId à productName, mas productName é any e quer que itemId seja uma string
let itemId = productName as string;
//outra forma de fazer:
let itemId2 = <string>productName;
