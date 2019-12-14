<?php defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/API_Controller.php';

class PenilaiEvaluasi extends API_Controller
{
    public function __construct() {
        parent::__construct();
        $this->load->model("PenilaiEvaluasi_model", "PenilaiEvaluasiModel");
    }

    public function GetPenilaiEvaluasi()
    {
        $id = $_GET;
        $Output = $this->PenilaiEvaluasiModel->get($id);
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

    public function InsertPenilaiEvaluasi()
    {
        $data = json_decode($this->input->raw_input_stream);
        $Output = $this->PenilaiEvaluasiModel->insert($data);
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

    public function UpdatePenilaiEvaluasi()
    {
        $data = json_decode($this->input->raw_input_stream);
        $result = $this->PenilaiEvaluasiModel->update($data);
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

        

    public function DeletePenilaiEvaluasi()
    {
        $id = $_GET;
        $result = $this->PenilaiEvaluasiModel->delete($id);
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