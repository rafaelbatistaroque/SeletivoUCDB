appTarefas.service("tarefaServices", function ($http) {

    this.acessarRepositorioParaObterListaTarefas = () => $http.get("/Tarefas/ObterListaDeTarefasArmazenadasNoBD");
});