var reverseWords = function(s){
    const reverse = s.trim().split(/\s+/).reverse().join(' ');
    return reverse;
}
console.log(reverseWords("the sky is blue"))