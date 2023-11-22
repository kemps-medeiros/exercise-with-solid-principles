import { MyClass } from "./myclass";

describe('MyClass', () => {
  it('should add two numbers', () => {
    const myClass = new MyClass();
    const result = myClass.add(2, 3);
    expect(result).toBe(5);
  });
});
