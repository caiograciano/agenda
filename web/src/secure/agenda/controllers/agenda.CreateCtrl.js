(function()
{
    'use strict';

    /**
     * Controlador responsável por formulário de criação/edição.
     *
     * @author Author <Email>
     */
    angular.module('secure.agenda').controller(
        'agenda.CreateCtrl',
        [
             '$scope'
            ,'$state'
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
     * @param toastr
     * @param agendaService
     * @constructor
     */
    function Controller(
         $scope
        ,$state
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
        $scope.viewState = 'create';


        /**
         * Define que o formulário foi submetido.
         *
         * @type {boolean}
         */
        $scope.isSubmited = false;


        /**
         * Define que o formulário foi submetido.
         *
         * @type {boolean}
         */
        $scope.hasRecord = true;

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
         * @type {$sngApi}
         */
        $scope.api = $scope.servico.api;

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
                        
                        toastr.success('Registro criado!');

                        $state.go('app.agenda-list');
                    } else {
                        toastr.error('Falhou ao criar registro!');
                    }
                });
            } else {
                toastr.error('Verifique o preenchimento do formulário!');
            }
        };
    }

}());