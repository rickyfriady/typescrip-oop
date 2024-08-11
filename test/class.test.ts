describe('Class', () => {
  class Custumer {
    constructor() {
      console.log('Custumer success created');
    }
  }
  class Order {}

  it('should can created an class', () => {
    const custumer: Custumer = new Custumer();
    const order: Order = new Order();
  });

  it('should can created constructor', () => {
    new Custumer();
    new Custumer();
  });
});
