export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees).flat();
  let index = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (index < allEmployees.length) {
        const value = allEmployees[index];
        index += 1;
        return { value, done: false };
      }
      return { done: true };
    },
  };
}
