{
    // Search in An Array 

    {
        // Binary Search
        let arr = [1,21,35,44,67, 89];
        let start = 0;
        let end = arr.length  - 1;

        {
            let mid = Math.floor((start + end) / 2)
            // avoid to use this
            // worst, very easy to overflow when the total number or length will big
        }

        { 
           let mid = start + Math.floor((end - start) / 2)
           // much better, but still possible to overflow
        }

        { 
           let mid = (low + end) >>> 1 
           // the best, but hard to understand
        }

    
    }

    {
        // Search Insert Position
        // same problem on alma better
        // https://leetcode.com/problems/search-insert-position/description/?envType=study-plan-v2&envId=binary-search

    }


    {
        // find smallest letter greater than target 
    }
}


