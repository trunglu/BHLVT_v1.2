using BHLVTBLL.Attributes;
using CRMLVTBLLmd.Services.Report.General;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BHLVT.Areas.CRM.Controllers.Report.General
{
    [VTAuthorize]
    public class RFB1Controller : Controller
    {
        ReportFormBase1Controller rfb = new ReportFormBase1Controller();

        // GET: CRM/RFB1
        public ActionResult Index()
        {
            return (ActionResult)rfb.Index(Request)["view"];
        }
    }
}