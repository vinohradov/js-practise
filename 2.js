(function () {
    var a = 10;
    var b = 3;
    var rest = a % b;
    if (rest != 0) {
        console.log('Делится с остатком ' + rest);
    } else {
        console.log('Делится, результат деления: ' + (a / b));
    }
})();