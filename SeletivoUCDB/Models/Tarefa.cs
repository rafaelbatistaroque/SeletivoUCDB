using System;

namespace SeletivoUCDB.Models
{
    public class Tarefa
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public DateTime DataHora { get; set; }
        public string StatusTarefa { get; set; }
    }
}