//FUNÇÕES NO TYPESCRIPT:

//desse jeito deixa explicito que o retorno da função é number:
// const sum = (x: number, y: number): number => {
const sum = (x: number, y: number) => {
  return x + y;
};

// value é automaticamente tipado como number, pois a soma de dois numbers resulta em outro number
const value = sum(2, 3);
//sum("1", "2"); // da erro por nao ser tipo number

//DA PRA MANIPULAR O TIPO DO RETORNO:
const sum1 = (x: number, y: number): string => {
  return (x + y).toString(); //desse jeito tranforma x e y em string
};

// value é automaticamente tipado como string, pois foi determinado na função que o retorno é string
const value1 = sum1(2, 3);

//DA PRA USAR INTERSECTIONS NA FUNÇÃO:

const sum2 = (x: number, y: number): string | number => {
  //assim diz que vai retornar ou string ou number
  return (x + y).toString();
};

const value2 = sum2(2, 3);

////RETORNO VOID:
//função void é uma função que não retorna nada

const log = (message: string) => {
  console.log(message);
};

const log2 = (message: string): void => {
  console.log(message);

  //return message; //da erro pq void espera nenhum return
};

//USAR INTERFACES NA FUNÇÃO:

interface MathFunc {
  //toda função que implementar esta interface precisa receber o x, que é um number
  //e o y, que é um number e precisa retornar um number
  (x: number, y: number): number;
}

//da erro por ela retornar uma string ou um number, e nao somente number
// const sum3: MathFunc = (x: number, y: number): string | number => {

const sum3: MathFunc = (x: number, y: number): number => {
  return x + y;
};

const value3 = sum3(2, 3);

const sub: MathFunc = (x: number, y: number) => {
  return x - y;
};

const value4 = sub(2, 3);
