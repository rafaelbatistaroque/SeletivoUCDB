appTarefas.controller('tarefaCtrl', function ($scope, tarefaServices) {

    $scope.opcoesStatus = [
        { status: "Pra fazer" },
        { status: "Concluída!" },
        { status: "Não fazer" },
        { status: "Pendente" }
    ];

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

    //Atualizar Status
    $scope.atualizarStatusDeTarefa = function (itemLista, idTarefa) {
        var tarefaParaAtualizar = {
            Id: idTarefa,
            StatusTarefa: itemLista
        };

        tarefaServices.acessarRepositorioParaAtualizarTarefa(tarefaParaAtualizar)
            .then(function (respostaAtualizacao) {
                if (respostaAtualizacao.data.success) {
                    obterListaDeTarefasParaSeremCarregadasEmTela();
                    alert("Tarefa Atualizada!");
                } else alert("Tarefa não Atualizada");
            }, () => alert("Deu ruim"));
    };

    //Excluir Tarefa
    $scope.deletarTarefaDaLista = function (idTarefa) {
         tarefaServices.acessarRepositorioParaExcluirTarefa(idTarefa)
            .then(function (respostaExclusao) {
                if (respostaExclusao.data.success) {
                    obterListaDeTarefasParaSeremCarregadasEmTela();
                    alert("Tarefa Excluída!");
                } else alert("Tarefa não pode ser excluída");
            }, () => alert("Deu ruim"));
    };

    obterListaDeTarefasParaSeremCarregadasEmTela();
});