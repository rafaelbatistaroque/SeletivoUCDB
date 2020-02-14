# Projeto: Lista de Tarefas

Projeto desenvolvido como requisito inicial para vaga de programador na [UCDB](https://site.ucdb.br/).

## Recursos Utilizados no Desenvolvimento da Aplicação:

* Visual Studio 2019 | 16.3.7 
* (Asp.NET) Framework MVC | 5
* Entity Framework | 6
* Sql Server Express Edition
* .NET Framework | 4.7.2
* AngularJs | 1.7.8
* Bootstrap | 3.4
* MomentJs | 2.24

## Informações adicionais
* A persistência dos dados foi desenvolvido usando o método firstCode. Sendo assim, a classe Tarefa foi construída esando o conceito de domínio pobre (POCO); as tabelas foram criadas executando os comandos migration do EF.
* Os arquivos do AngularJs estão [AQUI](https://github.com/rafaelbatistaroque/SeletivoUCDB/tree/master/SeletivoUCDB/Scripts/app-angular). A fim de obter legibilidade e organização, a estrutura dos blocos de código foram divididos em três nestes arquivos.
* A estrutura da view foi desenvolvida aqui [Index.cshtml](https://github.com/rafaelbatistaroque/SeletivoUCDB/blob/master/SeletivoUCDB/Views/Home/Index.cshtml).
 * O projeto possui dois controller: HomeController, responsável pelas navegações entre páginas, e o TarefaController, responsável por fazer as requisições no Banco de dados. (Fazendo o papel de repositório).

