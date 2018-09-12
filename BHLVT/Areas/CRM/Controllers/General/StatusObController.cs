using BHLVTBLL.Attributes;
using BHLVTDAL.Data;
using CRMLVTBLLmd.Services.General;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BHLVT.Areas.CRM.Controllers.General
{
    [VTAuthorize]
    public class StatusObController : Controller
    {
        StatusObjectController sob = new StatusObjectController();
        // GET: CRM/Depart
        public ActionResult Index()
        {
            return (ActionResult)sob.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tblpstatu s)
        {
            return (ActionResult)sob.IndexPost(Request, s)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(FormCollection _form)
        {
            return (ActionResult)sob.Delete(Request)["view"];
        }
    }
}