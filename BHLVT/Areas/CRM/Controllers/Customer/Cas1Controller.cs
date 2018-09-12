using BHLVT.Areas.CRM.Controllers.Customer;
using BHLVTBLL.Attributes;
using BHLVTDAL.Data;
using CRMLVTBLLmd.Models.Ultils;
using CRMLVTBLLmd.Services.Customer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BHLVT.Areas.CRM.Controllers.Customer
{
    [VTAuthorize]
    public class Cas1Controller : CusCRMController
    {
        CashController cc = new CashController();
        // GET: CRM/Cas1
        public ActionResult Index()
        {
            return (ActionResult)cc.Index(Request)["view"];
        }
        public ActionResult Index1() {
            return (ActionResult)cc.Index1(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index1(tblcash c)
        {
            return (ActionResult)cc.Index1Post(Request,c)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete() {
            return (ActionResult)cc.Delete(Request)["view"];
        }

    }
}