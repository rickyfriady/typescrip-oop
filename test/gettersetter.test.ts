describe('Getter and Setter', () => {
  class Category {
    _name?: string;

    get name(): string {
      if (this._name) {
        return this._name;
      } else {
        return 'empty';
      }
    }

    set name(value: string) {
      if (value != '') {
        this._name = value;
      }
    }
  }

  it('should on Setter and Getter', () => {
    const category = new Category();
    console.log('category setter and getter - 1 :', category.name);

    category.name = 'test food';
    console.log('category setter and getter - 2 :', category.name);

    category.name = '';
    console.log('category setter and getter - 3 :', category.name);
  });
});
