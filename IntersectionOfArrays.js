        // Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
        // Example 1:
        // Input: nums1 = [1,2,2,1], nums2 = [2,2]
        // Output: [2]
        // Example 2:
        // Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
        // Output: [9,4]

        var intersection = function(nums1, nums2){
            const set1 = new Set(nums1);
            const uniquenums1= Array.from(set1);
            const set2 = new Set(nums2);
            const uniquenums2 = Array.from(set2);

            const result = uniquenums1.filter(num => uniquenums2.includes(num));

            return result;
        }
        var nums1 = [4,9,5];
        var nums2 = [9,4,9,8,4];
        console.log(intersection(nums1, nums2));
