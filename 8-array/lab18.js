function ojk(obj) {
    let total = 0;
    for (let key of Object.keys(obj)) {
        total += obj[key];
    }

    return total;
}

function ojv(obj) {
    let total = 0;
    Object.values(obj).forEach((o) => {
        total += o;
    });

    return total;
}

function oje(obj) {
    let total = 0;
    for (let [x, y] of Object.entries(obj)) {
        total += y;
    }

    return total;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

console.log(ojk(salaries));
console.log(ojv(salaries));
console.log(oje(salaries));

/*
Lab18 Array: คำนวณผลรวม
ให้คำนวณผลรวมของ salaries ใน object โดยใช้ Object.keys, Object.values และ Object.entries

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
*/
