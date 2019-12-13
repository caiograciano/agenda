<?php

use Phinx\Migration\AbstractMigration;

class InsereRegistrosModulos1576202462 extends AbstractMigration
{
    /**
     * Insere os registros no banco.
     */
    public function up()
    {

        $modulos = [
            ["id" => "5df2f08332b99","aplicacao_id" => "5df2eff4cba35","modulo_id" => null,"modulo" => "Agenda","icon_cls" => "fa fa-address-book","ui_sref" => "app.agenda-list","ordem" => "100","ativo" => "1","migration" => "1576202462"]
        ];

        $this->insert('singular_modulo', $modulos);
    }

    /**
     * Excluí os registros do banco.
     */
    public function down()
    {
        $this->execute('DELETE FROM singular_modulo WHERE migration = "1576202462"');
    }
}
