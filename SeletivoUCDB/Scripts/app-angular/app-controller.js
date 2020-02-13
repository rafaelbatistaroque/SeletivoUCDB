appTarefas.controller('tarefaCtrl', function ($scope, tarefaServices) {


    function limparCampos() {
        $scope.inputTarefa = "";
        $scope.inputHoraData = "";
    };

    //Obter Tarefas
    function obterListaDeTarefasParaSeremCarregadasEmTela() {
        tarefaServices.acessarRepositorioParaObterListaTarefas().then(function (cadaTarefaRetornada) {
            $scope.Tarefas = cadaTarefaRetornada.data;
        }, () => alert("Erro ao obter Tarefas"));
    };

    //Incluir Tarefa
    $scope.incluirNovaTarefaNaLista = function () {
        var novoObjetoTarefa = {
            Descricao: $scope.inputTarefa,
            DataHora: moment($scope.inputHoraData).format("YYYY-MM-DD HH:mm:ss.SSS"),
            StatusTarefa: "Pra fazer"
        };

        tarefaServices.acessarRepositorioParaInserirNovaTarefa(novoObjetoTarefa)
            .then(function (respostaInclusao) {
                if (respostaInclusao.data.success) {
                    obterListaDeTarefasParaSeremCarregadasEmTela();
                    alert("Adicionado!");
                } else alert("Tarefa não adicionada");

                limparCampos();

            }, () => alert("Deu ruim"));
    };

    obterListaDeTarefasParaSeremCarregadasEmTela();
});