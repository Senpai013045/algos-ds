// const quickSort = (items: number[]): number[] => {
//     if (items.length <= 1) {
//         return items;
//     }
//     const pivotValue = items[0];
//     const rest = items.slice(1);
//     const left: number[] = [];
//     const right: number[] = [];
//     for (let i = 0; i < rest.length; i++) {
//         const current = rest[i];
//         if (current < pivotValue) {
//             left.push(current);
//             continue;
//         }
//         right.push(current);
//     }
//     return quickSort(left).concat(pivotValue).concat(quickSort(right));
// }

//optimize space complexity

const swap = (items: number[], firstIndex: number, secondIndex: number) => {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

const partition = (items: number[], startIndex: number, endIndex: number): number => {
    const pivotValue = items[startIndex];
    let partitionIndex = startIndex;
    for (let i = startIndex + 1; i <= endIndex; i++) {
        const current = items[i];
        if (current < pivotValue) {
            partitionIndex++;
            swap(items, partitionIndex, i);
        }
    }
    swap(items, startIndex, partitionIndex);
    return partitionIndex;
}

const quickSort = (items: number[], start: number, end: number): number[] => {
    if (start >= end) {
        return items;
    }
    const partitionIndex = partition(items, start, end);
    quickSort(items, start, partitionIndex - 1);
    quickSort(items, partitionIndex + 1, end);
    return items;
}