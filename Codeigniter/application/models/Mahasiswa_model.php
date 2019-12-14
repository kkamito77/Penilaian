<?php
class Mahasiswa_model extends CI_Model
{
 public function GetMahasiswa2()
 {
    $message = $this->db->get('mahasiswa');
    return $message->result_array();
 }
 public function insertdata($data)
 {
    $result = $this->db->insert("mahasiswa", $data);
    return $result;
 }

public function UpdateMahasiswa($data)
{
   $this->db->where("npm", $data->npm);
   $result = $this->db->update('mahasiswa', $data);
   return $result;
}
public function delete($id)
{
   $this->db->where("npm", $id['npm']);
   $result = $this->db->delete('mahasiswa');
   return $result;
}
}