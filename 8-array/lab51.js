let flattened = [
    [0, 1],
    [2, 3],
    [4, 5],
];

console.log(flattened.reduce((a, b) => a.concat(b)));

/*
Lab51 Array: กระจาย element 
จงกระจาย element ที่ซ้อนกันอยู่ภายใน array ให้กระจายออกมาที่ element ชั้นนอกสุด

let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
];
// expected result: [0, 1, 2, 3, 4, 5]
*/
