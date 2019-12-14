<?php
class ButirNilai_model extends CI_Model
{
 public function GetButirNilai()
 {

    $message = $this->db->query("
    SELECT
  `matakuliah`.`Nm_Matakuliah`, `butirnilai`.*, `pertanyaan`.`Pertanyaan`,
  `kompetensi`.`Nm_Kompetensi`
FROM
  `butirnilai` INNER JOIN
  `matakuliah` ON `butirnilai`.`idButirNilai` = `matakuliah`.`kmk` INNER JOIN
  `pertanyaan` ON `butirnilai`.`idButirNilai` = `pertanyaan`.`NO` INNER JOIN
  `kompetensi` ON `butirnilai`.`idButirNilai` = `kompetensi`.`idKompetensi`;
    ");
    return $message->result_array();
 }
 public function insertdata($data)
 {
    $result = $this->db->insert("butirnilai", $data);
    return $result;
 }

public function UpdateButirNilai($data)
{
   $this->db->where("idButirNilai", $data->idButirNilai);
   $result = $this->db->update('butirnilai', $data);
   return $result;
}
public function delete($id)
{
   $this->db->where("idButirNilai", $id['idButirNilai']);
   $result = $this->db->delete('butirnilai', $id);
   return $result;
}
}