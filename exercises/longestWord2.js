
function LongestWord(sen) {

    let arr = sen.match(/[a-z]+/gi);
    let arr2 = arr.sort((a,b)=>{
        return b.length - a.length;
    })
    return arr2[0]
}

// keep this function call here
console.log(LongestWord("fun&!!a222 time22 sadfep32443 sadfepp32443"));