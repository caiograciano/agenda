<?php

use Phinx\Migration\AbstractMigration;

class InsereRegistrosAplicacoes1576622238 extends AbstractMigration
{
    /**
     * Insere os registros no banco.
     */
    public function up()
    {

        $aplicacoes = [
            ["id" => "5df957fa05969","aplicacao" => "Agenda Foreign","ordem" => "99","ativo" => "1","migration" => "1576622238"]
        ];

        $this->insert('singular_aplicacao', $aplicacoes);
    }

    /**
     * Excluí os registros do banco.
     */
    public function down()
    {
        $this->execute('DELETE FROM singular_aplicacao WHERE migration = "1576622238"');
    }
}
