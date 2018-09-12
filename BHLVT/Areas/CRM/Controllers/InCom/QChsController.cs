using BHLVTBLL.Attributes;
using BHLVTDAL.Data;
using CRMLVTBLLmd.Services.InCom;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BHLVT.Areas.CRM.Controllers.InCom
{
    [VTAuthorize]
    public class QChsController : Controller
    {
        // GET: CRM/Schs
        QuyCheController qc;

        public QChsController()
        {

        }
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            // Do whatever here...
            qc = new QuyCheController(Server);
        }

        // GET: CRM/Mis1
        public ActionResult Index()
        {

            return (ActionResult)qc.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tblreport c)
        {
            return (ActionResult)qc.IndexPost(Request, c)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(FormCollection _form)
        {
            return (ActionResult)qc.Delete(Request)["view"];
            //return null;
        }
    }
}