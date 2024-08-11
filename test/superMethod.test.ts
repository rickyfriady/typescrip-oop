describe('super method', () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Manager extends Employee {
    sayHello(name: string): void {
      //super method
      //cukup tambahkan super dan panggil methodnya dari parent class
      super.sayHello(name);
      console.log('and im your manager');
    }
  }
  it('should can super method', () => {
    const manager = new Manager('ricki');
    manager.sayHello('ricki');
  });
});
