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
    public class ReqsController : CusCRMController
    { // GET: CRM/Schs
       

        
        

        // GET: CRM/Mis1
        public ActionResult Index()
        {
            RequirementController rc = new RequirementController(Server);
            return (ActionResult)rc.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tblrequest c)
        {

            RequirementController rc = new RequirementController(Server);
            return (ActionResult)rc.IndexPost(Request, c)["view"];
            //return null;
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(FormCollection _form)
        {

            RequirementController rc = new RequirementController(Server);
            return (ActionResult)rc.Delete(Request)["view"];
            //return null;
        }
    }
}