// matndagi # ni orniga qavs qoyish;
let text = "Salom#Prep#uz"
var count = 1;
for (let i = 0; i < text.length; i++) {
    // if (count % 2 == 1) {
        if (text[i] === '#') {
            text.replace(text[i], '(');
            count++
        }
    // }
    // else {
        if (text[i] === '#') {
            text.replace(text[i], ')');
            count++;
        }
    }
// }
console.log(text);