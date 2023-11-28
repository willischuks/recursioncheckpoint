# recursioncheckpoint

# Palindrome Checker

This JavaScript code checks if a given word is a palindrome. A palindrome is a word or phrase that reads the same backward as forward, such as "madam", "racecar", or "rotator".

## Usage

```javascript
const isPalindrome = (word) => {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome('gag')); // true
console.log(isPalindrome('kayak')); // true
console.log(isPalindrome('php')); // true
console.log(isPalindrome('radar')); // true
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('apple')); // false
console.log(isPalindrome('banana')); // false
console.log(isPalindrome('orange')); // false


## Explanation

The code uses two pointers, `left` and `right`, to traverse the word from both ends. It compares the characters at the current positions of the pointers and if they are not equal, it returns `false`. Otherwise, it continues until the pointers meet or cross, indicating that all characters have been compared. If the loop completes without encountering any mismatches, it returns `true`, indicating that the word is a palindrome.

## License

MIT License

Copyright (c) 2023 Bard

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
