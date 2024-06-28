
{
    // 55
    // number of occurrence 
    {
        function countOccurrences(arr, X) {

            function firstOccurrence(arr, X) {
                let low = 0;
                let high = arr.length - 1;
                let first = -1;

                while (low <= high) {
                    let mid = Math.floor((low + high) / 2);
                    if (arr[mid] === X) {
                        first = mid;
                        high = mid - 1;
                    } else if (arr[mid] < X) {
                        low = mid + 1;
                    } else {
                        high = mid - 1;
                    }
                }

                return first;
            }

            function lastOccurrence(arr, X) {
                let low = 0;
                let high = arr.length - 1;
                let last = -1;

                while (low <= high) {
                    let mid = Math.floor((low + high) / 2);
                    if (arr[mid] === X) {
                        last = mid;
                        low = mid + 1;
                    } else if (arr[mid] < X) {
                        low = mid + 1;
                    } else {
                        high = mid - 1;
                    }
                }

                return last;
            }

            const firstIndex = firstOccurrence(arr, X);
            const lastIndex = lastOccurrence(arr, X);

            if (firstIndex === -1 || lastIndex === -1) {
                return 0; // X is not present in the array.
            }

            return lastIndex - firstIndex + 1;
        }
    }
}





{
    // 57 count the triplet 

    {
        // way = brute force 
        // Do not remove nor make any changes in  main() function
        function main() {
            var arr = readLine().split(" ").map(x => parseInt(x));
            console.log(countTriplets(arr));
        }
        function countTriplets(arr) {
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    let sum = arr[i] + arr[j];
                    if (arr.includes(sum)) {
                        count++;
                    }
                }
            }
            return count;
        }
    }




    {
        // way : optimised 
        // Do not remove nor make any changes in  main() function
        function main() {
            var arr = readLine().split(" ").map(x => parseInt(x));
            console.log(countTriplets(arr));
        }
        function countTriplets(arr) {
            let set = new Set(arr);

            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    let sum = arr[i] + arr[j];
                    if (set.has(sum)) {
                        count++;
                    }
                }
            }
            return count;
        }
    }
}