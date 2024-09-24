function multiplyNumeric(obj, num) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= num;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

multiplyNumeric(menu, 3)
console.log(menu);

/*
Lab8 Object: multiplyNumeric
- ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object
- คูณเฉพาะ value ที่เป็น number เท่านั้น

let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};


menu = {
  width: 600,
  height: 900,
  title: 'My menu'
};
*/
