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
    }
}