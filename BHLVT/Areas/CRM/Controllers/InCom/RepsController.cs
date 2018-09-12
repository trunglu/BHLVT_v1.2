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
    public class RepsController : Controller
    {
        // GET: CRM/Schs
        NoticeController nc;

        public RepsController()
        {

        }
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            // Do whatever here...
            nc = new NoticeController(Server);
        }

        // GET: CRM/Mis1
        public ActionResult Index()
        {

            return (ActionResult)nc.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tblreport c)
        {
           
            return (ActionResult)nc.IndexPost(Request, c)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(FormCollection _form)
        {
            return (ActionResult)nc.Delete(Request)["view"];
            //return null;
        }
    }
}