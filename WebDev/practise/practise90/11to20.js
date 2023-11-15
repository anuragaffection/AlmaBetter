

{
    // 15 
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
    // 16 
    // sliding window concept here 
}