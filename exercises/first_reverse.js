function firstReverse(str) {
    let arr = str.split(''); // es como el explode en php
    arr.reverse();
    let st = arr.join('');
    console.log(st);
}

firstReverse("hola");