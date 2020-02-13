appTarefas.controller('tarefaCtrl', function ($scope, tarefaServices) {

    //Obter Tarefas
    function obterListaDeTarefasParaSeremCarregadasEmTela() {
        tarefaServices.acessarRepositorioParaObterListaTarefas().then(function (cadaTarefaRetornada) {
            $scope.Tarefas = cadaTarefaRetornada.data;
        }, () => alert("Erro ao obter Tarefas"));
    };

    obterListaDeTarefasParaSeremCarregadasEmTela();
});