(function()
{
    'use strict';

    /**
     * Controlador responsável por formulário de criação/edição.
     *
     * @author Author <Email>
     */
    angular.module('secure.agenda').controller(
        'agenda.EditCtrl',
        [
             '$scope'
            ,'$state'
            ,'$stateParams'
            ,'toastr'
            ,'agenda.agendaService'
            ,Controller
        ]
    );

    /**
     * Função de definição do controlador.
     *
     * @param $scope
     * @param $state
     * @param $stateParams
     * @param toastr
     * @param agendaService
     * @constructor
     */
    function Controller(
         $scope
        ,$state
        ,$stateParams
        ,toastr
        ,agendaService
    ) {
        /**
         * Instancia o servico de agenda
         * @type{StoreFactory}
         */
        $scope.servico = agendaService;

        /**
         * Define que o formulário está em estado de visualização.
         *
         * @type {string}
         */
        $scope.viewState = 'edit';

        /**
         * Se o registro foi encontrado.
         *
         * @type {boolean}
         */
        $scope.hasRecord = true;

        /**
         * Define que o formulário foi submetido.
         *
         * @type {boolean}
         */
        $scope.isSubmited = false;

        /**
         * Define que o formulário está em processo de salvamento.
         *
         * @type {boolean}
         */
        $scope.isSaving = false;

        /**
         * Referência ao registro em edição.
         *
         * @type {Object}
         */
        $scope.record = {};

        /**
         * Referência ao formulário da view.
         *
         * @type {Object}
         */
        $scope.forms = {
            agenda: {}
        };

        /**
         * Api de comunicação com o controlador no backend.
         *
         * @todo Alterar o valor do pacote/controlador
         * @type {$sngApi}
         */
        $scope.api = $scope.servico.api;

        /**
         * Inicialização do controlador.
         */
        $scope.onInit = function(){
            $scope.getRecord($stateParams.id);
        };

        /**
         * Salva o registro no backend.
         *
         */
        $scope.save = function() {
            $scope.isSubmited = true;

            if (!$scope.forms.agenda.$invalid) {
                $scope.isSaving = true;

                $scope.api.save($scope.record).then(function(response){
                    if (response.success) {
                        $scope.isSaving = false;
                        
                        toastr.success('Registro atualizado com sucesso!');

                        $state.go('app.agenda-list');
                    } else {
                        toastr.error('Falhou ao atualizar o registro!');
                    }
                });
            } else {
                toastr.error('Verifique o preenchimento do formulário!');
            }
        };

        /**
         * Carrega um registro na Api pelo seu id.
         *
         * @param {int} id
         */
        $scope.getRecord = function(id) {
            $scope.hasRecord = false;

            $scope.api.get(id).then(function(record){
                if (record) {
                    $scope.hasRecord = true;
                }

                $scope.record = record;
            });
        };

        $scope.onInit();
    }

}());