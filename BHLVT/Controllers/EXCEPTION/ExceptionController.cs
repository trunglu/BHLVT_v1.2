using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BHLVT.Controllers
{
    public class ExceptionController : Controller
    {
        //
        // GET: /Exception/
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ServerError(String error)
        {

            return View("ServerError", error as object);
        }
        public ActionResult ServerError1(string e) {
            //TempData["student"]=error
            var error = new Dictionary<string, Object> { { "error", Session["error_url"] } };
            return View("ServerError1",error);
        }
	}
}