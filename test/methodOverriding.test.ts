describe('method overriding', () => {
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
      console.log(`Hello ${name}, my name is ${this.name}, im your manager`);
    }
  }
  it('should can override method', () => {
    const manager = new Manager('ricki');
    manager.sayHello('ricki');
  });
});
