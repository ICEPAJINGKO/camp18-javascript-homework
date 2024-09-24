let data = {};

while (true) {
    let key = prompt("Enter key");
    let value = Number(prompt("Enter value"));
    if (key === "stop" || value === "stop") {
        break;
    }
    if(value > 1) key += "s";
    data[key] = value;
}
console.log(data);

/*
Lab10 Object: fruits Basket
- ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง 
- โดยให้ key เป็นชื่อของผลไม้ 
- value เป็นจำนวนของผลไม้ (number) 
- โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย
**ให้รับค่าผลไม้กับจำนวนผลไม้ไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์คำว่า stop [edit]
*/