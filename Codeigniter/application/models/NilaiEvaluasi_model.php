<?php

class NilaiEvaluasi_model extends CI_Model
{
    public function insert($data)
    {
        $result = $this->db->insert("nilai_evaluasi", $data);
        return $result;
    }

    public function get($id)
    {
        if($id != null){
            $this->db->where("thakademik", $id['thakademik']);
            $result =  $this->db->get("nilai_evaluasi");
            
            return $result->result_array();
        }else{
            $result =  $this->db->get("nilai_evaluasi");
            return $result->result_array();
        }
    //     $message = $this->db->query("
    //     SELECT
    //     SUM(IF((idnilai) = 526, nilai_ev,0)) AS JumlahP1_111048,  
    //     SUM(IF((kmk) = 111049, nilai_ev,0)) AS Jumlah_111048,
    //     ((((SUM(IF((kmk) = 111049, nilai_ev,0)))*4)/idnilai)*100) AS presentasi_111048
    //     FROM nilai_evaluasi");
    // return $message->result_array();
    }

    public function update($data)
    {
        $this->db->where("thakademik", $data->thakademik);
        $result = $this->db->update("nilai_evaluasi", $data);
        return $result;
    }

    public function delete($id)
    {
        $this->db->where("thakademik", $id['thakademik']);
            $result =  $this->db->delete("nilai_evaluasi");
            return $result;
    }
    
}
