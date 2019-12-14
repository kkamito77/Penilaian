<?php
class Kompetensi_model extends CI_Model
{
 public function GetKompetensi()
 {
    $message = $this->db->get('kompetensi');
    return $message->result_array();
 }
 public function insertdata($data)
 {
    $result = $this->db->insert("kompetensi", $data);
    return $result;
 }

public function UpdateKompetensi($data)
{
   $this->db->where("idKompetensi", $data->idKompetensi);
   $result = $this->db->update('kompetensi', $data);
   return $result;
}
public function Delete($id)
{
   $this->db->where("idKompetensi", $id['idKompetensi']);
   $result = $this->db->delete('kompetensi');
   return $result;
}
}