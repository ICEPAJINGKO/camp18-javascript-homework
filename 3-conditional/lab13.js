const input = prompt("Enter your number");

switch (input) {
  case "1":
    alert("One");
    break;
  case "0":
    alert("Zero");
    break;
  case "-1":
    alert("Minus");
    break;
  default:
    alert("Invalid number");
}

/*
Lab13 Conditional: Fundamental6
- จงเขียนโค้ดเพื่อรับ input
- ถ้า input = 1 ให้ alert “One”
- ถ้า input = 0 ให้ alert “Zero”
- ถ้า input = -1 ให้ alert “Minus”
- ถ้าไม่ใช่ค่าที่กล่าวมาให้ alert “Invalid number”
- ให้เขียนโดยใช้ switch case
*/