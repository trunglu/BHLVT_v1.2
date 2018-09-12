using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BHLVT.Areas.Order.Controllers
{
    public class HomeController : Controller
    {
        // GET: Order/Home
        public ActionResult Index()
        {
            return View();
        }
    }
}