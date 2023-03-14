const swap = <T>(arr: T[], i: number, j: number) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const bubbleSort = (numbers: number[]) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - 1 - i; j++) {
            const current = numbers[j];
            const next = numbers[j + 1];
            if (current > next) {
                swap(numbers, j, j + 1)
            }
        }
    }
}

const testArray = [1, 3, 5, 8, 5, 3, 2, 2];
bubbleSort(testArray)
console.log(testArray)
