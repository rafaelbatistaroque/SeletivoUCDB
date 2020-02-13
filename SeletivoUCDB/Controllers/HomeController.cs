using System.Web.Mvc;

namespace SeletivoUCDB.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.title = "Lista de tarefas";
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Clique aqui para acessar repositório do projeto";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Estou a disposição para contato.";

            return View();
        }
    }
}