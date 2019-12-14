<?php

class PenilaiEvaluasi_Model extends CI_Model
{
    public function insert($data)
    {
        $this->db->trans_start();
        $datapenilai = [
            'thakademik' => $data->thakademik,
            'gg'=> $data->gg,
            'period'=>$data->period,
            'npm'=> $data->npm,
            'kmk'=>$data->kmk
        ];
        $this->db->insert('penilai_evaluasi', $datapenilai);
        $idPenilai = $this->db->insert_id();
        foreach ($data->Pertanyaan as $key => $value) {
            foreach ($value->Pertanyaan as $key1 => $value1) {
                $nilai = [
                    'thakademik' => $data->thakademik,
                    'gg'=> $data->gg,
                    'periode'=>$data->period,
                    'kmk'=>$data->kmk,
                    'nidn'=>$data->nidn,
                    'kelas'=>$data->kelas,
                    'idkom'=>$value1->idkom,
                    'idnilai'=>$idPenilai,
                    'nilai_ev'=>$value1->nilai_ev
                ];
                $this->db->insert("nilai_evaluasi", $nilai);
            }
        }
        if($this->db->trans_status()===false){
            $this->db->trans_rollback();
            return false;
        }else{
            $this->db->trans_complete();
            return true;
        }
        // $result = $this->db->insert("penilai_evaluasi", $data);
        return $result;
    }

    public function get($data)
    {
        $this->db->where("thakademik", $data['thakademik']);
        $this->db->where("gg", $data['gg']);
        $this->db->where("period", $data['period']);
        $this->db->where("npm", $data['npm']);
        $this->db->where("kmk", $data['kmk']);
        $result =  $this->db->get("penilai_evaluasi");
        if($result->num_rows()>0){
            return true;
        }else{
            return false;
        }
    }

    public function update($data)
    {
        $this->db->where("id", $data->id);
        $result = $this->db->update("penilai_evaluasi", $data); 
        return $result;
    }

    public function delete($id)
    {
        $this->db->where("id", $id['id']);
            $result =  $this->db->delete("penilai_evaluasi");
            return $result;
    }
    
}
