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
    public class ContsController : CusCRMController
    {
        ContactController cc = new ContactController();
        // GET: CRM/Provs
        public ActionResult Index()
        {
            /*LVTDBContext db = new LVTDBContext();

          //  var p = db.tblcities.Where(x => x.cityid == "GLAI").FirstOrDefault();
            var model = new tblcity();
            ViewBag.btn = "Thêm";
            if (Request["_id"] != null)
            {
                var id = Request["_id"].ToString();
                model = db.tblcities.FirstOrDefault(x => x.cityid == id);
                ViewBag.btn = "Cập Nhật";
            }*/
            return (ActionResult)cc.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tblcontact c)
        {
            return (ActionResult)cc.IndexPost(Request, c)["view"];
            //return null;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(FormCollection _form)
        {
            return (ActionResult)cc.Delete(Request)["view"];
            //return null;
        }
    }
}