function binarySearch(a, x) {
    let low = 0;
    let high = a.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (a[mid] === x) {
            return mid;
        }
        if (a[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 3));