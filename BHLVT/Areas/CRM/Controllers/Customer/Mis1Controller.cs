using BHLVTBLL.Attributes;
using BHLVTDAL.Data;
using CRMLVTBLLmd.Services.Customer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BHLVT.Areas.CRM.Controllers.Customer
{
    [VTAuthorize]
    public class Mis1Controller : CusCRMController
    {
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var array_actionwithoutRun = new string[] { "Index3" };
            var actionname = filterContext.RouteData.Values["action"].ToString();
            if (array_actionwithoutRun.Count(x => x.Trim().ToLower() == actionname.ToLower()) <= 0)
            {
                // Do whatever here...
                var cusid = filterContext.RequestContext.HttpContext.Request["_id"];
                if (cusid == null || cusid == "")
                {
                    filterContext.Result = RedirectToAction("Index", "Cus", new { area = "crm" });
                    return;
                }
            }
        }

        // GET: CRM/Mis1
        public ActionResult Index()
        {
            Mission1Controller mc = new Mission1Controller(Server);
            return (ActionResult)mc.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tblmission c)
        {
            Mission1Controller mc = new Mission1Controller(Server);
            return (ActionResult)mc.IndexPost(Request, c)["view"];
            //return null;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(FormCollection _form)
        {
            Mission1Controller mc = new Mission1Controller(Server);
            return (ActionResult)mc.Delete(Request)["view"];
          // return null;
        }
        public ActionResult Index3()
        {
            Mission1Controller mc = new Mission1Controller(Server);
            return (ActionResult)mc.Index3(Request)["view"];
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index3(tblmission c)
        {
            Mission1Controller mc = new Mission1Controller(Server);
            return (ActionResult)mc.Index3Post(Request, c)["view"];
        }

    }
}