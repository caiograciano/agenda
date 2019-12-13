(function()
{
   /**
    * Serviço de interface.
    *
    * @author  <Author>
    */
    angular.module('secure.agenda').factory(
        'agenda.agendaService',
        [
            '$sngApi',
            Service
        ]
    );

    /**
     * Função de definição do serviço.
     *
     * @param $sngApi
     * @returns {Service}
     * @constructor
     */
    function Service(
        $sngApi
    ) {
        var me = {
            // definição da interface do serviço
        };

        return me;
    }
}());