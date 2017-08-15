<?php
defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * Created by PhpStorm.
 * User: mmmelo
 * Date: 8/12/17
 * Time: 3:54 PM
 */


Class main extends CI_Controller{

    public function __construct(){

        parent::__construct();
        
        $this->load->model('main_model');
    }


    public function echoes (){

        $result =  array(
            "success" => true,
            "data" => $this->main_model->echoes()
        );


        echo json_encode($result);
    }

    public function get_veiculos (){

        $vec_id     = $this->input->post('id');
        $limit      = $this->input->post('limit');
        $offset     = $this->input->post('offset');

        $result =  array(
            "success" => true,
            "data" => $this->main_model->get_veiculos($vec_id, $limit, $offset),
        );
        
        echo json_encode($result);
    }
    public function search_veiculos (){

        $search     = $this->input->post('search');

        $result =  array(
            "success" => true,
            "data" => $this->main_model->search_veiculos($search),
        );

        echo json_encode($result);
    }

    public function get_edit_veiculos (){

        $vec_id     = $this->input->post('id');
        $placa      = $this->input->post('placa');
        $modelo     = $this->input->post('modelo');
        $marca      = $this->input->post('marca');
        $foto       = $this->input->post('foto');
        $combustivel= $this->input->post('combustivel');
        $valor      = $this->input->post('valor');

        $result =  array(
            "success" => true,
            "data" => $this->main_model->get_edit_veiculos($vec_id, $placa, $modelo, $marca, $foto, $combustivel, $valor)
        );


        echo json_encode($result);
    }
    
    public function get_add_veiculo (){

        $vec_id     = $this->input->post('id');
        $placa      = $this->input->post('placa');
        $modelo     = $this->input->post('modelo');
        $marca      = $this->input->post('marca');
        $foto       = $this->input->post('foto');
        $combustivel= $this->input->post('combustivel');
        $valor      = $this->input->post('valor');

        $result =  array(
            "success" => true,
            "data" => $this->main_model->get_edit_veiculos($vec_id, $placa, $modelo, $marca, $foto, $combustivel, $valor)
        );


        echo json_encode($result);
    }

}
