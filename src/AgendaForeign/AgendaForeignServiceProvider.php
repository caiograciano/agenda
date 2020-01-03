<?php
namespace AgendaForeign;

use Singular\Provider\PackServiceProvider;
use Pimple\Container;
use Silex\Application;

/**
 * Provedor de serviços do pacote AgendaForeign.
 *
 * @author Author <Email>
 */
class AgendaForeignServiceProvider extends PackServiceProvider
{
    /**
     * Nome do pacote.
     *
     * @var string
     */
    protected $pack = 'agendaforeign';

    /**
     * Registra serviços e parâmetros do pacote.
     *
     * @param Container $app
     */
    public function register(Container $app)
    {
    }

    /**
     * Define controladores como serviços e mapeia rotas do pacote.
     *
     * @param Application $app
     */
    public function connect(Application $app)
    {
    }

    /**
     * Executa ações durante o boot da aplicação.
     *
     * @param Application $app
     */
    public function boot(Application $app)
    {
    }
}
