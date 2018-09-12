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
    public class AstsController : Controller
    {
        // GET: CRM/Schs
        AssetController nc;

        public AstsController()
        {

        }
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            // Do whatever here...
            nc = new AssetController(Server);
        }

        // GET: CRM/Mis1
        public ActionResult Index()
        {

            return (ActionResult)nc.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tblidea c)
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