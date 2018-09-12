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
    public class IdasController : Controller
    {
        // GET: CRM/Schs
        

       

        // GET: CRM/Mis1
        public ActionResult Index()
        {
            IdeasController nc = new IdeasController(Server);
            return (ActionResult)nc.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tblidea c)
        {

            IdeasController nc = new IdeasController(Server);
            return (ActionResult)nc.IndexPost(Request, c)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(FormCollection _form)
        {
            IdeasController nc = new IdeasController(Server);
            return (ActionResult)nc.Delete(Request)["view"];
            //return null;
        }
    }
}