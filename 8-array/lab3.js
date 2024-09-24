const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
]

let summary = sales.map((item) => {
    if(item.discount){
        return { netPrice: item.price - (item.price * item.discount) }
    }
    else{
        return { netPrice: item.price }
    }
})

console.log(summary)

/*
Lab3 Array: การสร้างตัวแปรจากตัวแปร1
จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales
netPrice = price x discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)
*/