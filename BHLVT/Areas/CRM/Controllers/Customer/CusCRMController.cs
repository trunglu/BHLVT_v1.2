using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BHLVT.Areas.CRM.Controllers.Customer
{
    public class CusCRMController : Controller
    {
        // GET: CRM/CusCRM
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            // Do whatever here...
            var cusid = filterContext.RequestContext.HttpContext.Request["_id"];
            if (cusid == null || cusid == "") {
                filterContext.Result = RedirectToAction("Index", "Cus", new { area = "crm" });
                return;
            }
        }
       
    }
}