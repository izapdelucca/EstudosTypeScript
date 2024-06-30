interface IPerson {
  id: number;
  sayMyName(): string;
}

class Person implements IPerson {
  readonly id: number;
  protected name: string; // faz com que a variavel so possa ser acessada dentro da sua classe ou subclasse
  private age: number; //só pode ser acessada dentro da classe

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    return this.name;
  }
}

class Employee extends Person {
  constructor(id: number, name: string, age: number) {
    super(id, name, age);
  }

  whoAmI() {
    //return this.age //nao da pra acessar age por ser private, mas da pra acessar name
    return this.name;
  }
}

const person1 = new Person(1, "Adriana", 50);
//person1.id = "32"; //nao da pra alterar por ser readonly

//FORMA MELHOR DE DECLARAR CLASSES, Shorthand para Construtores de Classes:
//MESMA COISA QUE AS OUTRAS FORMAS DE FAZER CLASSES

class PersonRefact {
  constructor(
    readonly id: number,
    protected name: string,
    private age: number
  ) {}
}
