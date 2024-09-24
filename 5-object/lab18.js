let user = {
    name: "John",
    sayHi: function () {
        console.log(this.name);
    },
};

user.sayHi(); // John เพราะ this อ้างอิงถึง user

/*
Lab18 Object: Guess Result3
บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร

let user = {
  name: 'John',
  sayHi: function () {
    console.log(this.name);
  }
};

(user.sayHi)(); // *
*/
