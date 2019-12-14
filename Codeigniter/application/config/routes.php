<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;


$route['API'] = 'Rest_server';

// User API Routes
$route['api/user/add'] = 'Users/add_user';
$route['api/users/all'] = 'Users/fetch_all_users';
$route['api/users/register'] = 'api/Users/register';
$route['api/users/login'] = 'api/Users/login';
$route['api/jadwal/jadwalmahasiswa'] = 'api/Jadwal/jadwalMahasiswa';
$route['api/jadwal/jadwalall'] = 'api/Jadwal/jadwalall';
$route['api/krsm/pengajuanKRS'] = 'api/Krsm/pengajuanKRS';
$route['api/krsm/getkrsmtem'] = 'api/Krsm/ambilTemkrsm';
$route['api/krsm/putkrsmtem'] = 'api/Krsm/approvedKrsm';
$route['api/krsm/deleteitem'] = 'api/Krsm/HapusItem';
$route['api/krsm/insertitem'] = 'api/Krsm/InsertItem';
$route['api/krhm/GetKemajuanStudi'] = 'api/Khsm/GetKhsm';

//User
$route['User']['get'] = 'Users/Login';

//Mahasiswa
$route['Mahasiswa2']['get'] = 'api/Mahasiswa/panggil';
$route['Mahasiswa2']['post'] = 'api/Mahasiswa/tambah';
$route['Mahasiswa2']['put'] = 'api/Mahasiswa/Ubah';
$route['Mahasiswa2']['delete'] = 'api/Mahasiswa/Hapus';

//Matakuliah
$route['api/Matakuliah/GetKrsm']['get'] = 'api/Matakuliah/GetKrsm';
$route['Matakuliah']['get'] = 'api/Matakuliah/Panggil';
$route['Matakuliah']['post'] = 'api/Matakuliah/tambah';
$route['Matakuliah']['put'] = 'api/Matakuliah/Ubah';
$route['Matakuliah']['delete'] = 'api/Matakuliah/Hapus';

//Kompetensi
$route['api/Kompetensi/GetKompetensi']['get'] = 'api/Kompetensi/GetKompetensi';
$route['api/PeriodePenilaian/GetPeriodeAktif']['get'] = 'api/PeriodePenilaian/GetPeriodeAktif';
$route['Kompetensi']['get'] = 'api/Kompetensi/Panggil';
$route['Kompetensi']['post'] = 'api/Kompetensi/tambah';
$route['Kompetensi']['put'] = 'api/Kompetensi/Ubah';
$route['Kompetensi']['delete'] = 'api/Kompetensi/Hapus';

//Pertanyaan
$route['Pertanyaan']['get'] = 'api/Pertanyaan/Panggil';
$route['Pertanyaan']['post'] = 'api/Pertanyaan/tambah';
$route['Pertanyaan']['put'] = 'api/Pertanyaan/Ubah';
$route['Pertanyaan']['delete'] = 'api/Pertanyaan/Hapus';

//penilaia evaluasi
$route['penilaievaluasi']['get'] = 'api/penilaievaluasi/Panggil';
$route['penilaievaluasi']['post'] = 'api/penilaievaluasi/tambah';
$route['penilaievaluasi']['put'] = 'api/penilaievaluasi/Ubah';
$route['penilaievaluasi']['delete'] = 'api/penilaievaluasi/Hapus';

//ButirNilai
$route['ButirNilai']['get'] = 'api/ButirNilai/Panggil';
$route['ButirNilai']['post'] = 'api/ButirNilai/tambah';
$route['ButirNilai']['put'] = 'api/ButirNilai/Ubah';
$route['ButirNilai']['delete'] = 'api/ButirNilai/Hapus';

//Penilaian
$route['Penilaian']['get'] = 'api/Penilaian/Panggil';
$route['Penilaian']['post'] = 'api/Penilaian/tambah';
$route['Penilaian']['put'] = 'api/Penilaian/Ubah';
$route['Penilaian']['delete'] = 'api/Penilaian/Hapus';

//penilaian evaluasi
$route['penilaievaluasi']['get'] = 'api/PenilaiEvaluasi/GetPenilaiEvaluasi';
$route['penilaievaluasi']['post'] = 'api/PenilaiEvaluasi/InsertPenilaiEvaluasi';
$route['penilaievaluasi']['put'] = 'api/PenilaiEvaluasi/UpdatePenilaiEvaluasi';
$route['penilaievaluasi']['delete'] = 'api/PenilaiEvaluasi/DeletePenilaiEvaluasi';

//nilai evaluasi
$route['nilaievaluasi']['get'] = 'api/NilaiEvaluasi/GetNilaiEvaluasi';
$route['nilaievaluasi']['post'] = 'api/NilaiEvaluasi/InsertNilaiEvaluasi';
$route['nilaievaluasi']['put'] = 'api/NilaiEvaluasi/UpdateNilaiEvaluasi';
$route['nilaievaluasi']['delete'] = 'api/NilaiEvaluasi/DeleteNilaiEvaluasi';

//Jumlah
$route['Jumlah']['get'] = 'api/Jumlah/GetNilaiEvaluasi';
$route['Jumlah']['post'] = 'api/Jumlah/InsertNilaiEvaluasi';
$route['Jumlah']['put'] = 'api/Jumlah/UpdateNilaiEvaluasi';
$route['Jumlah']['delete'] = 'api/Jumlah/DeleteNilaiEvaluasi';