const hello = () => "Hello World";

class Person {
  constructor(public name: string) {}
  getName(): string {
    return this.name;
  }
}
