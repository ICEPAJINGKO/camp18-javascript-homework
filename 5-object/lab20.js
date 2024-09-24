let calculator = {
    a: 0,
    b: 0,
    read() {
        this.a = +prompt("a = ");
        this.b = +prompt("b = ");
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

/*
Lab20 Object: Calculator1
ให้สร้าง Object calculator ซึ่งมี 3 method
- read() ให้รับค่า input 2 ค่า
- sum() ให้ return ค่าผลบวกของเลขทั้งสอง
- mul() ให้ return ค่าผลคูณของเลขทั้งสอง

"let calculator = {
  // ... your code ...
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());"
*/
