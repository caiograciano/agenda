<?php

use Phinx\Migration\AbstractMigration;

class InsereRegistrosComponentes1576622244 extends AbstractMigration
{
    /**
     * Insere os registros no banco.
     */
    public function up()
    {

        $comonentes = [
            ["id" => "5df9585758c93","text" => "Agenda Foreign","chave" => "m-agenda_foreign","tipo" => "M","icon" => "fa fa-address-book","parent" => "#","menu_id" => "5df9585742780","migration" => "1576622244"]
            ,["id" => "5df9585759d4f","text" => "Listar","chave" => "f-agenda_foreign-list","tipo" => "F","icon" => "fa fa-list","parent" => "5df9585758c93","menu_id" => null,"migration" => "1576622244"]
            ,["id" => "5df958575a699","text" => "Criar","chave" => "f-agenda_foreign-create","tipo" => "F","icon" => "fa fa-check","parent" => "5df9585758c93","menu_id" => null,"migration" => "1576622244"]
            ,["id" => "5df958575af81","text" => "Editar","chave" => "f-agenda_foreign-edit","tipo" => "F","icon" => "fa fa-edit","parent" => "5df9585758c93","menu_id" => null,"migration" => "1576622244"]
            ,["id" => "5df958575b84f","text" => "Remover","chave" => "f-agenda_foreign-remove","tipo" => "F","icon" => "fa fa-trash","parent" => "5df9585758c93","menu_id" => null,"migration" => "1576622244"]
            ,["id" => "5df958575c180","text" => "Visualizar","chave" => "f-agenda_foreign-show","tipo" => "F","icon" => "fa fa-eye","parent" => "5df9585758c93","menu_id" => null,"migration" => "1576622244"]
        ];

        $this->insert('singular_componente', $comonentes);
    }

    /**
     * Excluí os registros do banco.
     */
    public function down()
    {
        $this->execute('DELETE FROM singular_componente WHERE migration = "1576622244"');
    }
}
