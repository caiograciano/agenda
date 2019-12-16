(function () {
    'use strict';

    /**
     * Módulo de frontend.
     *
     * @author Author <Email>
     */
    angular.module('secure.agenda', [
        /*@modules*/
    ])
        .config(
            [
                '$stateProvider',
                configFn
            ]
        );

    /**
     * Definição da função de configuração do módulo.
     *
     * @param {$stateProvider} $stateProvider
     */
    function configFn($stateProvider) {
        $stateProvider.state('app.agenda-list', {
            url: '/agenda/list',
            controller: 'agenda.ListCtrl',
            templateUrl: getView('agenda.list')
        })
            .state('app.agenda-create', {
                url: '/agenda/create',
                controller: 'agenda.CreateCtrl',
                templateUrl: getView('agenda.form')
            })
            .state('app.agenda-edit', {
                url: '/agenda/edit/:id',
                controller: 'agenda.EditCtrl',
                templateUrl: getView('agenda.form')
            })
            .state('app.agenda-show', {
                url: '/agenda/view/:id',
                controller: 'agenda.ViewCtrl',
                templateUrl: getView('agenda.form')
            })
        ;
    }

    /**
     * Retorna o caminho completo de uma view.
     *
     * @param view
     * @returns {string}
     */
    function getView(view) {
        return 'src//secure/agenda/views/' + view + '.html';
    }

}());