// task_1/js/main.ts

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

const director1: Directors = {
    firstName: 'Jane',
    lastName: 'Doe',
    location: 'California',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

  
console.log(teacher3);
  
  // should print
  // Object
  // contract: false
  // firstName: "John"
  // fullTimeEmployee: false
  // lastName: "Doe"
  // location: "London"
console.log(director1);
    
    // should print
    // Object
    // firstName: "Jane"
    // lastName: "Doe"
    // location: "California"
    // fullTimeEmployee: true
    // numberOf
