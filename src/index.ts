import * as fs from 'fs';

const words = fs.readFileSync('/usr/src/app/src/words.txt', 'utf-8');
const wordList = words.split('\n');

var countedWord: {[word: string] : number} = {};
var totalWords: number = 0;
var totalLetters: number = 0;
var totalSpaces: number = 0;
wordList.forEach( line => {
    var lSpaceCount = line.match(/([\s]+)/g);
    if (lSpaceCount != null)
        totalSpaces += lSpaceCount.length;
    line.split(' ').forEach( word => {
        if (word != '') {
            if (countedWord[word] == undefined)
                countedWord[word] = 1;
            else
                countedWord[word]++;
            totalWords++;
            totalLetters += word.length;
        } 
    });  
});

console.log("Total of words: " + totalWords);
console.log("Total of letters: " + totalLetters);
console.log("Total of spaces: " + totalSpaces);
console.log("--------")

for (var key in countedWord) {
    if (countedWord[key] > 10)
        console.log(key + ": " + countedWord[key]);
}
