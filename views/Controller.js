(function (angular) {
    'use strict'
    angular.module("Ctrl", [])
        .controller("HomeController", function ($scope, $http) {
            $scope.DatasMahasiswa = [];
            $scope.Input = {};
            $scope.DatasKelas = [{"Kelas":"Pagi"}, {"Kelas":"Sore"}, {"Kelas":"Karyawan"}];
            $scope.SelectedKelas = {};
            $scope.DatasJurusan= [{"Jurusan":"Teknik Informatika"}, {"Jurusan" : "Sistem Informasi"}];
            $scope.SelectedJurusan={};
            $scope.Status = "Simpan";
            $scope.Init = function () {
                $http({
                    method: "get",
                    url: "http://localhost/andrian/Codeigniter/api/Mahasiswa2/Panggil"
                }).then(function (response) {
                    $scope.DatasMahasiswa = response.data.result;
                }, function (error) {
                    console.log(error.message);
                });
            }   
            $scope.Simpan = function(){
                $scope.status="Simpan"
                if($scope.status=="Simpan"){
                    $http({
                        method: "POST",
                        url: "http://localhost/andrian/Codeigniter/api/Mahasiswa2/tambah",
                        data: $scope.Input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        $scope.DatasMahasiswa.push(angular.copy($scope.Input));
                        alert("Berhasil di Simpan")
                    }, function(error){
                        alert(error.data.result);
                    })
                }else{
                    $http({
                        method: "put",
                        url: "http://localhost/andrian/Codeigniter/api/Mahasiswa2/Ubah",
                        data: $scope.Input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        alert("Berhasil di Diubah")
                    }, function(error){
                        alert("Gagal Update");
                    })
                }
                
            }

            $scope.Hapus = function(item){
                $http({
                    method: "delete",
                    url: "http://localhost/andrian/Codeigniter/api/Mahasiswa2/Hapus?npm=" + item.npm,
                }).then(function(response){
                    var index = $scope.DatasMahasiswa.indexOf(item);
                    $scope.DatasMahasiswa.splice(index, 1);
                    alert("Data Berhasil di Hapus")
                }, function(error){
                    alert("Gagal Menghappus");
                })
            }
            $scope.GetData = function(item){
                $scope.Input = item;
                $scope.status = "Update";
            }
            $scope.GetSimpan = function(item){
                $scope.status="Simpan";
                $scope.Input={};
            }

        })
        .controller("MahasiswaController", function ($scope, $http) {
            $scope.DatasMahasiswa = [];
            $scope.DatasKelas = [{"Kelas":"Pagi"}, {"Kelas":"Sore"}, {"Kelas":"Karyawan"}];
            $scope.SelectedKelas = {};
            $scope.DatasJurusan= [{"Jurusan":"Teknik Informatika"}, {"Jurusan" : "Sistem Informasi"}];
            $scope.SelectedJurusan={};
            $scope.Input = {};
            $scope.Status = "Simpan";
            $scope.Init = function () {
                $http({
                    method: "get",
                    url: "http://localhost/andrian/Codeigniter/api/Mahasiswa2/panggil"
                }).then(function (response) {
                    $scope.DatasMahasiswa = response.data.result;
                }, function (error) {
                    console.log(error.message);
                });
            }   
            $scope.Simpan = function(){
    
                if($scope.Status=="Simpan"){
                    $http({
                        method: "POST",
                        url: "http://localhost/andrian/Codeigniter/api/Mahasiswa2/tambah",
                        data: $scope.Input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        $scope.DatasMahasiswa.push(angular.copy($scope.Input));
                        alert("Berhasil di Simpan")
                    }, function(error){
                        alert(error.data.result);
                    })
                }else{
                    $http({
                        method: "put",
                        url: "http://localhost/andrian/Codeigniter/api/Mahasiswa2/ubah",
                        data: $scope.Input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        alert("Berhasil di Diubah")
                    }, function(error){
                        alert("Gagal Update");
                    })
                }
                
            }

            $scope.Hapus = function(item){
                $http({
                    method: "delete",
                    url: "http://localhost/andrian/Codeigniter/api/Mahasiswa2/Hapus?npm=" + item.npm,
                }).then(function(response){
                    var index = $scope.DatasMahasiswa.indexOf(item);
                    $scope.DatasMahasiswa.splice(index, 1);
                    alert("Data Berhasil di Hapus")
                }, function(error){
                    alert("Gagal Menghappus");
                })
            }
            $scope.GetData = function(item){
                $scope.Input = item;
                $scope.Status = "Update";
            }
            $scope.GetSimpan = function(item){
                $scope.Status="Simpan";
                $scope.Input = {};
            }

        })


        

        .controller("MatakuliahController", function ($scope, $http) {
            $scope.DatasMatakuliah = [];
            $scope.DatasSemester= [{"Semester":"1"}, {"Semester":"3"}, {"Semester" : "5"}, {"Semester":"7"}];
            $scope.SelectedSemester={};
            $scope.Input = {};
            $scope.Status = "Simpan";
            $scope.Init = function () {
                $http({
                    method: "get",
                    url: "http://localhost/andrian/Codeigniter/api/Matakuliah/panggil"
                }).then(function (response) {
                    $scope.DatasMatakuliah = response.data.result;
                }, function (error) {
                    console.log(error.message);
                });
            }   
            $scope.Simpan = function(){
    
                if($scope.Status=="Simpan"){
                    $http({
                        method: "POST",
                        url: "http://localhost/andrian/Codeigniter/api/Matakuliah/tambah",
                        data: $scope.Input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        $scope.DatasMatakuliah.push(angular.copy($scope.Input));
                        alert("Berhasil di Simpan")
                    }, function(error){
                        alert(error.data.result);
                    })
                }else{
                    $http({
                        method: "put",
                        url: "http://localhost/andrian/Codeigniter/api/Matakuliah/ubah",
                        data: $scope.Input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        alert("Berhasil di Diubah")
                    }, function(error){
                        alert("Gagal Update");
                    })
                }
                
            }

            $scope.Hapus = function(item){
                $http({
                    method: "delete",
                    url: "http://localhost/andrian/Codeigniter/api/Matakuliah/Hapus?kmk=" + item.kmk,
                }).then(function(response){
                    var index = $scope.DatasMatakuliah.indexOf(item);
                    $scope.DatasMatakuliah.splice(index, 1);
                    alert("Data Berhasil di Hapus")
                }, function(error){
                    alert("Gagal Menghappus");
                })
            }
            $scope.GetData = function(item){
                $scope.Input = item;
                $scope.Status = "Update";
            }
            $scope.GetSimpan = function(item){
                $scope.Status="Simpan";
                $scope.Input = {};
            }

        })

        .controller("KompetensiController", function ($scope, $http) {
            $scope.DatasKompetensi = [];
            $scope.Input = {};
            $scope.Status = "Simpan";
            $scope.Init = function () {
                $http({
                    method: "get",
                    url: "http://localhost/andrian/Codeigniter/api/Kompetensi/panggil"
                }).then(function (response) {
                    $scope.DatasKompetensi = response.data.result;
                }, function (error) {
                    console.log(error.message);
                });
            }   
            $scope.Simpan = function(){
                $scope.status="Simpan"
                if($scope.status="Simpan"){
                    $http({
                        method: "POST",
                        url: "http://localhost/andrian/Codeigniter/api/Kompetensi/tambah",
                        data: $scope.Input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        $scope.DatasKompetensi.push(angular.copy($scope.Input));
                        alert("Berhasil di Simpan")
                    }, function(error){
                        alert(error.data.result);
                    })
                }else{
                    $http({
                        method: "put",
                        url: "http://localhost/andrian/Codeigniter/api/Kompetensi/ubah",
                        data: $scope.Input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        alert("Berhasil di Diubah")
                    }, function(error){
                        alert("Gagal Update");
                    })
                }
                
            }

            $scope.Hapus = function(item){
                $http({
                    method: "delete",
                    url: "http://localhost/andrian/Codeigniter/api/Kompetensi/Hapus?idKompetensi=" + item.idKompetensi,
                }).then(function(response){
                    var index = $scope.DatasKompetensi.indexOf(item);
                    $scope.DatasKompetensi.splice(index, 1);
                    alert("Data Berhasil di Hapus")
                }, function(error){
                    alert("Gagal Menghappus");
                })
            }
            $scope.GetData = function(item){
                $scope.Input = item;
                $scope.Status = "Update";
            }
            $scope.GetSimpan = function(item){
                $scope.Status="Simpan";
                $scope.Input={};
            }

        })

        .controller("PertanyaanController", function ($scope, $http) {
            $scope.DatasPertanyaan = [];
            $scope.Input = {};
            $scope.DatasidKompetensi = [];
            $scope.SelectedidKompetensi = {};
            $scope.Status = "Simpan";
            $scope.Init = function () {
                $http({
                    method: "get",
                    url: "http://localhost/andrian/Codeigniter/api/Kompetensi/panggil"
                }).then(function (response){
                    $scope.DatasidKompetensi = response.data.result;
                }, function (error) {
                    console.log(error.message);
                });
                $http({
                    method: "get",
                    url: "http://localhost/andrian/Codeigniter/api/Pertanyaan/panggil"
                }).then(function (response) {
                    $scope.DatasPertanyaan = response.data.result;
                }, function (error) {
                    console.log(error.message);
                });
            }   
            $scope.Simpan = function(){
                $scope.status="Simpan"
                if($scope.status="Simpan"){
                    $http({
                        method: "POST",
                        url: "http://localhost/andrian/Codeigniter/api/Pertanyaan/tambah",
                        data: $scope.Input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        $scope.DatasPertanyaan.push(angular.copy($scope.Input));
                        alert("Berhasil di Simpan")
                    }, function(error){
                        alert(error.data.result);
                    })
                }else{
                    $http({
                        method: "put",
                        url: "http://localhost/andrian/Codeigniter/api/Pertanyaan/ubah",
                        data: $scope.Input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        alert("Berhasil di Diubah")
                    }, function(error){
                        alert("Gagal Update");
                    })
                }
                
            }

            $scope.Hapus = function(item){
                $http({
                    method: "delete",
                    url: "http://localhost/andrian/Codeigniter/api/Pertanyaan/Hapus?No=" + item.No,
                }).then(function(response){
                    var index = $scope.DatasPertanyaan.indexOf(item);
                    $scope.DatasPertanyaan.splice(index, 1);
                    alert("Data Berhasil di Hapus")
                }, function(error){
                    alert("Gagal Menghappus");
                })
            }
            $scope.GetData = function(item){
                $scope.Input = item;
                $scope.Status = "Update";
            }
            $scope.GetSimpan = function(item){
                $scope.Status="Simpan";
                $scope.Input={};
            }

        })

        .controller("LaporanController", function ($scope, $http, $window) {
            $scope.Datasnilai_evaluasi = [];
            $scope.thAktif = [];
            $scope.Pertanyaan = [];
            $scope.Periode = {};
            $scope.DatasJumlah = [];
            $scope.SelectedMatakuliah = {};
            $scope.Datasidnilai = [];
            $scope.DatasMatakuliah = [];
            $scope.hideprint= true;
            $scope.Status = "Simpan";
            $scope.DatasKompetensi = [];
            $scope.SelectedKompetensi = {};
            $scope.DatasPenilaian = [];            
            var nm_periode = "";
            var token = $window.sessionStorage.getItem("Token");
            $scope.Init = function () {
                $http({
                    method: "get",
                    url: "http://restsimak.stimiksepnop.ac.id/api/Users/GetBiodata",
                    headers: {
                        "Content-Type" : "application/json",
                        "authorization" : token
                    }
                }).then(function(response){
                    $scope.Input.npm = response.data.data[0].npm;
                })
                
                $http({
                    method: "get",
                    url: "http://localhost/andrian/Codeigniter/nilaievaluasi"
                }).then(function (response) {
                    $scope.Datasnilai_evaluasi = response.data.result;
                }, function (error) {
                    console.log(error.message);
                })

                $http({
                    method: "get",
                    url: "http://localhost/andrian/Codeigniter/nilaievaluasi?idnilai=526"
                }).then(function (response) {
                    $scope.Datasidnilai = response.data.result;
                }, function (error) {
                    console.log(error.message);
                })

                $http({
                    method: "get",
                    url: "http://localhost/andrian/Codeigniter/Jumlah"
                }).then(function (response) {
                    $scope.DatasJumlah = response.data.result;
                }, function (error) {
                    console.log(error.message);
                })
            

                $http({
                    method: "get",
                    url: "http://restsimak.stimiksepnop.ac.id/api/tahunakademik/getTaAktif",
                    headers: {
                        "Content-Type" : "application/json",
                        "authorization" : token
                    }
                }).then(function(response){
                    $scope.thAktif = response.data.data[0];
                })
                
                $http({
                    method: "get",
                    url: "http://restsimak.stimiksepnop.ac.id/api/Kompetensi/GetKompetensi",
                    headers : {
                        "Content-type" :"application/json"
                        
                    }
                }).then(function (response) {
                    $scope.Pertanyaan = response.data.data.Kompetensi
                })

                $http({
                    method : "get",
                    url : "http://restsimak.stimiksepnop.ac.id/api/PeriodePenilaian/GetPeriodeAktif",
                    headers : {
                        "Content-type" :"application/json"
                        
                    }
                }).then(function(response){
                    $scope.Periode = response.data.data;
                    var a = response.data.data[0];
                    nm_periode = a.nm_period;
                })
                $http({
                    method : "get",
                    url : "http://restsimak.stimiksepnop.ac.id/api/Matakuliah/GetKrsm",
                    headers : {
                        "Content-type" :"application/json",
                        "authorization" : token
                    }
                }).then(function (response){
                    var data = response.data.data;
                    angular.forEach(data, function(value,key) {
                        var Url = "http://localhost/andrian/Codeigniter/penilaievaluasi?thakademik=" + value.thakademik +"&gg=" +value.gg +"&period="+nm_periode +"&npm=" +value.npm + "&kmk=" +value.kmk
                        $http({
                            method : "get",
                            url : Url,
                            headers : {
                                "Content-type" :"application/json"
                            }
                        }).then(function(response){
                            if(response.data.status == false){
                                $scope.DatasMatakuliah.push(value);
                            }
                        })
                    })
                });
                $scope.Cetak = function (print) {
                    var innerContents = document.getElementById(print).innerHTML;
                    var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
                    popupWinindow.document.open();
                    popupWinindow.document.write('<html><head></head><body onload="window.print()"><div>' + innerContents + '</html>');
                    popupWinindow.document.close();
                }
            }
            
        })

        
        .controller("ButirNilaiController", function ($scope, $http, $window) {
            $scope.DatasButirNilai = [];
            $scope.DatasKompetensi = [];
            $scope.SelectedKompetensi = {};
            $scope.DatasMatakuliah = [];
            $scope.SelectedMatakuliah = {};
            $scope.Pertanyaan = [];
            $scope.SelectedPertanyaan = [];
            $scope.ShowPertanyaan = false;
            $scope.Input = {};
            $scope.Periode = {};
            $scope.DatasPenilaian = [];
            $scope.thAktif = {};
            $scope.Status = "Simpan";
            var nm_periode = "";
            var token = $window.sessionStorage.getItem("Token");
            $scope.Init = function () {
                $http({
                    method: "get",
                    url: "http://restsimak.stimiksepnop.ac.id/api/Users/GetBiodata",
                    headers: {
                        "Content-Type" : "application/json",
                        "authorization" : token
                    }
                }).then(function(response){
                    $scope.Input.npm = response.data.data[0].npm;
                })

                $http({
                    method: "get",
                    url: "http://restsimak.stimiksepnop.ac.id/api/tahunakademik/getTaAktif",
                    headers: {
                        "Content-Type" : "application/json",
                        "authorization" : token
                    }
                }).then(function(response){
                    $scope.thAktif = response.data.data[0];
                })

                $http({
                    method: "get",
                    url: "http://restsimak.stimiksepnop.ac.id/api/Kompetensi/GetKompetensi",
                    headers : {
                        "Content-type" :"application/json"
                        
                    }
                }).then(function (response) {
                    $scope.Pertanyaan = response.data.data.Kompetensi
                })

                
                
                $http({
                    method : "get",
                    url : "http://restsimak.stimiksepnop.ac.id/api/PeriodePenilaian/GetPeriodeAktif",
                    headers : {
                        "Content-type" :"application/json"
                        
                    }
                }).then(function(response){
                    $scope.Periode = response.data.data;
                    var a = response.data.data[0];
                    nm_periode = a.nm_period;
                })
                $scope.TampilPertanyaan = function(){
                    $scope.ShowPertanyaan = true;
                }
                $http({
                    method : "get",
                    url : "http://restsimak.stimiksepnop.ac.id/api/Matakuliah/GetKrsm",
                    headers : {
                        "Content-type" :"application/json",
                        "authorization" : token
                    }
                }).then(function (response){
                    var data = response.data.data;
                    angular.forEach(data, function(value,key) {
                        var Url = "http://localhost/andrian/Codeigniter/penilaievaluasi?thakademik=" + value.thakademik +"&gg=" +value.gg +"&period="+nm_periode +"&npm=" +value.npm + "&kmk=" +value.kmk
                        $http({
                            method : "get",
                            url : Url,
                            headers : {
                                "Content-type" :"application/json"
                            }
                        }).then(function(response){
                            if(response.data.status == false){
                                $scope.DatasMatakuliah.push(value);
                            }
                        })
                    })
                });
            }
            $scope.Simpan = function(){
                if($scope.Status=="Simpan"){
                    $scope.Input.thakademik = $scope.thAktif.thakademik;
                    $scope.Input.gg = $scope.thAktif.gg;
                    $scope.Input.period = $scope.Periode[0].nm_period
                    $scope.Input.kmk = $scope.SelectedMatakuliah.kmk;
                    $scope.Input.kdps = $scope.SelectedMatakuliah.kdps;
                    $scope.Input.nidn = $scope.SelectedMatakuliah.nidn;
                    $scope.Input.kelas = $scope.SelectedMatakuliah.kelas;
                    $scope.Input.Pertanyaan = $scope.Pertanyaan;
                    $http({
                        method: "POST",
                        url: "http://localhost/andrian/Codeigniter/penilaievaluasi/",
                        data: $scope.Input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        $scope.DatasPenilaian.push(angular.copy($scope.Input));
                        alert("Berhasil di Simpan")
                    }, function(error){
                        alert(error.data.result);
                    })
                }
                
            }

            
            $scope.GetData = function(item){
                $scope.Input = item;
                $scope.Status = "Update";
            }
            $scope.GetSimpan = function(item){
                $scope.Status="Simpan";
                $scope.Input={};
            }
        })

        .controller("PenilaianController", function ($scope, $http) {
            $scope.DatasPenilaian = [];
            $scope.Input = {};
            $scope.DatasSaran= [{"Saran":"Sangat Baik"}, {"Saran" : "Baik"}, {"Saran": "Cukup"}, {"Saran":"Kurang"}];
            $scope.SelectedSaran={};
            $scope.Status = "Simpan";
            $scope.Init = function () {
                $http({
                    method: "get",
                    url: "http://localhost/andrian/Codeigniter/api/Penilaian/Panggil"
                }).then(function (response) {
                    $scope.DatasPenilaian = response.data.result;
                }, function (error) {
                    console.log(error.message);
                });
            }   
            $scope.Simpan = function(){
                $scope.status="Simpan"
                if($scope.status=="Simpan"){
                    $http({
                        method: "POST",
                        url: "http://localhost/andrian/Codeigniter/api/Penilaian/tambah",
                        data: $scope.Input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        $scope.DatasPenilaian.push(angular.copy($scope.Input));
                        alert("Berhasil di Simpan")
                    }, function(error){
                        alert(error.data.result);
                    })
                }else{
                    $http({
                        method: "put",
                        url: "http://localhost/andrian/Codeigniter/api/Penilaian/Ubah",
                        data: $scope.Input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response){
                        alert("Berhasil di Diubah")
                    }, function(error){
                        alert("Gagal Update");
                    })
                }
                
            }

            $scope.Hapus = function(item){
                $http({
                    method: "delete",
                    url: "http://localhost/andrian/Codeigniter/api/Penilaian/Hapus?idPenilaian=" + item.idPenilaian,
                }).then(function(response){
                    var index = $scope.DatasPenilaian.indexOf(item);
                    $scope.DatasPenilaian.splice(index, 1);
                    alert("Data Berhasil di Hapus")
                }, function(error){
                    alert("Gagal Menghappus");
                })
            }
            $scope.GetData = function(item){
                $scope.Input = item;
                $scope.Status = "Update";
            }
            $scope.GetSimpan = function(item){
                $scope.Status="Simpan";
                $scope.Input={};
            }

        })

        .controller("UserController", function ($scope, $http, $window) {

            $scope.input= {};
            $scope.Login = function (){
                $http({
                    method : "POST",
                    url : "http://restsimak.stimiksepnop.ac.id/api/users/login",
                    data: $scope.input
                }). then(function(response){
                    if(response.data.status==true){
                        if(response.data.data.RoleUser.Role[0].Nama=="Mahasiswa"){
                            alert("Sukses Login");
                            $window.sessionStorage.setItem("Username", response.data.data.Username);
                            $window.sessionStorage.setItem("Nama", response.data.data.NamaUser);
                            $window.sessionStorage.setItem("Token", response.data.data.Token);
                            window.location.href = "mahasiswa.html"
                        }else{
                            alert("Sukses Login");
                            $window.sessionStorage.setItem("Username", response.data.data.Username);
                            $window.sessionStorage.setItem("Nama", response.data.data.NamaUser);
                            $window.sessionStorage.setItem("Token", response.data.data.Token);
                            window.location.href = "admin.html"
                        }
                        
                    }else{
                        alert("Gagal Login");
                    }                    
                }, function(error){
                    alert("Gagal Login");
                    
                })
            }
        })
})(window.angular);