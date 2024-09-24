function Accumulator(startingValue) {
    this.currentValue = startingValue;

    this.read = function () {
        const input = parseFloat(prompt("Enter a number to add:"));
        if (!isNaN(input)) {
            this.currentValue += input;
        } else {
            alert("Invalid input, please enter a number.");
        }
    };

    this.show = function () {
        alert(this.currentValue);
    };
}

let accumulator = new Accumulator(10);  // เริ่มต้นด้วยค่า 10
accumulator.read();  // รับ input จากผู้ใช้และบวกเข้ากับ currentValue
accumulator.show();  // แสดงค่า currentValue

/*
Lab22 Object: Accumulator
- ให้สร้าง Constructor Function: Accumulator(startingValue) มี property 
ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง) และมี method "
- read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
- show() ให้ alert ค่า currentValue
*/
