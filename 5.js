/**
 * Created by ADMIN4IK on 02.06.2020.
 */
(function () {
    var arr = [4,2,5,19,13,0,10];
    var b = 0;
    for(var i=0; i<arr.length; i++) {
        b+=Math.pow(arr[i],3);
    }
    console.log( Math.sqrt(b));
})();