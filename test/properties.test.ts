describe('Properties', () => {
  class Customer {
    readonly id: number;
    name: string = 'defaultValueName';
    age?: number;
    constructor(id: number) {
      this.id = id;
    }

    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it('should have some properties', () => {
    const customer = new Customer(1);
    customer.age = 20;

    console.log('====================================');
    console.log('customer: ', customer);
    console.log('====================================');

    expect(customer.id).toBe(1);
    expect(customer.name).toBe('defaultValueName');
  });

  it('should have some methods', () => {
    const customer = new Customer(1);
    customer.sayHello('ricki');
  });
});
