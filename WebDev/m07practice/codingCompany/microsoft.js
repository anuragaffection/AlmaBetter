

{
    // merge sorted array 
    var merge = function (nums1, m, nums2, n) {
        let res = [];
        let i = 0;
        let j = 0;

        while (i < m && j < n) {
            if (nums1[i] < nums2[j]) {
                res.push(nums1[i]);
                i++;
            } else {
                res.push(nums2[j]);
                j++;
            }
        }

        // Merge remaining elements from nums1
        while (i < m) {
            res.push(nums1[i]);
            i++;
        }

        // Merge remaining elements from nums2
        while (j < n) {
            res.push(nums2[j]);
            j++;
        }

        return res;
    };

}