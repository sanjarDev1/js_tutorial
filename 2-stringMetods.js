
// length - matnda nechta belgi borligini chiqaradi
var str = `Hello world`;
console.log(str.length);


// slice - matndan berilgan qiymat bo`ycha kesib oladi.

var str = `JavaScript`
console.log(str.slice(0, 10));

// substring - matndan berilgan qiymatlar bo`ycha kesib oladi

var str = `Javascrit`
console.log(str.substring(2,3));

// substr - berilgan sondan keyin qancha belgi kesib olishni bildiradi

var str = `Javascript`
console.log(str.substr(0, 9));

// padEnd - matndagi belgilar berilgan qiymat ga yetmaguncha 2-parametrda berilgan qiymatni ohirdan qo`shib ketadi

var str = "hello"
console.log(str.padEnd(10,'sa'));

// padStart - matndagi belgilar berilgan qiymat ga yetmaguncha 2-parametrda berilgan qiymatni boshida qo`shib ketadi


var str = "hello"
console.log(str.padStart(10,2));

// indexOf - berilgan qiymatni matnda nechinchi indexda ekanligini bildiradi 

var str = "hello"
console.log(str.indexOf("h"));

// lastIndexOf - indexof bilan bir hil

var str = "salom dunyo"
console.log(str.lastIndexOf("u"));

// 

