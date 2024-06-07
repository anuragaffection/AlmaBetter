{
    /**
     *   Unix operating system
     * 
     *   fractals - In mathematics, a fractal is a geometric shape containing 
     *              detailed structure at arbitrarily small scales, usually having 
     *              a fractal dimension strictly exceeding the topological dimension. 
     * 
     *   time complexity of recursive function 
     */
}




{
    /*
        41. Recursion 
        -- MDN web docs: Recursion
        -- https://dev.to/kalashin1/recursive-functions-in-javascript-b6a
        -- https://exploringjs.com/es6/ch_tail-calls.html

    */
}



{
    {
        console.log("01. Calculating factorial using recursion");
        console.log(factorial01Rec(5));

        function factorial01Rec(n) {
            if (n === 0) {
                return 1;
            }

            return n * factorial01Rec(n - 1);
        }
    }



    {
        console.log("01. Calculating factorial using loop ");
        console.log(factorial01Loop(5));

        function factorial01Loop(n) {
            if (n === 0) {
                return 1;
            }
            let result = 1;
            for (let i = 1; i <= n; i++) {
                result *= i;
            }
            return result;
        }
    }
}





{
    {
        console.log("02. Calculating fibonacci using loop");
        console.log(fibonacci02Loop(5));

        // here n is index of fibonacci sequence starting from 0
        // 0 1 1 2 3 5 8 13 21 34 - fibonacci
        // 0 1 2 3 4 5 6 7  8  9  - index 


        // time complexity - O (n) - linear
        function fibonacci02Loop(n) {
            let a = 1, b = 0, temp;
            while (n > 0) {
                temp = a;
                a = a + b;
                b = temp;
                n--
            }
            return b;
        }
    }

    {
        /*  In this case, the function is called 2^(n-1) times, as each call
            creates two more calls. Each call also performs addition. 
            Therefore, the time complexity of the Fibonacci function is O(2^n).
    
            time complexity = O ( 2 ^ n) - which is very high;
            space complexity = 
        */

        console.log("02. Calculating fibonacci using recursion");
        console.log(fibonacci02Recursion(5));

        function fibonacci02Recursion(n) {
            if (n === 0) {
                return 0;
            }

            if (n === 1 || n === 2) {
                return 1;
            }

            return fibonacci02Recursion(n - 1) + fibonacci02Recursion(n - 2);
        }

    }
}




{
    /*
     true or false
   
       01. Recursion and looping are two important concepts in programming. 
   
   
       02. Recursion is a technique in which a function calls another function 
           until it reaches a base case.
   
   
       03. Recursion can only be used to solve simple problems and cannot be 
           used to simplify complex problems.
   
   
       04. Each recursive call creates a new instance of the function 
           on the call stack. 
   
   
       05. Recursion can be used to simplify complex problems and 
           reduce the amount of code required to solve them. 
   
   
       Answers
       True
       False
       False
       True
       True
   
    */


    /*
       Agree/Disagree:
   
   
       01. Recursion is commonly used in JavaScript for traversing tree 
           structures. 
   
   
       02. The benefit of using recursion to traverse tree structures in
           JavaScript is not related to handling arbitrary levels of nesting
           within the tree. 
   
   
       03. QuickSort is a sorting algorithm but can't be implemented using 
           recursion. 
   
   
       04. Recursive functions call themselves and help solve problems that 
           can be broken down into smaller subproblems. 
   
   
       05. The Fibonacci sequence is an example of an iterative function.
   
   
       06. The Fibonacci sequence calculates the n-th term by adding the 
           previous two terms until it reaches the base case of the first 
           two terms, which are both 1. 
   
   
       Answers
        Agree
        Disagree
        Disagree
        Agree
        Disagree
        Agree
    */


}





{
    // Quiz 

    /*

      
      01. Which of the following is NOT required for a recursive function?

          a. Base case
          b. Recursive case
          c. Loop
          d. Function call
  
  
  
  
      02. Which of the following is an example of a recursive data structure?

          a. A linked list
          b. An array
          c. A stack
          d. A queue
  
  
  
  
      03. What is a base case in a recursive function?

          a. The first case of a loop
          b. The last case of a loop
          c. A condition that stops the recursive process
          d. A condition that starts the recursive process
  

  
  
  
      04. What is the time complexity of a recursive function that calls itself n times?

          a. O(1)
          b. O(log n)
          c. O(n)
          d. O(n^2)
  

  
  
  
      05. Which of the following is an example of a recursive algorithm?
      
          a. Bubble sort
          b. Binary search
          c. Insertion sort
          d. Selection sort
  
  

  
  
      06. What is the output of the following code? 

            function sumNumbers(n) {

              if (n === 1) {
                return 1;
              } 
              else {
                return n + sumNumbers (n-1);
              }

            } 
            console.log(sumNumbers (4));
  
  
          a. 4
          b. 6
          c. 10
          d. 15
  
  

  
  
        07. What is the space complexity of a recursive function that calls itself n times?

          a. O(1)
          b. O(log n)
          c. O(n)
          d. O(n^2)
  

  

  
        08. Which of the following is an example of a recursive function?
  
          a. A function that sorts an array
          b. A function that calculates the sum of an array
          c. A function that counts the number of elements in an array
          d. A function that prints out the elements of an array
  
  
  
  
  
  
        09. What is the output of the following recursive function?
  
  
          function fibonacci(n) {
                if (n = 1) {
                    return n;
                }
                return fibonacci(n-1)+ fibonacci(n-2);

            }
           console.log(fibonacci(6));
  
  
            a. 6
            b. 8
            c. 13
            d. 21
  
  

  
        10. Which of the following is NOT a benefit of recursion?

            a. It can simplify code
            b. It can make code easier to understand
            c. It can be faster than iteration
            d. It can be used to solve certain types of problems more easily
  
  
  

        01-Loop
           Recursion does not require a loop, as it achieves repetition by calling the function itself. The key components of a recursive function are the base case, which defines the smallest problem that can be solved without recursion, and the recursive case, which breaks down the problem into smaller subproblems that are solved using the same function. The function call is also a crucial component, as it allows the function to call itself to solve the subproblems.
  

  
        2- A linked list
           Yes, that's correct. A linked list is an example of a recursive data structure because each node in the linked list contains a reference to another node, creating a chain-like structure. This recursive definition is what allows for dynamic memory allocation and flexible data structures.
  
  
  
  
        3- A condition that stops the recursive process
           A base case in a recursive function is a condition that stops the recursive process. When a recursive function is called, it checks whether the base case is true or not. If the base case is true, the function stops the recursion and returns a value. If the base case is false, the function continues with the recursive calls until the base case is reached. In this way, the recursion process is terminated, and the final output is returned. It is essential to have a base case in a recursive function to prevent infinite recursion and stack. overflow errors.
  
  
  
        4- O(n)
           The time complexity of a recursive function that calls itself n times is O(n), as the function executes n times, and the time complexity increases linearly with the input size n.
  

  
        5- Binary search
           Yes, the correct answer is Binary search. Explanation: A recursive algorithm is an algorithm that calls itself with smaller subproblems until a base case is reached. Binary search is a classic example of a recursive algorithm. Binary search algorithm works by repeatedly dividing the search interval in half, and checking if the target value is in the left or right half. This process continues recursively on the remaining half until the value is found or the interval becomes empty. The algorithm calls itself with smaller subproblems until a base case is reached, which is when the target value is found or the interval is empty.
  

  
        6- 10
           Here's how the function works: The base case is when n is equal to 1, in which case the function returns 1. For any other value of n, the function returns the sum of n and the result of calling the function recursively with n-1. So when we call sumNumbers(4), the function returns 4+ sumNumbers(3). To evaluate sumNumbers(3), the function returns 3 + sumNumbers(2), and so on until we get to sumNumbers(1) which returns 1. So the final result is 4 + 3 + 2 = 10
  
  
  
        7- Correct Answer O(n)
           The space complexity of a recursive function that calls itself n times is O(n), as each recursive call creates a new stack frame on the call stack, which takes up memory. The amount of memory used on the call stack is proportional to the number of recursive calls made, which is n in this case, so the space complexity is O(n).
  
  
  
        8 - A function that calculates the sum of an array
            A recursive function is a function that calls itself until it reaches a base case. An example of a recursive function is a function that calculates the sum of an array. The function can call itself on smaller and smaller parts of the array until it reaches a base case of a single element, and then return the sum of that element. Therefore, the correct answer is B.
  
  

  
        09 - 8
            The output of fibonacci(6) is 8.

  
  
        10 - It can be faster than iteration
            Correct! Recursion is generally slower than iteration due to the overhead of creating and managing function calls on the call stack.
  
  
      */
}