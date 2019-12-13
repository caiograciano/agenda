<?php

use Phinx\Migration\AbstractMigration;

class InsereRegistrosComponentes1576202447 extends AbstractMigration
{
    /**
     * Insere os registros no banco.
     */
    public function up()
    {

        $comonentes = [
            ["id" => "5df2f08351be8","text" => "Agenda","chave" => "m-agenda","tipo" => "M","icon" => "fa fa-address-book","parent" => "#","menu_id" => "5df2f08332b99","migration" => "1576202447"]
            ,["id" => "5df2f08353324","text" => "Listar","chave" => "f-agenda-list","tipo" => "F","icon" => "fa fa-list","parent" => "5df2f08351be8","menu_id" => null,"migration" => "1576202447"]
            ,["id" => "5df2f08353e54","text" => "Criar","chave" => "f-agenda-create","tipo" => "F","icon" => "fa fa-check","parent" => "5df2f08351be8","menu_id" => null,"migration" => "1576202447"]
            ,["id" => "5df2f08354dfb","text" => "Editar","chave" => "f-agenda-edit","tipo" => "F","icon" => "fa fa-edit","parent" => "5df2f08351be8","menu_id" => null,"migration" => "1576202447"]
            ,["id" => "5df2f08355b2f","text" => "Remover","chave" => "f-agenda-remove","tipo" => "F","icon" => "fa fa-trash","parent" => "5df2f08351be8","menu_id" => null,"migration" => "1576202447"]
            ,["id" => "5df2f08357285","text" => "Visualizar","chave" => "f-agenda-show","tipo" => "F","icon" => "fa fa-eye","parent" => "5df2f08351be8","menu_id" => null,"migration" => "1576202447"]
        ];

        $this->insert('singular_componente', $comonentes);
    }

    /**
     * Excluí os registros do banco.
     */
    public function down()
    {
        $this->execute('DELETE FROM singular_componente WHERE migration = "1576202447"');
    }
}
