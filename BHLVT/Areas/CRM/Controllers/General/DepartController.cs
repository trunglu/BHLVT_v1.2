using BHLVTBLL.Attributes;
using BHLVTDAL.Data;
using CRMLVTBLLmd.Services.General;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BHLVT.Areas.CRM.Controllers.General
{
    [VTAuthorize]
    public class DepartController : Controller
    {
        DepartmentController dc = new DepartmentController();
        // GET: CRM/Depart
        public ActionResult Index()
        {
            return (ActionResult)dc.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tbldepartment d) {
            return (ActionResult)dc.IndexPost(Request,d)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(FormCollection _form) {
            return (ActionResult)dc.Delete(Request)["view"];
        }
    }
}