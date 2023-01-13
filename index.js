var countdown = function countdown (i) {
    while ( i >= 0) {
        return '' + i+ countdown(i -= 1);
    }
    return '';

};
console.log(countdown(5));