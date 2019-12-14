<?php
class Matakuliah_model extends CI_Model
{
 public function GetMatakuliah()
 {
    $message = $this->db->get('matakuliah');
    return $message->result_array();
 }
 public function insertdata($data)
 {
    $result = $this->db->insert("matakuliah", $data);
    return $result;
 }

public function UpdateMatakuliah($data)
{
   $this->db->where("kmk", $data->kmk);
   $result = $this->db->update('matakuliah', $data);
   return $result;
}
public function delete($id)
{
   $this->db->where("kmk", $id['kmk']);
   $result = $this->db->delete('matakuliah');
   return $result;
}
}