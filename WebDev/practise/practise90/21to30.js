{
    // 21. Sorted Array Target Index Finder

    {
        // way first 
        function main() {
            var nums = readLine().split(" ").map(x => parseInt(x));
            var target = parseInt(readLine());
            console.log(searchInsert(nums, target));
        }
        var searchInsert = function (nums, target) {

            let start = 0
            let end = nums.length - 1;
            let idx = -1;

            while (start <= end) {
                let mid = Math.floor((start + end) / 2);

                if (nums[mid] <= target) {
                    if (nums[mid] === target) {
                        return mid;
                    }
                    else {
                        idx = mid + 1;
                        start = mid + 1;
                    }
                }
                else if (nums[mid] > target) {
                    end = mid - 1;
                }

            }

            return idx;
        };

    }

    {
        // way - second 
        // optimsing  previous solution 
        function main() {
            var nums = readLine().split(" ").map(x => parseInt(x));
            var target = parseInt(readLine());
            console.log(searchInsert(nums, target));
        }
        var searchInsert = function (nums, target) {
            let start = 0;
            let end = nums.length - 1;
            let idx = nums.length; // Initialize idx to the length of the array

            while (start <= end) {
                let mid = Math.floor((start + end) / 2);

                if (nums[mid] === target) {
                    return mid; // Target found at index mid
                } else if (nums[mid] < target) {
                    start = mid + 1; // Update start to search in the right half
                } else {
                    idx = mid; // Update idx but continue searching in the left half
                    end = mid - 1;
                }
            }

            return idx; // Return the index where target would be inserted
        };


    }
}