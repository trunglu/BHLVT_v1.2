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
    public class ProvsController : Controller
    {
        ProvinceController pv = new ProvinceController();
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
            return (ActionResult)pv.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tblcity c)
        {
            return (ActionResult)pv.IndexPost(Request, c)["view"];
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(FormCollection _form)
        {
            return (ActionResult)pv.Delete(Request)["view"];
        }
    }
}