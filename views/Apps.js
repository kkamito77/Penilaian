(function(angular){
    'use strict'
    angular.module("Kursus", ["Ctrl", "ngAnimate", "ui.router"])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("Home");
        $stateProvider
            .state("Home", {
                url: "/Home",
                templateUrl: "views/Pages/Home.html",
                controller: "HomeController"
            })
            .state("Mahasiswa", {
                url: "/Mahasiswa",
                templateUrl: "views/Pages/Mahasiswa.html",
                controller: "MahasiswaController"
            })
            .state("Matakuliah", {
                url: "/Matakuliah",
                templateUrl: "views/Pages/Matakuliah.html",
                controller: "MatakuliahController"
            })
            .state("Penilaian", {
                url: "/Penilaian",
                templateUrl: "views/Pages/Penilaian.html",
                controller: "PenilaianController"
            })
            .state("Print", {
                url: "/Print",
                templateUrl: "views/Pages/Print.html",
                controller: "PrintController"
            })
            .state("ButirNilai", {
                url: "/ButirNilai",
                templateUrl: "views/Pages/ButirNilai.html",
                controller: "ButirNilaiController"
            })
            .state("Kompetensi", {
                url: "/Kompetensi",
                templateUrl: "views/Pages/Kompetensi.html",
                controller: "KompetensiController"
            })
            .state("Laporan", {
                url: "/Laporan",
                templateUrl: "views/Pages/Laporan.html",
                controller: "LaporanController"
            })
            .state("Pertanyaan", {
                url: "/Pertanyaan",
                templateUrl: "views/Pages/Pertanyaan.html",
                controller: "PertanyaanController"
            });
           
    })
    .controller("view", function ($scope, $window){
        if($window.sessionStorage.getItem("Username") == undefined || $window.sessionStorage.getItem("Username")=="" || $window.sessionStorage.getItem("Username")==null){
            window.location.href="login.html";
        }
        $scope.Logout = function (){
            $window.sessionStorage.clear();
            window.location.href="login.html";
        }
    })
})(window.angular);