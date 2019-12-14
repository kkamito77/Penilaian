<?php defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/API_Controller.php';

class Jumlah extends API_Controller
{
    public function __construct() {
        parent::__construct();
        $this->load->model("Jumlah_model", "JumlahModel");
    }

    public function GetNilaiEvaluasi()
    {
        $Output = $this->JumlahModel->get();
        if(!empty($Output)){
            $this->api_return(
                [
                    "result"=>$Output
                ], 200
            );
        }else{
            $this->api_return(
                [
                    "result"=>"ko tra ada data"
                ], 400
            );
        }
    }

    public function InsertNilaiEvaluasi()
    {
        $data = json_decode($this->input->raw_input_stream);
        $Output = $this->JumlahModel->insert($data);
        if($Output){
            $this->api_return(
                [
                    "result"=>$Output
                ], 200
            );
        }else{
            $this->api_return(
                [
                    "result"=>$Output
                ], 400
            );
        }
    }

    public function UpdateNilaiEvaluasi()
    {
        $data = json_decode($this->input->raw_input_stream);
        $result = $this->JumlahModel->update($data);
        if ($result){
            $this->api_return(
                [
                    'status'=>true
                ],
            200);
        }else{
            $this->api_return(
                [
                    'status'=>false
                ],
            400);
        }
    }

        

    public function DeleteNilaiEvaluasi()
    {
        $id = $_GET;
        $result = $this->NilaiEvaluasiModel->delete($id);
        if ($result){
            $this->api_return(
                [
                    'status'=>true
                ],
            200);
        }else{
            $this->api_return(
                [
                    'status'=>false
                ],
            400);
        }
    }
}