//OBEJTOS:

//TYPE:
//é basicamente um objeto, que pode definir quais propriedades esse objeto vai ter e quais sao os tipos dessas propriedades

type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email?: string; // o '?' faz ser opcional adicionar
  password: string;
  orders: Order[];
  register(): string; //em types e interfaces da pra definir uma propriedade como função
};

const user: User = {
  firstName: "Izabella",
  age: 18,
  //   email: "iza@gmail",
  password: "123",
  orders: [{ productId: "1", price: 200 }],
  register() {
    return "a";
  },
};

user.email; //pode ser nulo, ou seja, string ou undefined

const printLog = (message?: string) => {}; //message? = message: string | undefined

printLog(user.email);
//se message não tem o '?', da erro pq a printLog recebe uma mensagem de string,
//entretanto, o email pode ser string ou undefined, ou seja, o tipo não é compativel,
//outra forma de evitar este erro é fazendo:

const printLog2 = (message: string) => {};

printLog2(user.email!); //faz o ts ignorar a possibilidade do email ser undefined

//UNIONS
// basicamente une dois types

type Author = {
  books: string[];
};

const author: Author & User = {
  firstName: "Ciclano",
  age: 20,
  email: "cliclano@gmail.com",
  password: "2468",
  orders: [],
  books: ["1"],
  register() {
    return "b";
  },
};

//ASSINALAR UMA INTERSECTION COM TYPE:

// const grade: number | string = 1;

type Grade = number | string;
const grade: Grade = 1;

//INTERFACES:
//muito parecidas com types
//da pra usar unions tbm
//nao da pra fzr intersection

interface UserInterface {
  readonly firstName: string;
  email: string;
  login(): string;
}

const emailUser: UserInterface = {
  firstName: "User",
  email: "user@gmail.com",
  login() {
    return "a";
  },
};

//emailUser.firstName = "Usuario"; //é readonly então não da pra alterar depois de criar o objeto

interface AuthorInterface {
  books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
  firstName: "Author",
  email: "author2gmail.com",
  books: [],
  login() {
    return "a";
  },
};
