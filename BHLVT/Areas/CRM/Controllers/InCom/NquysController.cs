using BHLVTBLL.Attributes;
using BHLVTDAL.Data;
using CRMLVTBLLmd.Services.InCom;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

namespace BHLVT.Areas.CRM.Controllers.InCom
{
    [VTAuthorize]
    public class NquysController : Controller
    {
        // GET: CRM/Schs
        NoiQuyController nq;

        public NquysController()
        {

        }
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            // Do whatever here...
            nq = new NoiQuyController(Server);
        }

        // GET: CRM/Mis1
        public ActionResult Index()
        {
            
            return (ActionResult)nq.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tblreport c)
        {
            return (ActionResult)nq.IndexPost(Request, c)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(FormCollection _form)
        {
            return (ActionResult)nq.Delete(Request)["view"];
            //return null;
        }
    }
}