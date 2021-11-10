// 3. Object qiymatlari va kalitlari bir xillari borligini tekshirish

const data = { b: 2, a: 1, };
const data2 = { b: 2, c: 1, };
const data3 = { c: 3, b: 5 };

const checkSame = (value1, value2) => {
    if (
        Object.values(value1).toString() === Object.values(value2).toString() ||
        Object.keys(value1).toString() === Object.keys(value2).toString()
    ) {
        return true;
    } else {
        return false;
    }
};

console.log(checkSame(data, data2));
console.log(checkSame(data2, data3));