/**
 * Created by ADMIN4IK on 01.06.2020.
 */
(function () {
    var arr = [2, 5, -9, 15, 8, -4];
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result += arr[i];
        }
    }
    console.log(result);
})();