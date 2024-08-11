describe('Inheritance', () => {
  //parent class
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  //child class but can be parent class for other class
  class Manager extends Employee {}

  //child class
  class Director extends Manager {}

  it('should definde inheritance', () => {
    const employee: Employee = new Employee('ricki as Employee');
    console.log('employee: ', employee);
    const manager: Manager = new Manager('ricki as Manager');
    console.log('manager: ', manager);
    const director: Director = new Director('ricki as Director');
    console.log('director: ', director);
  });
});
