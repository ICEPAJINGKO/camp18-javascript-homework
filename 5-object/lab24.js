class Sale {
    name = "";

    calcPrice(){
        return 0;
    }
}

class Beverage extends Sale{
    amount = 0;
    price = 0;
    discount = 0;

    constructor(name, amount, price, discount){
        super();
        this.name = name;
        this.amount = amount;
        this.price = price;
        this.discount = discount;
    }

    calcPrice(){
        return (this.amount * this.price * (1 - this.discount)).toFixed(2);
    }
}

const beverage = new Beverage("Pepsi", 3, 19, 0.1);
alert(beverage.calcPrice());

/*
Lab24 Object: Class Sale
ให้สร้าง Class ชื่อ Sale มี property และ method ดังนี้
- มี property ชื่อ name
- มี method calcPrice() ให้เขียน code คำนวณราคาหลังหักส่วนลด ไว้ที่ method นี้
ให้สร้าง Class ชื่อ Beverage สืบทอดมาจาก Sale
- มี property ชื่อ amount, price และ discount
ให้สร้าง object ชื่อ beverage จาก Beverage โดย
- name = “Pepsi”, amount = 3, price = 19 และ discount 10% (0.1)
- ให้ beverage เรียก method calcPrice() และแสดงผลของ calcPrice() ที่ได้
*/