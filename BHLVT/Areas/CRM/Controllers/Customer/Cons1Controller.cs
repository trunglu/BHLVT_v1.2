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
    public class Cons1Controller : CusCRMController
    {

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var array_actionwithoutRun = new string[] { "SearchConst" };
            var actionname = filterContext.RouteData.Values["action"].ToString();
            if (array_actionwithoutRun.Count(x => x.Trim().ToLower() == actionname.ToLower()) <= 0) {
                // Do whatever here...
                var cusid = filterContext.RequestContext.HttpContext.Request["_id"];
                if (cusid == null || cusid == "")
                {
                    filterContext.Result = RedirectToAction("Index", "Cus", new { area = "crm" });
                    return;
                }
            }
        }

        // GET: CRM/Cons1
        public ActionResult Index()
        {
            ConstactController cc = new ConstactController(Server);

            return (ActionResult)cc.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tblcontract c)
        { 
            ConstactController cc = new ConstactController(Server);
            return (ActionResult)cc.IndexPost(Request, c)["view"];
            //return null;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(FormCollection _form)
        {
            ConstactController cc = new ConstactController(Server);
            return (ActionResult)cc.Delete(Request)["view"];
            //return null;
        }
        public ActionResult SearchConst() {
            ConstactController cc = new ConstactController(Server);
            return (ActionResult)cc.SearchConts(Request)["view"];
        }
    }
}