using BHLVT.ConfigProgram;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BHLVT.Areas.XConfig.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /XConfig/Home/
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult PartialLeftSide() {

            return PartialView("~/Views/Shared/PartialView/_LeftSide");
        }
        public ActionResult ConnectionSetup() {

            var x = XWebConfig.GetP("");

            return View();
        }
	}
}