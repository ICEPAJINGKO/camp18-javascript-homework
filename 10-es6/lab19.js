let user = {
    name: "John",
    years: 27,
};

let { name, years: age, isAdmin = false } = user;

/*
Lab 19 ES6: Object destructuring1
จงเขียน Object destructuring โดยกำหนดให้
- ตัวแปร name เก็บค่า name property
- ตัวแปร age เก็บค่า years property
- ตัวแปร isAdmin เก็บค่า isAdmin property หากไม่มีค่าให้ default value เป็น false

let user = {
  name: 'John',
  years: 27
};
*/
