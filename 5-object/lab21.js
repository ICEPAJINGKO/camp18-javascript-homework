const calculator = {
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
Lab21 Object: Calculator2
ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
- read() ให้รับค่า input 2 ค่า
- sum() ให้ return ค่าผลบวกของเลขทั้งสอง
- mul() ให้ return ค่าผลคูณของเลขทั้งสอง
*/