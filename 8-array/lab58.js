const persons = [
    { name: "John", sex: "M" },
    { name: "Jody", sex: "M" },
    { name: "Susan", sex: "F" },
    { name: "Kate", sex: "F" },
    { name: "Sid", sex: "M" },
];
let result = {};

for (let i = 0; i < persons.length; i++) {
    if (result[persons[i].sex]) {
        result[persons[i].sex].push(persons[i].name);
    } else {
        result[persons[i].sex] = [persons[i].name];
    }
}

console.log(result);

/*
Lab58 Array: Group คนที่มีเพศเดียวกัน
จง Group คนที่มีเพศเดียวกันเข้าด้วยกัน

const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' }
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }
*/
