let data = {};

while (true) {
    let key = prompt("Enter key");
    let value = prompt("Enter value");
    if (key === "stop" || value === "stop") {
        break;
    }
    data[key] = value;
}
console.log(data);

/*
Lab9 Object: the sentinel
- ให้เขียนโปรแกรมที่รับค่ามาเป็น  key และ value  ของ Object หนึ่งไปเรื่อยๆ
- จนกว่าผู้ใช้จะพิมพ์คำว่า stop ถึงหยุด
- ให้นำค่าเหล่านั้นมาสร้าง Object
- จากนั้น log object นั้นออกมา
*/