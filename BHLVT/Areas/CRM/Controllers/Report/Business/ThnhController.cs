using BHLVTBLL.Attributes;
using CRMLVTBLLmd.Models.ViewModel;
using CRMLVTBLLmd.Services.Report.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BHLVT.Areas.CRM.Controllers.Report.Business
{
    [VTAuthorize]
    public class ThnhController : Controller
    {
        CustomerBaseController cb = new CustomerBaseController();
        
        // GET: CRM/Thnh
        public ActionResult Index2(ReportBaseModel model)
        {
            var l = cb.getListRs2(Request);
            return (ActionResult)cb.Index2(Request, model)["view"];
        }
    }
}