<?php
defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * Created by PhpStorm.
 * User: mmmelo
 * Date: 8/12/17
 * Time: 4:37 PM
 */


class main_model extends CI_Model{

    private $create_thumb;

    function __construct(){

        parent::__construct();

        //CORS don't remove
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        $method = $_SERVER['REQUEST_METHOD'];
        if($method == "OPTIONS") {
            die();
        }
        

    }


    public function echoes(){

        $result = array('success'=>true,'message'=>'Hi');
        
        return $result;

    }

    public function get_veiculos($vec_id=null, $limit=10, $offset=0){

        $result = array(
            'success'=>true,
        );


        $this->db->select("*")->from('veiculos');
        $this->db->limit($limit);
        $this->db->offset($offset);
        
        ( $vec_id ) ? $this->db->where('id', $vec_id) :null;

        if($vec_id){
            $result["data"] = $this->db->get()->row();
        }else{
            $result["data"] = $this->db->get()->result_array();
        }



        return $result;

    }

    public function search_veiculos($search=null){

        $result = array(
            'success'=>true,
        );


        $this->db->select("*")->from('veiculos');

        $this->db->where(" CONCAT(combustivel, '', marca) LIKE", $search);
        
        $result["data"] = $this->db->get()->result_array();
        
        return $result;

    }

    public function get_edit_veiculos($vec_id=null, $placa=null, $modelo=null, $marca=null, $foto=null, $combustivel=null, $valor=0){

        $result = array(
            'success'   => true,
        );

        $fields =  array(
            'placa'        => $placa,
            'modelo'        => $vec_id,
            'marca'         => $marca,
            'foto'          => $foto,
            'combustivel'   => $combustivel,
            'valor'         => $valor,
        );

        $this->db->where('id', $vec_id);

        $result["success"] = $this->db->update('veiculos', $fields);

        return $result;

    }

    public function get_add_veiculo($vec_id=null, $placa=null, $modelo=null, $marca=null, $foto=null, $combustivel=null, $valor=0){

        $result = array(
            'success'   => true,
        );

        $fields =  array(
            'placa'        => $placa,
            'modelo'        => $vec_id,
            'marca'         => $marca,
            'foto'          => $foto,
            'combustivel'   => $combustivel,
            'valor'         => $valor,
        );
        
        $result["success"] = $this->db->insert('veiculos', $fields);

        return $result;

    }





}
