const praFazer = "list-group-item";
const pendente = "list-group-item list-group-item-info";
const concluida = "list-group-item list-group-item-success";
const naoFazer = "list-group-item disabled";

appTarefas.service("tarefaServices", function ($http) {

    this.acessarRepositorioParaObterListaTarefas = () => $http.get("/Tarefas/ObterListaDeTarefasArmazenadasNoBD");

    this.acessarRepositorioParaInserirNovaTarefa = function (novaTarefa) {
        const requisicao = $http({
            method: "POST",
            url: "/Tarefas/AdicionarTarefaNoBD",
            data: novaTarefa
        });
        return requisicao;
    };

    this.acessarRepositorioParaAtualizarTarefa = function (tarefa) {
        const requisicao = $http({
            method: "POST",
            url: "/Tarefas/AtualizarStatusDaTarefaNoBD",
            data: tarefa
        });
        return requisicao;
    };

    this.acessarRepositorioParaExcluirTarefa = (idTarefa) => $http.post("/Tarefas/ExcluirRegistroDeTarefaNoBD/" + idTarefa);
});