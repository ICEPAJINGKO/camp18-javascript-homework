function format(str) {
    let arr = str.split('-');
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            newArr.push(arr[i]);
        } else {
            newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
        }
    }

    return newArr.join('');
}

console.log(format('background-color'));

/*
Lab16 Array: การแปลงคำที่อยู่ในรูป dash-separated
จงเขียนฟังก์ชันในการแปลงคำที่อยู่ในรูปแบบ dash-separated เช่น background-color ให้อยู่ในรูปแบบ camelCase เช่น backgroundColor
*/