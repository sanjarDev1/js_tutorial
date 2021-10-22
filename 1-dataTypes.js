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

// Math kutubhonasi ESX da chiqgan yangi kutubhona
// abs absolyut qiymat qaytaradi doim + son chiqadi
console.log(Math.abs(-20))

// pow darajaga ko`taradi; 
console.log(Math.pow(3,3));

// kasr sonni butun songachca yahlitlaydi kasrning birinchi honasi 5dan katta va 5 ga teng bolsa butun songa 1 qoshadi
console.log(Math.round(12.5));

// ceil - patalok degani
// kasr son chiqsa har qanday qiymatda ham butun songa 1 qoshib yahlitlaydi 
console.log(Math.ceil(12.1));


// kasr son nechchi bolshidan qat iy nazar butun sonni ozini chiqaradi 
console.log(Math.floor(15.9));

// sqrt ildiz chiqaradi

console.log(Math.sqrt(25));

// cbrt kub ildiz oladi

console.log(Math.cbrt(1000));

// min eng kichkina sonni oladi

console.log(Math.min(12,13,4,8,0,6,-1));

// max eng katta sonni oladi

console.log(Math.max(35,14,22,41,39));

// random 0 dan 1 gacha sonlar orasidan itiyoriy son chiqarib beradi
console.log(Math.random());

// parseIntni ichiga random funkisyani yozib 10 ga kopaytirilsa 0-9 gacha butun sonlarni chiqaradi
console.log(parseInt(Math.random() * 100));

