


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