
        // Given two binary strings a and b, return their sum as a binary string.
        // Example 1:
        // Input: a = "11", b = "1"
        // Output: "100"
        // Example 2:
        // Input: a = "1010", b = "1011"
        // Output: "10101"

        var addBinary = function(a, b) {
            let result = '';
            let carry = 0;
            let i = a.length - 1;
            let j = b.length - 1;
            
            while (i >= 0 || j >= 0 || carry > 0) {
                let digitA = i >= 0? parseInt(a[i]) : 0;
                let digitB = j >= 0? parseInt(b[j]) : 0;
                
                let sum = digitA + digitB + carry;
                carry = Math.floor(sum / 2);
                result = (sum % 2) + result;
                
                i--;
                j--;
            }
            
            return result;
        }
        let a = "11"
        let b = "1"
        console.log(addBinary(a, b));