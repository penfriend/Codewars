/**
 * @link: https://www.codewars.com/kata/shortest-word/javascript
 * @Task: Simple, given a string of words, return the length of the shortest word(s).
 * @Author: Diana Holik
 */
const findShort = s => Math.min(...s.split(' ').map(x => x.length));

