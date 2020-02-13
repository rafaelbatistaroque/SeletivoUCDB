using SeletivoUCDB.BD;
using SeletivoUCDB.Models;
using System.Linq;
using System.Web.Mvc;

namespace SeletivoUCDB.Controllers
{
    public class TarefasController : Controller
    {
        // GET: Tarefas/ObterListaDeTarefasArmazenadasNoBD
        public JsonResult ObterListaDeTarefasArmazenadasNoBD()
        {
            using (var db = new SeletivoUCDBDbContext())
            {
                return Json(db.Tarefas.ToList(), JsonRequestBehavior.AllowGet);
            }
        }
        // POST Tarefas/AdicionarTarefaNoBD
        [HttpPost]
        public JsonResult AdicionarTarefaNoBD(Tarefa tarefa)
        {
            if (tarefa != null)
            {
                using (var db = new SeletivoUCDBDbContext())
                {
                    db.Tarefas.Add(tarefa);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        // POST Tarefas/AtualizarStatusDaTarefaNoBD
        [HttpPost]
        public JsonResult AtualizarStatusDaTarefaNoBD(Tarefa tarefa)
        {
            if (tarefa != null)
            {
                using (var db = new SeletivoUCDBDbContext())
                {
                    var tarefaLocalizada = db.Tarefas.Find(tarefa.Id);

                    tarefaLocalizada.StatusTarefa = tarefa.StatusTarefa;
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        // POST Tarefas/ExcluirRegistroDeTarefaNoBD/
        [HttpPost]
        public JsonResult ExcluirRegistroDeTarefaNoBD(int id)
        {
            using (var db = new SeletivoUCDBDbContext())
            {
                var tarefaLocalizada = db.Tarefas.Find(id);
                if (tarefaLocalizada != null)
                {
                    db.Tarefas.Remove(tarefaLocalizada);
                    db.SaveChanges();
                    return Json(new { success = true });
                }
                return Json(new { success = false });
            }
        }
    }
}