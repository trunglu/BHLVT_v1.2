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
    public class FunsController : CusCRMController
    {
        // GET: CRM/Schs
       

       

        // GET: CRM/Mis1
        public ActionResult Index()
        {
            DailyReportsController drc = new DailyReportsController(Server);
            return (ActionResult)drc.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tbldailyreport c)
        {

            DailyReportsController drc = new DailyReportsController(Server);
            return (ActionResult)drc.IndexPost(Request, c)["view"];
            //return null;
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(FormCollection _form)
        {

            DailyReportsController drc = new DailyReportsController(Server);
            return (ActionResult)drc.Delete(Request)["view"];
            //return null;
        }
    }
}