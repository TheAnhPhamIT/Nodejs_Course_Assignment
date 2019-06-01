const students = [
  {
    name: 'Nam',
    age: 24,
    gender: 'male',
  },
  {
    name: 'Mai',
    age: 22,
    gender: 'female',
  },
  {
    name: 'Trang',
    age: 23,
    gender: 'female',
  },
  {
    name: 'An',
    age: 20,
    gender: 'male',
  },
  {
    name: 'Thien',
    age: 27,
    gender: 'male',
  },
];

var male = 0;
var female = 0;

students.forEach(value => {
  if(value.gender){
    value.gender === "male" ? male++ : female++;
  }
});
console.log("male number: "+male);
console.log("female number: "+female);
