using BHLVTBLL.Attributes;
using BHLVTDAL.Data;
using CRMLVTBLLmd.CONST;
using CRMLVTBLLmd.Services.Customer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace BHLVT.Areas.CRM.Controllers.Customer
{
    [VTAuthorize]
    public class PrcsController : CusCRMController
    {
        
        public PrcsController() {
           // pc = new PricesController(Server);
        }
        /*protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            // Do whatever here...
            pc = new PricesController(Server);
            var cusid = filterContext.RequestContext.HttpContext.Request["_id"];
            if (cusid == null)
            {
                filterContext.Result = RedirectToAction("Index", "Cus", new { area = "crm" });
                return;
            }
        }*/
        public ActionResult Index()
        {
            //Server.GetType();
            PricesController pc = new PricesController(Server);
            return (ActionResult)pc.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tblquote c)
        {

            /*try {
                pc.SaveFiles(Request, null, ConstCRM.PATHQUOTE);
            } catch (Exception e) {

            }*/

            PricesController pc = new PricesController(Server);
            return (ActionResult)pc.IndexPost(Request, c)["view"];
            //return null;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(FormCollection _form)
        {
            PricesController pc = new PricesController(Server);
            return (ActionResult)pc.Delete(Request)["view"];
            //return null;
        }
    }
}