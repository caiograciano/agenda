(function () {
    /**
     * Serviço de interface.
     *
     * @author  <Author>
     */
    angular.module('secure.agenda').factory(
        'agenda.agendaService',
        [
            '$sngApi',
            '$sngFilter',
            '$sngPaging',
            Service,
        ]
    );

    /**
     * Função de definição do serviço.
     *
     * @param $sngApi
     * @param $sngFilter
     * @param $sngPaging
     * @returns {Service}
     * @constructor
     */
    function Service(
        $sngApi,
        $sngFilter,
        $sngPaging
    ) {


        /**
         * O filter espera receber o ng-model do campo do form que você está filtrando e a propriedade é o nome da coluna que ele vai buscar no BD
         *
         *
         */

        var filter = $sngFilter('src/secure/agenda/views/agenda.filter.html', {
                nome: {
                    property: 'nome',
                    operation: '%'
                }
            }),
            paging = $sngPaging,
            api = $sngApi('agenda/agenda', filter, paging),

            me = {
                /**
                 * Api De Comunicacao com o Controlador de agenda no Backand
                 * @type {$sngApi}
                 */
                api: api,
                /**
                 * Filtro de Resultado para listagem de agenda no backand
                 * @type{$sngApi}
                 */
                filter: filter,
                /**
                 * paginador de resultados para listagem de agenda no backand
                 * @type {$sngApi}
                 *
                 */
                paging: paging,
                /**
                 * Campo de ordenacao da lista de agenda
                 * @type{string}
                 */
                sort: null

            };

        return me;
    }
}());