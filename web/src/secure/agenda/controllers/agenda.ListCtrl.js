(function()
{
    'use strict';

    /**
     * Controlador responsável por funcionalidade de listagem.
     *
     * @author Author <Email>
     */
    angular.module('secure.agenda').controller(
        'agenda.ListCtrl',
        [
            '$scope'
            ,'toastr'
            , 'agenda.agendaService'
            ,Controller
        ]
    );

    /**
     * Função de definição do controlador.
     *
     * @param $scope
     * @param toastr
     * @param agendaService
     * @constructor
     */
    function Controller(
         $scope
        ,toastr
        ,agendaService
    ) {
        /**
         * Instancia o servico de agenda
         * @type{StoreFactory}
         */
        $scope.servico = agendaService;

        /**
         * Referência local ao serviço do filtro.
         *
         * @type {$sngApi}
         */
        $scope.filtro = $scope.servico.filter;

        /**
         * Referência local ao serviço da paginação.
         *
         * @type {$sngPaging}
         */
        $scope.paging = $scope.servico.paging;

        /**
         * Api de comunicação com o controlador no backend.
         *
         * @type {$sngApi}
         */
        $scope.api = $scope.servico.api;

        /**
         * Configuração de ordenação padrão.
         *
         * @type {string}
         */
        $scope.sort = null;

        /**
         * Registros que serão exibidos na interface.
         *
         * @type {Array}
         */
        $scope.records = [];

        /**
         * Inicialização do controlador.
         */
        $scope.onInit = function(){
            $scope.reloadData();
        };

        /**
         * Recarrega a lista de registros.
         */
        $scope.reloadData = function(){
            $scope.api.find($scope.sort).then(function(results){
                $scope.records = results;
            });
        };

        /**
         * Remove um registro pelo seu id.
         *
         * @param {int} id
         */
        $scope.remove = function (id) {
            $scope.api.remove(id, function(response) {
                if (response) {
                    $scope.reloadData();
                }
            });
        };

        $scope.onInit();
    }

}());