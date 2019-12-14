<?php defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . '/libraries/API_Controller.php';
class penilaiaevaluasi extends API_Controller
{
    public function __construct() {
        parent::__construct();
        $this->load->model('penilaiaevaluasi_model', 'penilaiaevaluasiModel');
    }
    public function panggil()
    {
        $id = _$GET;
        $Output = $this->penilaiaevaluasiModel->get($id);
        if($Output){
            $this->api_return(
                [
                    'status' => $Output
                ], 200
            );
        }else{
            $this->api_return(
                [
                    'status' => $Output
                ], 200
            );
        }
    }
    public function Tambah()
    {
        $data = json_decode($this->input->raw_input_stream);
        $Output = $this->penilaiaevaluasiModel->insert($data);
        if ($result){
            $this->api_return(
                [
                    'status' => $Output
                ], 200
            );
        }else{
            $this->api_return(
                [
                    'status' => $Output
                ], 400
            );
        }
    }
    public function Ubah()
    {
        $data = json_decode($this->input->raw_input_stream);
        $Output = $this->penilaiaevaluasiModel->update($data);
        if ($result){
            $this->api_return(
                [
                    'status' => $Output
                ], 200
            );
        }else{
            $this->api_return(
                [
                    'status' => $Output
                ], 400
            );
        }
    }
    public function Hapus()
    {
        $id = $_GET;
        $result = $this->penilaiaevaluasiModel->delete($id);
        if($result){
            $tthis->api_return(
                [
                    'status' => $Output
                ], 200
            );
        }else{
            $this->api_return(
                [
                    'status' => $Output
                ], 400
            );  
        }
    }
} 
