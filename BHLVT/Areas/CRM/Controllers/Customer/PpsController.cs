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
    public class PpsController : CusCRMController
    {

        ProgressController pc = new ProgressController();
        // GET: CRM/Pps

        public ActionResult Create() {
            return (ActionResult)pc.Create(Request,null)["view"];
        }
        public ActionResult Update() {
            return (ActionResult)pc.Update(Request, null)["view"];
        }
        public ActionResult Post(tblprogress model) {
            return (ActionResult)pc.Post(Request, model)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete() {
            return (ActionResult)pc.Delete(Request)["view"];
        }
    }
}