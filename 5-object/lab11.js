function totalPrice(data) {
    return (data.quantity * data.price) - (data.discount || 0);
}

let data = {};

let pPame = prompt("Enter Product name");
let quantity = Number(prompt("Enter quantity"));
let price = Number(prompt("Enter  price"));;
let discount = Number(prompt("Enter discount"));

data['pPame'] = pPame;
data['quantity'] = quantity;
data['price'] = price;
if (discount) data['discount'] = discount;

console.log(totalPrice(data));

/*
Lab11 Object: shopping Cart
- ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์
- นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา 
- ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด
- สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)
*/
