<?php

use Phinx\Migration\AbstractMigration;

class InsereRegistrosModulos1576622238 extends AbstractMigration
{
    /**
     * Insere os registros no banco.
     */
    public function up()
    {

        $modulos = [
            ["id" => "5df9585742780","aplicacao_id" => "5df957fa05969","modulo_id" => null,"modulo" => "Agenda Foreign","icon_cls" => "fa fa-adreass","ui_sref" => "app.agenda-foreign-list","ordem" => "99","ativo" => "1","migration" => "1576622238"]
        ];

        $this->insert('singular_modulo', $modulos);
    }

    /**
     * Excluí os registros do banco.
     */
    public function down()
    {
        $this->execute('DELETE FROM singular_modulo WHERE migration = "1576622238"');
    }
}
