const inUserrname = prompt("Enter your username");

if (inUserrname === "") {
  alert("username is required");
} else {
  const inPassword = prompt("Enter your password");
  if (inPassword === "") {
    alert("password is required");
  } else {
    if (inUserrname === "admin" && inPassword === "1234") {
      alert("Hello admin");
    } else if (inUserrname === "john" && inPassword === "qwerty") {
      alert("Hello john");
    } else {
      alert("invalid username or password");
    }
  }
}

/*
Lab10 Conditional: Mini workShop - Validate Login
- จงเขียนโค้ดเพื่อรับ input เข้ามา 2 ค่า คือ username และ password
- หาก username หรือ password เป็นค่าว่างให้ โชว์ข้อความ “username is required” หรือ “password is required”
- หาก username = “admin” และ password = “1234” หรือ username = “john” และ password = “qwerty” ให้โชว์ข้อความ “Hello” ตามด้วยชื่อ username
- หาก username และ password ไม่ตรงตามเงื่อนไขที่กล่าวมาให้ โชว์ข้อความ “invalid username or password”
*/