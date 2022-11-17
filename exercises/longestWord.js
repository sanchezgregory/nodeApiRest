// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

function LongestWord(sen) {

    let words = sen.split(" ");
    let results;
    let max = 0;
    results = words.map((word) => {
        let c = 0;
        for (let i = 0; i < word.length; i++) {
            if((word.charCodeAt(i) > 96 && word.charCodeAt(i) < 123) || (word.charCodeAt(i) > 47 && word.charCodeAt(i) < 58)) {
                c++;
            }
        }
        return {
            qty:c,
            word
        }
    });
    for (let i = 0; i < results.length; i++) {
        let obj = results[i];
        if (obj.qty > max) {
            max = obj.qty;
            sen = obj.word;
        }
    }
  return sen;

}

// keep this function call here
console.log(LongestWord("fun&!!222 time22"));