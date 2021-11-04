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


function insertWhitespace(str) {
    let list = []
    let splitted = str.split("")
    splitted.forEach(item => {
        if (item !== item.toLowerCase()) {
            list.push(" " + item)
        }
        else {
            list.push(item)
        }
    })
    return list.join('').trim();
}
console.log(insertWhitespace("MarvinTalksTooMuch"))
console.log(insertWhitespace("SheWalksToTheBeach"))
console.log(insertWhitespace("TheGreatestUpsetInHistory"))