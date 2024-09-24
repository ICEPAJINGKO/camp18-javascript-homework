class Calculator{
    value = 0;

    constructor(value){
        this.value = value;
    }

    add(num){
        this.value += num;
    }
    subtract(num){
        this.value -= num;
    }
    multiply(num){
        this.value *= num;
    }
    divide(num){
        this.value /= num;
    }
    show(){
        alert(this.value);
    }
}

/*
Lab23 Object: Class Calculator
ให้สร้าง Class ชื่อ Calculator มี property และ method ดังนี้
- value คือค่าตัวเลขปัจจุบัน (เริ่มต้นเป็น 0 หรือตามที่กำหนด) เช่น new Calculator(10) ให้ value มีค่าเท่ากับ 10
- add() ให้รับค่าตัวเลขและรวมผลรวมเข้าใน value
- subtract() ให้รับค่าตัวเลขและหักออกจาก value
- multiply() ให้รับค่าตัวเลขและคูณตัวเลขกับ value
- divide() ให้รับค่าตัวเลขและนำไปหาร value
- show() ให้ alert ค่า value
*/