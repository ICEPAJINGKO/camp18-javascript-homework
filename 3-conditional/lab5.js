const incoming = Number(prompt("Enter your number"));

if (incoming > 0) {
  alert("Positive number")
} else if (incoming == 0) {
  alert("Zero")
} else if (incoming < 0) {
  alert("Negative number")
} else {
  alert("Invalid number")
}

/*
Lab5 Conditional: Fundamental3
- จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลข
- ถ้า input มากกว่า 0 ให้โชว์ข้อความ “Positive number”
- ถ้า input เท่ากับ 0 ให้โชว์ข้อความ “Zero”
- ถ้า input น้อยกว่า 0 ให้โชว์ข้อความ “Negative number”
- ถ้า input ที่รับเข้ามาไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”
*/