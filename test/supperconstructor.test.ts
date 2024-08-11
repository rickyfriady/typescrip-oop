describe('Supper Constructor', () => {
  class Person {
    name?: string = 'defaultNamePerson';
    constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Person {
    deparment: string;
    constructor(name: string, deparment: string) {
      super(name);
      this.deparment = deparment;
    }
  }
  it('should definde constructor', () => {
    const employee = new Employee('ricki', 'IT');
    console.log('employee name: ', employee.name);
    console.log('employee deparment: ', employee.deparment);
  });
});
