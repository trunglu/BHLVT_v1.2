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
    public class TsksController : Controller
    {
        // GET: CRM/Schs
        TaskController tc;

        public TsksController()
        {

        }
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            // Do whatever here...
            tc = new TaskController(Server);
        }

        // GET: CRM/Mis1
        public ActionResult Index()
        {

            return (ActionResult)tc.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tblreport c)
        {

            return (ActionResult)tc.IndexPost(Request, c)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(FormCollection _form)
        {
            return (ActionResult)tc.Delete(Request)["view"];
            //return null;
        }
    }
}