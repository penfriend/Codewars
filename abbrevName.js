/**
 * @link: https://www.codewars.com/kata/abbreviate-a-two-word-name
 * @Task: Write a function to convert a name into initials. 
 * This kata strictly takes two words with one space in between them.
 * The output should be two capital letters with a dot seperating them. 
 * It should look like this:
 * Sam Harris => S.H
 * @Author: Diana Holik
 */
const abbrevName = fullName => {
    const [name, surname] = fullName.split(' '); // ["Diana","Holik"];
    return `${name[0]}.${surname[0]}`.toUpperCase();
}