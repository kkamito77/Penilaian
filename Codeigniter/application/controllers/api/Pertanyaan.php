<?php defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . '/libraries/API_Controller.php';
class Pertanyaan extends API_Controller
{
    public function __construct() {
        parent::__construct();
        $this->load->model('Pertanyaan_model', 'PertanyaanModel');
    }
    public function Panggil()
    {
        $Output = $this->PertanyaanModel->GetPertanyaan();
        if($Output!=null || count($Output)>0){
            $this->api_return(
                [
                'status' => true,
                "result" => $Output
                ],
                200);
        }else{
            $this->api_return(
                ['status' => false],
            400);
        }
         
 
    }
    public function tambah()
    {
        $data = $this->input->raw_input_stream;
        $Output = $this->PertanyaanModel->insertdata(json_decode($data));
        if($Output)
        {
            $this->api_return(
                [
                    'status' => true
                ],
            200);
        }else{
            $this->api_return(
                ['status' => false],
            400);
        }
    }
    public function Ubah()
    {
        $data = json_decode($this->input->raw_input_stream);
        $Output = $this->PertanyaanModel->UpdatePertanyaan($data);
        if ($Output) {
            $this->api_return(
                [
                    'status' => true
                ],200
            );
        }else{
            $this->api_return(
                [
                    'status' => false
                ],400
            );
        }
        
    }
    public function Hapus()
    {
        $id = $_GET;
        
        $Output = $this->PertanyaanModel->delete($id);
        if ($Output) {
            $this->api_return(
                [
                    'status' => true
                ],200
            );
        }else{
            $this->api_return(
                [
                    'status' => false
                ],400
            );
        }  
    }
} 
