using BHLVTBLL.Attributes;
using BHLVTBLL.IdentityModel;
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
    public class SchsController : CusCRMController
    {
        // GET: CRM/Schs
       
        /*protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            // Do whatever here...
            sc = new ScheduleController(Server);
            var cusid = filterContext.RequestContext.HttpContext.Request["_id"];
            if (cusid == null)
            {
                filterContext.Result = RedirectToAction("Index", "Cus", new { area = "crm" });
                return;
            }
        */

        // GET: CRM/Mis1
        public ActionResult Index()
        {
           ScheduleController sc = new ScheduleController(Server);
            return (ActionResult)sc.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tblschedule c)
        {
            ScheduleController sc = new ScheduleController(Server);

            return (ActionResult)sc.IndexPost(Request, c)["view"];
            //return null;
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(FormCollection _form)
        {
            ScheduleController sc = new ScheduleController(Server);

            return (ActionResult)sc.Delete(Request)["view"];
            //return null;
        }
        public ActionResult Index1()
        {
            ScheduleController sc = new ScheduleController(Server);
            return (ActionResult)sc.Index1(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index1(tblschedule c)
        {
            ScheduleController sc = new ScheduleController(Server);
            return (ActionResult)sc.Index1Post(Request, c)["view"];
            //return null;
        }
        public ActionResult SearchCus() {
            ScheduleController sc = new ScheduleController(Server);
            return (ActionResult)sc.SearchCus(Request)["view"];
        }
    }
}