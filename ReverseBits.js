// Reverse bits of a given 32 bits unsigned integer.

// Example 1:
// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)

var reverseBits = function(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = result << 1;
        result += (n & 1); 
        n = n >>> 1;          
    }
    return result >>> 0;
};

console.log(reverseBits(0b000010100101000001111010011100));