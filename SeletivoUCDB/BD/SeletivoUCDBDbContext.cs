using SeletivoUCDB.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SeletivoUCDB.BD
{
    public class SeletivoUCDBDbContext : DbContext
    {
        public SeletivoUCDBDbContext() : base("SeletivoUCDBDbContext") { }

        public DbSet<Tarefa> Tarefas { get; set; }
    }
}