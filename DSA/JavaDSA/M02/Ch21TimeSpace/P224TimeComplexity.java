package Ch21TimeSpace;

/*
 * What is time complexity 
 * -- it does not define the actual time taken by progrom to perform certain task 
 * -- it define the approx time going to be taken by program for certain task, based on inputs 
 * -- it will depend on how much operations is going to be perform 
 */

 /*
  * time complexity can be 
  -- constant = O(k)
  -- linear = O(n)
  -- quadratic = O(n*n)
  -- cubic = O(n * n * n)
  -- polynomil = O(n ^ x) = O(n ^4)
  -- exponential = O(x ^ n) = O(2^n)
  -- logrithmic = O(log n)
  */


  /*
   * lets understand the case of linear time complexity 
   * -- lets say , we have array, int nums [] = {1, 2, 3, 4, 5}
   * -- now, the task is to print all elements of nums array 
   * -- what we will do , we will iterate over each element & print 
   * -- so, in this case our total operations will depend on number of elements present in array 
   * 
   * -- so, if total number will be n,
   * -- operations perform will be n
   * -- so, the time complexity will be n
   * 
   * -- we denote time complexity as , tc = O(n)
   * -- here, O() , is denoting worst case 
   * -- and the n within (), define linear time complexity 
   */

public class P224TimeComplexity {
    public static void main(String[] args) {
        System.out.println("We are going to learn about time complexity");
    }
}


/*
 * that's all for this video
 * we discuss more in coming video 
 * 
 * Homework 
 * -- recall the graph of linear, constant, cubic, quadratic, logrithmic, etc 
 */