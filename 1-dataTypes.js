// console.log konsolga malumot chiqaradi

console.log("Hello world");

// Variables - O`zgaruvchilar
// ESX da chiqgan let const
// var
// let
// const

// O`zgaruvchilar quyidagi ma`lumotlarni oladi
// Number - raqamlar
// String - tekst 
// Boolean - true or false
// null - hech qanday qiymat bermaydi
// undefined - o'zgaruvchi e'lon qilib qiymat berilmasa
// Symbol - yangi versiyada chiqgan
// Object -
// Array -
// Function -


// Number.parseInt - qiymatning butun qismini qaytaradi;
// Number.parseFloat - kasr son chiqaradi;
var a = 15;
var b = 4;
console.log(Number.parseInt(a / b));
console.log(parseFloat(a / b));

// .toFixed() - yahlitlab beradi qavsni ichiga son berilsa kasrni  osha son honasigacha yahlitlaydi bundan qaytgan qiymat string bo`ladi;

//  
var a = 18.45
console.log(a.toFixed(2) );
console.log(parseFloat(a.toFixed(2))); // bunda qiymat numberda qaytadi;

// stringni raqamga aylantirish uchun parseInt yoki + ishlatiladi

var a = 10;
var b = "hello"

console.log(a + +b);
console.log(a - b); // stringni qiymatida son bo`lmaganda Number bilan amal bajarilsa NaN chiqadi Not a Number

// binary dan 10likga o`tkazadi
//  parseIntga 2 ta qiymat berilsa sanoq sistemalardagi sonni 10 lik sanoq sistemasiga o`tkazib beradi
console.log(parseInt(101010, 2));

// Numberdagi sonni toStringni ichidagi sonning sanoq sistemasiga o`tkazib beradi

console.log(Number(42).toString(2));







