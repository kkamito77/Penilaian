<?php
class Penilaian_model extends CI_Model
{
 public function GetPenilaian()
 {
    $message = $this->db->get('Penilaian');
    return $message->result_array();
 }
 public function insertdata($data)
 {
    $result = $this->db->insert("Penilaian", $data);
    return $result;
 }

public function UpdatePenilaian($data)
{
   $this->db->where("idPenilaian", $data->idPenilaian);
   $result = $this->db->update('Penilaian', $data);
   return $result;
}
public function delete($id)
{
   $this->db->where("idPenilaian", $id['idPenilaian']);
   $result = $this->db->delete('Penilaian');
   return $result;
}
}