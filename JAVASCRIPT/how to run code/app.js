//map
let newarray = [1,2,3,4,5];
let squaredarray = newarray.map((num) => num*5);
console.log(squaredarray);

//filter
let evennumbers =[1,2,3,4,5];
let filteredevennumbers = evennumbers .
filter(num => num % 2 === 0);
console.log(filteredevennumbers);

//accumulator(output mistake hogyi)
let sum = [1,2,3,4,5];
let total = ((accumulator, currentvalue) => accumulator + currentvalue, 0 );
console.log(total);

//map nd filter: continued---
let students = [
    { name: "alice",marks:85},
    { name: "bob",marks:92},
    { name: "charlie",marks:78}
];
let marks = students.map(student => student.marks);
console.log(marks);
let names = students.map(student => student.name);
console.log(names);

let topstudents = students.filter
(student => student.marks > 80);
console.log(topstudents);