/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let combinedWord = word1 + word2;
    let mergedString = [];

    for (let i = 0; i < combinedWord.length; i++) {
        if (i < word1.length) {
            mergedString.push(word1[i]);
        }
        if (i < word2.length) {
            mergedString.push(word2[i]);
        }
    }
    return console.log(mergedString.join(""));
};


mergeAlternately('abc', 'pqr');