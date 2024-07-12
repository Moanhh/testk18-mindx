function firstRepeatingElement(a) {
    let map = new Map();
    for (let i = 0; i < a.length; i++) {
        if (map.has(a[i])) {
            return a[i];
        } else {
            map.set(a[i], true);
        }
    }
    return null;
}

let arr = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 10];


console.log(firstRepeatingElement(arr)); 