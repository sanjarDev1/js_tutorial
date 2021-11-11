var ar = [1, 2, 8, 3, 5, 5, 8];

var i = 0;
var sorted = ar.sort();
while (ar.length > i) {
    console.log(ar);
    var spliced = sorted.splice(sorted.length - 2, 2);
    if (spliced[1] - spliced[0] !== 0) {
        ar.push(spliced[1] - spliced[0]);
        console.log(spliced);
    }
    sorted = ar.sort();
    i++;
}

if (ar[0] - ar[1] === 0) ar = [];
console.log(ar);