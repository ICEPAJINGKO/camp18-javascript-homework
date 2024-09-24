var name = "Joe";
function makeUser() {
    return {
        name: "John",
        ref: this,
    };
}
let user = makeUser();
console.log(user.ref.name); // Joe เพราะ this อ้างอิงถึง window

/*
Lab19 Object: Guess Result4
บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร

var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser();
console.log(user.ref.name); // *
*/
