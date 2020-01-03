(function()
{
    'use strict';

    /**
     * Controlador responsável por funcionalidade da aplicação.
     *
     * @author Author <Email>
     */
    angular.module('secure.agenda').controller(
        'agenda.FilterCtrl',
        [
            '$scope'
            ,'$state'
            ,'$stateParams'
            ,'$uibModal'
            ,'SweetAlert'
            ,'toastr'
            ,'$sngApi'
            ,Controller
        ]
    );

    /**
     * Função de definição do controlador.
     *
     * @param $scope
     * @param $state
     * @param $stateParams
     * @param $modal
     * @param SweetAlert
     * @param toastr
     * @param $sngApi
     * @constructor
     */
    function Controller(
         $scope
        ,$state
        ,$stateParams
        ,$modal
        ,SweetAlert
        ,toastr
        ,$sngApi
    ) {
        /**
         * Inicialização do controlador.
         */
        $scope.onInit = function(){

        };

        $scope.onInit();
    }

}());