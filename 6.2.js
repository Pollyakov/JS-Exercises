// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed to
// contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`
const countingDuplicates = (str) =>
  str
    .toLowerCase()
    .split('')
    .filter(
      (char, i, arr) => arr.lastIndexOf(char) === i && arr.indexOf(char) !== i // check if we are at the last occurrence of char and there is more than one occurrence
    ).length;