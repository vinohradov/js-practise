/**
 * Created by ADMIN4IK on 02.06.2020.
 */
(function () {
    var arr = [12, 15, 20, 25, 59, 79];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum / arr.length);
})();