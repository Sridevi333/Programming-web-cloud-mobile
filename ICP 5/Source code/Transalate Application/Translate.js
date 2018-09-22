var app=angular.module("Translate",[]);
app.controller("Translatecontroller",function ($scope,$http) {
    $scope.translate = function () {
        console.log(6+5);
        var keyword = document.getElementById('justwatchkeyword').value;
        console.log(keyword);
        var language= document.getElementById('lang').value;
        var des =document.getElementById('des').value;
        console.log(language);
        $http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170912T035106Z.173f67691dfb389e.6ec700d834201d61b480a1fcb53b0b727e7ecff2'+'&text='+keyword+'&lang='+language+'-'+des).success(function (data) {

            console.log(data);
            $scope.translatorWord=data.text;
        })

    }
})