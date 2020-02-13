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
    function trataFormatoDeDatasParaExibicaoNaLista() {
        $scope.Tarefas.forEach(function (item) {
            //Mudar para TimeStamp para cálculo
            item["DataTimeStamp"] = +item["DataHora"].slice(6, 19);
            //Mudar para formato de exibição
            item["DataHora"] = moment(item["DataHora"]).format("DD/MM/YYYY hh:mm:ss");
        });
    };
    function alteraCoresDoConformeStatusDeTarefa() {
        $scope.DataAtual = new Date().getTime();

        $scope.Tarefas.forEach(item => item["Cor"] =
            (item["DataTimeStamp"] <= $scope.DataAtual || item["DataTimeStamp"] >= $scope.DataAtual) && item["StatusTarefa"] == "Concluída!" ? concluida
                : (item["DataTimeStamp"] <= $scope.DataAtual || item["DataTimeStamp"] >= $scope.DataAtual) && item["StatusTarefa"] == "Não fazer" ? naoFazer
                    : (item["DataTimeStamp"] <= $scope.DataAtual || item["StatusTarefa"] == "Pendente") ? pendente : praFazer
        );
    };

    //Obter Tarefas
    $scope.obterListaDeTarefasParaSeremCarregadasEmTela = function() {
        $scope.validarInputDescricaoTarefa();

        tarefaServices.acessarRepositorioParaObterListaTarefas().then(function (cadaTarefaRetornada) {
            $scope.Tarefas = cadaTarefaRetornada.data;
            trataFormatoDeDatasParaExibicaoNaLista();
            alteraCoresDoConformeStatusDeTarefa();
        }, () => alert("Erro ao obter Tarefas"));
    };

    //FILTRO
    //Obter tarefas de hoje
    $scope.obterListaDeTarefasComDataDeHoje = function(){
        tarefaServices.acessarRepositorioParaObterTarefasDeHoje()
            .then(function (cadaTarefaRetornada) {
                $scope.Tarefas = cadaTarefaRetornada.data;
                trataFormatoDeDatasParaExibicaoNaLista();
                alteraCoresDoConformeStatusDeTarefa();
            }, () => alert("Erro ao obter Tarefas"));
    };

    //Desabilita botão add se campo tarefa é vazio
    $scope.validarInputDescricaoTarefa = function () {
        $scope.StatusButton =
            ($scope.inputTarefa == undefined || $scope.inputTarefa == '') ? true : false;
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
                    $scope.obterListaDeTarefasParaSeremCarregadasEmTela();
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
                    $scope.obterListaDeTarefasParaSeremCarregadasEmTela();
                    alert("Tarefa Atualizada!");
                } else alert("Tarefa não Atualizada");
            }, () => alert("Deu ruim"));
    };

    //Excluir Tarefa
    $scope.deletarTarefaDaLista = function (idTarefa) {
         tarefaServices.acessarRepositorioParaExcluirTarefa(idTarefa)
            .then(function (respostaExclusao) {
                if (respostaExclusao.data.success) {
                    $scope.obterListaDeTarefasParaSeremCarregadasEmTela();
                    alert("Tarefa Excluída!");
                } else alert("Tarefa não pode ser excluída");
            }, () => alert("Deu ruim"));
    };

    $scope.obterListaDeTarefasParaSeremCarregadasEmTela();
});