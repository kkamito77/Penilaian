<?php
class Pertanyaan_model extends CI_Model
{
 public function GetPertanyaan()
 {
    $message = $this->db->query("
      SELECT
         `pertanyaan`.*, `kompetensi`.`Nm_Kompetensi`
      FROM
         `pertanyaan` LEFT JOIN
         `kompetensi` ON `pertanyaan`.`idKompetensi` = `kompetensi`.`idKompetensi`;
    ");
    return $message->result_array();
 }
 public function insertdata($data)
 {
    $result = $this->db->insert("Pertanyaan", $data);
    return $result;
 }

public function UpdatePertanyaan($data)
{
   $this->db->where("No", $data->No);
   $result = $this->db->update('Pertanyaan', $data);
   return $result;
}
public function delete($id)
{
   $this->db->where("No", $id['No']);
   $result = $this->db->delete('Pertanyaan');
   return $result;
}
}