//GENERICS:
//com os generics se tem uma forma de passar tipos como parametros, então consegue deixar
//a tipagem, de funções, variaveis, mais dinamica

//o T é um parametro que a gente consegue passar quando a gente chama essa função
const returnValue = <T>(value: T) => value;

const message = returnValue<string>("Hello World");
const count = returnValue<number>(5);

const returnValue2 = <T, X, Z>(value: T) => value; //da pra passar mais generics
const message2 = returnValue2<string, boolean, number>("Hello World");

//da pra fazer em funções normais tbm, sem ser arrow function
function getFirstValueFromArray<Type>(array: Type[]) {
  return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray<number>([1, 2]);

//PROMISES:

const returnPromise = async (): Promise<number> => {
  return 5;
};

//DA PRA USAR GENERICS COM CLASSES

class GenericNumber<T> {
  zeroValue: T;
  sum: (x: T, y: T) => T;

  constructor(zeroValue: T, sum: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.sum = sum;
  }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => {
  return x + y;
});
