const array = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
];

console.log(array.map((x) => x.name + " " + x.surname));

/*
Lab34 Array: array result6
ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)

const array = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]
*/
