using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BHLVT.Areas.XConfig.Controllers
{
    public class XViewController : Controller
    {
        // GET: XConfig/XView
        public ActionResult Index()
        {
            return View();
        }
    }
}