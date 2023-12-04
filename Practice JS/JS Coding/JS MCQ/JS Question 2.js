const obj = {
  name: "Test",
  getName: () => {
    return `Hi ${this.name}`;
  },
};

const log = Object.create(obj);
console.log(log); // {}
console.log(log.name); // Test
console.log(log.getName()); // Hi undefined
