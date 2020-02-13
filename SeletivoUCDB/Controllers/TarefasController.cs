using SeletivoUCDB.BD;
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
    }
}