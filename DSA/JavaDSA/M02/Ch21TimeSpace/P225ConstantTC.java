package Ch21TimeSpace;

/*
 * Notes 
 * -- constant time complexity, denoted as, tc = O(k), or tc = O(1)
 * -- here, k and 1, both represent constant 
 */

/*
 * Task 
 -- You have to find the first elements of an array 
 */

public class P225ConstantTC {
    public static void main(String[] args) {

        // case 01 
        int nums[] = { 1, 2, 3, 4, 5 };
        System.out.println(nums[0]); // 1
        // now, understand , we have total 5 elements in an array nums
        // while, operation, needed to find the first element is just single

        // case 02 
        int nums2[] = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};
        System.out.println(nums2[0]);// 10
        // now, understand , we have total 10 elements in an array nums
        // while, operation, needed to find the first element is just single

        System.out.println("We are going to understand Constant time complexity in details ");
    }

    /**
     * conclusion 
     * -- if carefully watch both case 1 & 2, we can notice, the finding the first elements from array does not depend on elements of an array 
     * 
     * -- here , finding the first element, just require single opertions 
     * 
     * -- so, time complexity , is constant 
     * -- time complexity, = O(k)
     */
}


// thank you 
// all the very best 
