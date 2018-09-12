using BHLVTBLL.Attributes;
using BHLVTBLL.ModelsBLL.ViewModel;
using BHLVTDAL.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BHLVT.Controllers.ERP.PO
{
    [VTAuthorize]
    public class MuaHangController : Controller
    {
        LVTDBContext db = new LVTDBContext();
        // GET: MuaHang
        public ActionResult Index()
        {
            var b = new POViewModel();
            return View(b);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(POViewModel pomodel) {

            return null;
        }
    }
}