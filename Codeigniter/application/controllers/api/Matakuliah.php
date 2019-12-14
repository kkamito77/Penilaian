<?php defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . '/libraries/API_Controller.php';
class Matakuliah extends API_Controller
{
    public function __construct() {
        parent::__construct();
        $this->load->model('Matakuliah_model', 'MatakuliahModel');
    }
    public function Panggil()
    {
        $Output = $this->MatakuliahModel->GetMatakuliah();
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
        $Output = $this->MatakuliahModel->insertdata(json_decode($data));
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
        $Output = $this->MatakuliahModel->UpdateMatakuliah($data);
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
        
        $Output = $this->MatakuliahModel->delete($id);
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
