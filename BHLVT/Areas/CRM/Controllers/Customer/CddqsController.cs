using BHLVTBLL.Attributes;
using BHLVTDAL.Data;
using CRMLVTBLLmd.Services.InCom;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BHLVT.Areas.CRM.Controllers.Customer
{
    [VTAuthorize]
    public class CddqsController : Controller
    {
        // GET: CRM/Schs
        CodingDiaryController cdc;

        public CddqsController()
        {

        }
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            // Do whatever here...
            cdc = new CodingDiaryController(Server);
        }

        // GET: CRM/Mis1
        public ActionResult Index()
        {
            return (ActionResult)cdc.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tblcodingdiary c)
        {
            return (ActionResult)cdc.IndexPost(Request, c)["view"];
            //return null;
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(FormCollection _form)
        {
            return (ActionResult)cdc.Delete(Request)["view"];
            //return null;
        }
        public ActionResult Index1()
        {
            return (ActionResult)cdc.Index1(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index1(tblcodingdiary c)
        {
            return (ActionResult)cdc.Index1Post(Request, c)["view"];
            //return null;
        }
        public ActionResult SearchCus()
        {
            return (ActionResult)cdc.SearchCus(Request)["view"];
        }
    }
}