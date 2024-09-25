const array = [
    { name: "John", birth: "2001-07-31" },
    { name: "Jack", birth: "1990-06-24" },
    { name: "Jim", birth: "1984-12-13" },
    { name: "Jeff", birth: "1996-02-05" },
    { name: "Joe", birth: "2002-06-13" },
];

console.log(array.filter(item => {
    const birth = new Date(item.birth);
    return birth.getMonth() === 5;
}))

/*
Lab42 Array: array result14
ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter

const array = [
  { name: 'John', birth: '2001-07-31' },
  { name: 'Jack', birth: '1990-06-24' },
  { name: 'Jim', birth: '1984-12-13' },
  { name: 'Jeff', birth: '1996-02-05' },
  { name: 'Joe', birth: '2002-06-13' }
];
// เกิดเดือน 6
*/
