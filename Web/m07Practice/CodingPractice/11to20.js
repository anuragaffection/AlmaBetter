
{
    // 11 
    {
        function PrimeMover(num) {

            let counting = 2;
            let totalPrime = 0;

            while (true) {

                if (isPrime(counting)) {
                    totalPrime += 1;
                    if (totalPrime === num) {
                        return counting;
                    }
                }
                counting++;
            }

        }

        function isPrime(number) {
            if (number <= 1) {
                return false;
            }
            if (number === 2) {
                return true;
            }

            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    return false;
                }
            }

            return true;
        }
    }
}



{
    // 16
    // finding xor without xor symbol 
    {
        function myXOR(a, b) {
            return (a | b) & ~(a & b);
        }
    }

    {
        function myXOR(x, y) {
            return (x & (~y)) | ((~x) & y);
        }
    }
}




{
    // 17
    // sliding window concept here 
}




{
    // 20 
    // kth positive missing number 
    {
        var findKthPositive = function (arr, k) {
            let prev = 0;

            for (let i = 0; i < arr.length; i++) {
                const diff = arr[i] - prev - 1;
                if (k > diff) k -= diff;
                else return prev + k;
                prev = arr[i];
            }
            return prev + k
        };
    }



    {
        function findKthPositive(arr, k) {
            let left = 0;
            let right = arr.length - 1;

            while (left <= right) {
                const mid = left + Math.floor((right - left) / 2);

                // Calculate the number of missing elements before arr[mid]
                const missingBeforeMid = arr[mid] - mid - 1;

                // If the number of missing elements before arr[mid] is less than k,
                // it means the kth missing positive number is after arr[mid].
                if (missingBeforeMid < k) {
                    left = mid + 1;
                } else {
                    // Otherwise, the kth missing positive number is before or equal to arr[mid].
                    right = mid - 1;
                }
            }

            // The answer will be at position 'left' after the binary search.
            // Calculate the missing positive number by adding k to the value at 'left - 1'.
            // If 'left - 1' is out of bounds, it means the missing positive number is greater than arr[right],
            // so return arr[right] + k.
            return left + k;
        }

        // Example 1
        const arr1 = [2, 3, 4, 7, 11];
        const k1 = 5;
        console.log(findKthPositive(arr1, k1)); // Output: 9

        // Example 2
        const arr2 = [1, 2, 3, 4];
        const k2 = 2;
        console.log(findKthPositive(arr2, k2)); // Output: 6

    }
}