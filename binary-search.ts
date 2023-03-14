const binarySearch = (haystack: number[], needle: number) => {
    /**is inclusive */
    let low = 0;
    /**is exclusive */
    let high = haystack.length;
    while (low < high) {
        // dont forget to divide by 2
        const midpoint = Math.floor(low + (high - low) / 2);
        const current = haystack[midpoint];
        if (current === needle) {
            return midpoint
        } else if (needle < current) {
            high = midpoint;
        } else {
            low = midpoint + 1
        }
    }
}

console.log(
    binarySearch([0, 1, 2, 3, 4, 5], 5)
)