// function isPalindrome(word) {
//     if (word.length === 0 || word.length === 1) {
//         return true;
//     } else {
//         if (word[0] === word[word.length - 1]) {
//         return isPalindrome(word.slice(1, -1));
//         } else {
//         return false;
//         }
//     }
//     }

    function isPalindrome(word) {
        let left = 0;
        let right = word.length - 1;
    
        while (left < right) {
        if (word[left] !== word[right]) {
            return

    false;
        }
    
        left++;
        right--;
    }
    
        return
    
    true;
    }
    
