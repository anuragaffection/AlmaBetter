

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
}