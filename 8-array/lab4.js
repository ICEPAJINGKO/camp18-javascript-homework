let sum = 0;

while (true) {
    let num = +prompt("Enter a number: ");
    if (isNaN(num) || num == 0) {
        break;
    }

    sum += num;
}

console.log(sum);

/*
Lab4 Array: การรับ/เก็บค่าArray
ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
- รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
- ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array
*/
