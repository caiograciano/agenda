<?php

use Phinx\Migration\AbstractMigration;

class InsereRegistrosAplicacoes1576202462 extends AbstractMigration
{
    /**
     * Insere os registros no banco.
     */
    public function up()
    {

        $aplicacoes = [
            ["id" => "5df2eff4cba35","aplicacao" => "Agenda","ordem" => "100","ativo" => "1","migration" => "1576202462"]
        ];

        $this->insert('singular_aplicacao', $aplicacoes);
    }

    /**
     * Excluí os registros do banco.
     */
    public function down()
    {
        $this->execute('DELETE FROM singular_aplicacao WHERE migration = "1576202462"');
    }
}
