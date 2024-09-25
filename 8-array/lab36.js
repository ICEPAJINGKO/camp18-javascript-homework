const array = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
];

console.log(
    array.map((x) => {
        let age = new Date().getFullYear() - new Date(x.birth).getFullYear();
        let month = new Date(x.birth).getMonth() + 1;
        let day = new Date(x.birth).getDate();
        let date = day + " " + month + " " + age;
        return `<tr><td>${x.name}</td><td>${date}</td></tr>`;
    })
);

/*
Lab36 Array: array result8
ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)

const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]
*/
