/**
 * Created by ADMIN4IK on 01.06.2020.
 */
(function () {
    var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
    for (key in obj) {
        console.log(key);
        console.log(obj[key]);
    }
})();