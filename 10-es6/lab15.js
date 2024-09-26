let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659,
};
let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 } เพราะอยู่ตำแหน่งที่เหลือ

/*
Lab 15 ES6: result5
ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};
let { numPlanets, ...discoveryYears } = planetFacts;
console.log(discoveryYears); // *
*/
