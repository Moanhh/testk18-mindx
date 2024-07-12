function reverseString (s) {
    let s1 = '';
    for (let i = s.length - 1; i >= 0; i--) {
        s1 += s[i];
    }
    return s1;
}

let str = 'JavaScript!';
console.log(reverseString(str)); 