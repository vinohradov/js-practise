/**
 * Created by ADMIN4IK on 01.06.2020.
 */
(function () {
    var obj = {Коля: 200, Вася: 300, Петя: 400};
    for (key in obj) {
        console.log(key + " - зарплата " + obj[key] + " долларов");
    }
})();