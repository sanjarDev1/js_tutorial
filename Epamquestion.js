var str = 'AAABBCEBALDSLLLLL'
// => 3A2BCEBALDS5L
var arr = [];
var sum = '';
var count = 0;

for (let i = 0; i < str.length; i++){
    if (str[i] === str[i + 1] || str[i] == str[i - 1]) {
        count++;
        
    }
    else 
    {
        console.log(count);
        count = 0;
   }
    // if () {
    // }
}
