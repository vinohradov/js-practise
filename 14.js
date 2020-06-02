/**
 * Created by ADMIN4IK on 01.06.2020.
 */
(function () {
var arr = ['пн','вт','ср','чт','пт','сб','вc'];
for( var i = 0; i < arr.length; i++) {
    if(i == 5 || i == 6) {
        console.log('<b>' + arr[i]+' ' + '</b>');
    } else{
        console.log(arr[i]+' ')
    }
}
})();