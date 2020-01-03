<?php

use Phinx\Migration\AbstractMigration;

class CriarTabelaAgenda extends AbstractMigration
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     *
     * The following commands can be used in this method and Phinx will
     * automatically reverse them when rolling back:
     *
     *    createTable
     *    renameTable
     *    addColumn
     *    renameColumn
     *    addIndex
     *    addForeignKey
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function change()
    {
        $tabela = $this->table('agenda');
        $tabela->addColumn(
            'nome',
            'string',
            [
                'limit' => 250,
                'comment' => 'Nome do Contato'
            ]
        )->addColumn(
            'email',
            'string',
            [
                'limit' => 50,
                'comment' => 'Email do Contato'

            ]
        )->addColumn(
            'telefone',
            'string',
            [
                'limit' => 15,
                'comment' => 'Telefone do Contato'

            ]
        )->addColumn(
            'celular',
            'string',
            [
                'limit' => 15,
                'comment' => 'Celular do Contato'

            ]
        )->addColumn(
            'dt_criacao',
            'datetime',
            [
                'null'=> true,
                'comment' => 'Data de Criacao do registro '
            ]
        )->addColumn(
            'dt_atualizao',
            'datetime',
            [
                'null'=> true,
                'comment' => 'Data de Atualizacao do registro '
            ]
        )->addColumn(
            'dt_exclusao',
            'datetime',
            [
                'null'=> true,
                'comment' => 'Data de Exclusao do registro '
            ]
        );
        $tabela->create();

    }
}
