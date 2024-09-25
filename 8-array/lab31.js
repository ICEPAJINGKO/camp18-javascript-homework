const array1 = [100, 200.25, 300.84, 400.3];
console.log(array1.map((x) => x.toFixed(2)));

const array2 = [0, 5, 10, 7, 6, 5, 0];
console.log(array2.map((x) => {
    switch (x) {
        case 0:
            return "Jan";
        case 1:
            return "Feb";
        case 2:
            return "Mar";
        case 3:
            return "Apr";
        case 4:
            return "May";
        case 5:
            return "Jun";
        case 6:
            return "Jul";
        case 7:
            return "Aug";
        case 8:
            return "Sep";
        case 9:
            return "Oct";
        case 10:
            return "Nov";
        case 11:
            return "Dec";
    }
}));

const array3 = [1, 16, 81, 256, 625, 1296];
console.log(array3.map((x, i) => i + 1));

/*
Lab31 Array: array result3
ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)

const array = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]

const array = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

const array = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
*/