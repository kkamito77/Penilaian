var app = angular.module("MyApp", []);
app.controller("MyController", function ($scope) {
 $scope.Judul1 = "My First App";
 $scope.Paragraph = "Menginstal AngularJS adalah semudah meload file angular.min.js kedalam file html"; $scope.Angka1 = 0;
 $scope.Angka2 = 0;
 $scope.Hitung = function(){
 alert($scope.Angka1 + $scope.Angka2);
 }
}); 