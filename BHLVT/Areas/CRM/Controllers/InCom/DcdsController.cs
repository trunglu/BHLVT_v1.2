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
    public class DcdsController : Controller
    {
        // GET: CRM/Schs
        DecisionsController dc;

        public DcdsController()
        {

        }
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            // Do whatever here...
            dc = new DecisionsController(Server);
        }

        // GET: CRM/Mis1
        public ActionResult Index()
        {

            return (ActionResult)dc.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tblreport c)
        {
            return (ActionResult)dc.IndexPost(Request, c)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(FormCollection _form)
        {
            return (ActionResult)dc.Delete(Request)["view"];
            //return null;
        }
    }
}