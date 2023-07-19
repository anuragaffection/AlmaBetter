/*

01- Which step of Exponential Search involves doubling the search range?

Determining the search range

Performing binary search

Repeating or concluding

None of the above





02-
Which of the following is true about the worst-case space complexity of binary search?

The worst-case space complexity is O(1)

The worst-case space complexity is O(n)

The worst-case space complexity is O(log n)

The worst-case space complexity depends on the specific implementation








03-
Which of the following is true about the implementation of linear search?

Linear search can only be implemented using a loop

Linear search can only be implemented using recursion Linear search can be implemented using a

loop or recursion

Linear search cannot be implemented in JavaScript









04.
Which of the following is a disadvantage of Bubble Sort?

It has a time complexity of O(1).

It is highly efficient for large data sets.

It may require multiple passes through the entire list.

It has a space complexity of O(n).





05.
What is the key concept of Merge Sort?

Recursion

Looping

Swapping

Randomization







06.
Which sorting algorithm is used as a sub- routine in Radix Sort?

Quick Sort

Bubble Sort

Counting Sort

Merge Sort






7.
What is the time complexity of binary search?

O(1)

O(n)

O(log n)

O(n log n)







08.
Which step in the Heap Sort algorithm involves arranging the elements of the array into a binary heap structure?

Extract the Maximum Element

Restore Heap Property

Build the Heap

Repeat the Process






09.
What is the time complexity of Selection Sort in the worst case?

O(1)

O(n)

O(n log n)

O(n^2)







10.
How are elements distributed into buckets in the Bucket Sort algorithm?

By dividing each element by the range of values and multiplying it by the number of buckets

By comparing each element with the minimum and maximum values in the array

By using another sorting algorithm, such as insertion sort

By recursively applying the bucket sort

algorithm to each bucket








11.
In which scenarios is Insertion Sort efficient?

When the number of elements is large and the input array is almost sorted.

When the number of elements is small and the input array is almost sorted.

When the input array has elements misplaced in a complete big array.

All of the above.






12.
What is a HashMap?

A collection of unordered key-value pairs

A collection of ordered key-value pairs


A collection of unordered value-key pairs

A collection of ordered value-key pairs








13.
What is the purpose of the Counting Sort algorithm?

To determine the maximum value in the input array

To sort the elements in ascending order

To determine the frequency of each

distinct element in the input array To compare the elements in the input

array





14.
Which search algorithm is used when the array is sorted?

Linear search

Binary search

Interpolation search

Exponential search.





15.
What is the space complexity of Merge Sort?

O(1)

O(n)

O(n^2)

O(log n)







16.
What is the most efficient sorting algorithm for sorting a dataset with many repeated elements?

Merge Sort

Quick Sort

Radix Sort

Bubble Sort






17.
How does Insertion Sort work?

By repeatedly swapping adjacent elements

By selecting the smallest element and swapping it with the first element

swapping it with the first element By repeatedly inserting an element into its correct position in a sorted list

By recursively partitioning the array into smaller sub-arrays






18.
What is the time complexity of Counting Sort?

O(n)

O(n log n)

O(K)

O(n + k)







19.
When should you use a HashMap?

When you need to store ordered data

When you need to perform complex mathematical operations

When you need to perform string manipulation

When you need to store key-value pairs






20.
Which sorting algorithm repeatedly compares adjacent elements and swaps them if they are in the wrong order until the list is sorted?

Bubble Sort

Selection Sort

Insertion Sort

Merge Sort







21.
Which step in the Counting Sort algorithm modifies the count array to store the cumulative count of each element?

Determine Range

Count Frequencies

Compute Cumulative Counts

Place Elements in Sorted Order





22.
When does Selection Sort terminate?

When the array is empty

When the array has only one element

When the entire array is sorted

When the array is sorted in reverse order





23.
What is the best-case time complexity of Ternary Search?

O(1)

O(log(n))

O(n)

O(log3(n))






24.
What is the space complexity of Exponential Search?

O(1)

O(log n)

O(n)

O(n^2)






25.
Which of the following is true about Radix Sort?

Radix Sort is a comparative sorting algorithm.

Radix Sort processes elements from the most significant digit to the least significant digit.

Radix Sort can only be applied to string representations.

Radix Sort has a time complexity of O(n log n).





26.
What is the time complexity of Radix Sort?

Review Later

O(n log n)

O(n)

O(n^2)

O(d * (n + k))





27.
What is the time complexity of Insertion Sort in average and worst cases?

O(n)

O(log n)

O(n^2)

O(1)







28.
What is the space complexity of Ternary Search?

O(n)

O(log(n))

O(1)

O(log3(n))






29.
Which search algorithm has a time complexity of O(n)?

Linear search

Binary search

Interpolation search

Exponential search







30.
What is the time complexity of linear search in the worst case?

O(1)

O(n)

O(log n)

O(n log n)






31.
What is a HashTable?


A collection of unordered key-value pairs

A collection of ordered key-value pairs

A collection of unordered value-key pairs

A collection of ordered value-key







32.
What is the space complexity of Selection

Sort?

O(n)

O(log n)

O(n^2)

O(1)






33.
What is the time complexity of Bubble

Review Later

Sort?

O(1)

O(log n)

O(n)

O(n^2)






34.
What are the practical applications of searching algorithms?

Sorting large datasets efficiently

Retrieving relevant information from databases

Generating random numbers

Converting decimal numbers to binary







35.
What is the space complexity of Quick Sort?

O(n)

O(log n)

O(n log n)

O(1)







36.
What is the time complexity of retrieving a value from a HashMap in the worst case?

O(1)

O(n)

O(log n)

O(n^2)







37.
What is the time complexity of Bucket Sort in the average case?

O(n + k)

O(n log n)

O(n^2)

O(log n)






38.
Which of the following is a common implementation of binary search?

Iterative implementation

Recursive implementation

Both iterative and recursive implementations are equally common 

There is no standard implementation of binary search






39.
What is the worst-case time complexity of the Jump Search algorithm?

O(n)

O(log n)

O(vn)

O(n²)




40.
Exponential Search combines elements of which two searching algorithms?

Linear search and bubble sort

Binary search and selection sort

Linear search and binary search

Bubble sort and insertion sort









Answer
1

Determining the search range

Explanation

This answer is correct!In the Exponential Search algorithm, the search range is initially set to a size of 1 and is gradually doubled by multiplying the index by 2 until an element greater than or equal to the target value is found or the end of the array is reached.





2.
The worst-case space complexity is O(1)

Explanation

This answer is correct!Binary search has a worst-case space complexity of O(1) because it only requires a few variables to keep track of the search space and mid element.






3.
Linear search can be implemented using a loop or recursion

Explanation

This answer is correct! Linear search can be implemented using a loop or recursion depending on the preference of the programmer.






4.
It may require multiple passes through the entire list.

Explanation

This answer is correct!Bubble Sort may require multiple passes through the entire list, comparing and swapping adjacent elements, until the list is fully sorted. This can make it inefficient, especially for large data sets.







5.
Recursion

Explanation

This answer is correct! Recursion Merge Sort is a recursive algorithm that repeatedly divides the array into smaller sub-arrays until each sub-array has only one element. Recursion is a key concept in Merge Sort.





6.
Counting Sort

Explanation

This answer is correct!Radix Sort uses Counting Sort as a sub-routine to sort the elements within each bucket. Counting Sort is a stable sorting algorithm that operates by counting the occurrences of each element and determining their correct positions in the output array. It is an efficient choice for sorting elements with a small range of values.





7.
O(log n)

Explanation

This answer is correct! Binary search has a time complexity of O(log n) because it eliminates half of the remaining elements at each step.






8.
Build the Heap

Explanation

This answer is correct!The step that involves arranging the elements of the array into a binary heap structure is called "Build the Heap." It is the first step in the Heap Sort algorithm.








9.
O(n^2)

Explanation

This answer is correct!O(n^2) The given text does not mention the time complexity of Selection Sort, but the average and worst-case time complexity of Selection Sort is O(n^2), where n is the number of elements in the array. This is because, in the worst case, the algorithm needs to make n-1 comparisons for the first element, n-2 comparisons for the second element, and so on, resulting in a total of (n-1) + (n-2)+...+1= n(n-1)/2 comparisons, which is O(n^2).









10.
By dividing each element by the range of values and multiplying it by the number of buckets

Explanation

This answer is incorrect!Elements are distributed into buckets in the Bucket Sort algorithm by dividing each element by the range of values and multiplying it by the number of buckets. This determines the index of the bucket into which the element is placed.







11.
When the number of elements is small and the input array is almost sorted.

Explanation

This answer is incorrect!Insertion sort is efficient in scenarios where the number of elements is small and the input array is almost sorted. This is because insertion sort has a time complexity of O(n^2), which makes it less efficient for larger arrays. However, when the number of elements is small and the array is already mostly sorted, insertion sort performs well as it requires fewer comparisons and swaps to sort the elements. In such scenarios, the time complexity of insertion sort can be close to linear, making it an efficient choice.







12.
A collection of unordered key-value pairs

Explanation

This answer is incorrect!HashMaps are data structures that store key-value pairs. They are similar to arrays, but instead of using integer indices to access the elements, they use keys. The keys are hashed to produce an index into an array of buckets, from which the corresponding value can be found.








13.
To determine the frequency of each distinct element in the input array

Explanation

This answer is incorrect!Counting Sort works by counting the occurrences of each distinct element in the input array.








14.
Binary search

Explanation

This answer is correct! Binary search is used when the array is sorted because it takes advantage of the sorted order to eliminate half of the remaining elements at each step.






15.
O(n)

Explanation

This answer is correct!The space complexity of Merge Sort is O(n), as it requires additional memory for merging the sub-arrays back together, which is proportional to the size of the input array.






16.
Radix Sort

Explanation

This answer is correct! Radix Sort. Radix Sort is a specialized sorting algorithm that is efficient for datasets with many repeated elements, such as datasets with a large number of duplicate keys. It has a time complexity of O(dn), where d is the number of digits or characters in the keys, making it efficient for certain types of data.







17.
By repeatedly inserting an element into its correct position in a sorted list

Explanation

This answer is correct!By repeatedly inserting an element into its correct position in a sorted list The given text explains that Insertion Sort builds up the sorted list by repeatedly inserting an element into its correct position in a sorted list, which is the main characteristic of Insertion Sort.







18.
O(n + k)

Explanation

This answer is correct!Counting Sort has a time complexity of O(n + k), where n represents the number of elements in the input array and k represents the range of values. It performs two passes over the input array and is not affected by the initial order of the elements.






19.
When you need to store key-value

pairs

Explanation

This answer is correct! HashMaps are designed specifically for storing key- value pairs. If you need to store ordered data, you might consider using an array or a linked list instead.








20.
Bubble Sort

Explanation

This answer is correct!Bubble Sort is a simple sorting algorithm that compares adjacent elements and swaps them if they are in the wrong order until the entire list is sorted.








21.
Compute Cumulative Counts

Explanation

This answer is correct!The step of computing cumulative counts modifies the count array to store the cumulative count of each element. Each count represents the number of elements that are less than or equal to the corresponding index.






22.
When the entire array is sorted

This answer is incorrect!When the entire array is sorted The given text mentions that Selection Sort repeats the process of selecting the smallest element and swapping it with the first element of the unsorted array until the entire array is sorted. Therefore, the algorithm terminates when the entire array is sorted.





23.
O(1)

Explanation

This answer is correct!The best-case time complexity of Ternary Search occurs when the target element is found at the first attempt, resulting in a constant time complexity.







24.
O(1)

Explanation

This answer is correct! Exponential Search is an in-place algorithm that does not require additional data structures. It operates directly on the input array, resulting in a constant space complexity of O(1).






25.
Radix Sort processes elements from the most significant digit to the least significant digit. Radix Sort can only be applied to string representations.

Explanation

This answer is incorrect!Radix Sort is a non-comparative sorting algorithm, which means it does not compare elements directly. It processes elements from the least significant digit to the most significant digit. Additionally, Radix Sort can be applied to both integer and string representations, not just strings






26.
O(d * (n + k))

Explanation

This answer is correct!The time complexity of Radix Sort is given by O(d * (n + k)), where d represents the number of digits or bits in the maximum element, n represents the number of elements in the input array, and k represents the range of values for each digit or bit. This complexity is linear with respect to the number of elements and the number of digits or bits being processed. Therefore, option D) O(d * (n + k)) is the correct answer.






27.
O(n^2)

Explanation

This answer is correct!The time complexity of Insertion Sort is O(n^2) in average and worst cases, and O(n) in the best case, while its space complexity is O(1).






28.
O(1)

79

Explanation

This answer is correct!Ternary Search has a space complexity of O(1) because it uses a constant amount of extra space and does not require additional data structures or recursion.







29.
Linear search.

Explanation

This answer is correct!Linear search has a time complexity of O(n) because it sequentially searches through each element in an array.






30.
Correct Answer

O(n)

Explanation

This answer is correct!In the worst case, the time complexity of linear search is O(n) because it has to search through each element of the array.







31.
A collection of ordered key-value

pairs

Explanation

This answer is correct!A HashTable is similar to a HashMap, but it maintains the order of insertion of the key-value pairs. This can be useful in certain situations where the order of the data is important.







32.
O(1)

Explanation

This answer is correct!The space complexity of Selection Sort is O(1), as it does not require any additional space or data structure for sorting, and all the operations are performed in-place.






33.
O(n^2)

Explanation

This answer is correct!Bubble Sort has a time complexity of O(n^2), as it compares and swaps adjacent elements in the list multiple times until the list is sorted. This makes it inefficient for large data sets.






34.
Retrieving relevant information from databases

Explanation

This answer is correct!Searching algorithms have practical applications such as database search, web search engines, file searching, genetic sequencing, artificial intelligence, information retrieval, recommendation systems, and data mining. These applications involve locating specific data or patterns efficiently.







35.
O(log n)

Explanation

This answer is correct!The space complexity of Quick Sort is O(log n). This represents the maximum amount of space required by the call stack to handle the recursive calls. However, Quick Sort is an in-place sorting algorithm, meaning it operates directly on the input array without requiring additional space proportional to the input size.







36.
Correct Answer O(n)

Explanation

This answer is incorrect!In the worst case, all of the keys in the HashMap could hash to the same index, resulting in a linear search through all of the key- value pairs in that bucket. This would take O(n) time.







37.
Correct Answer

O(n + k)

Explanation

This answer is correct!The average-case time complexity of Bucket Sort is O(n + k), where n is the number of elements in the input array and k is the number of buckets. When the elements are evenly distributed across the buckets, the average time complexity becomes linear.






38.
Recursive implementation

Explanation

This answer is correct!Although both iterative and recursive implementations of binary search are possible, the recursive implementation is more commonly used.







39.
Correct Answer

O(Vn)

Explanation

This answer is correct!The worst-case time complexity of Jump Search is O(vn), where n is the length of the array. This occurs when the target value is located at the last element of a block, and the algorithm performs a linear search within that block or reaches the end of the array.





40.
Linear search and binary search

Explanation

This answer is correct!Exponential Search combines the linear search algorithm (for determining the search range) and the binary search algorithm (for locating the exact position of the target value within the range).





*/