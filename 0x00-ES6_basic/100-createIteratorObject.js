export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees).flat();
  let index = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (index < allEmployees.length) {
        return { value: allEmployees[index++], done: false };
      }
      return { done: true };
    },
  };
}
