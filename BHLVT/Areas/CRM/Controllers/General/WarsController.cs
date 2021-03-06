﻿using BHLVTBLL.Attributes;
using BHLVTDAL.Data;
using CRMLVTBLLmd.Services.General;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BHLVT.Areas.CRM.Controllers.General
{
    [VTAuthorize]
    public class WarsController : Controller
    {
        WarrantyController wc = new WarrantyController();
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
            return (ActionResult)wc.Index(Request)["view"];
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(tblwarranty w)
        {
            /*var db= new LVTDBContext();
            var _d = db.tblwarranties
                        .FirstOrDefault(x => x.warrantyid == w.warrantyid);
            _d.warrantyname = w.warrantyname;
            db.Entry(_d).State = EntityState.Modified;
            db.SaveChanges();*/
            return (ActionResult)wc.IndexPost(Request, w)["view"];
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(FormCollection _form)
        {
            return (ActionResult)wc.Delete(Request)["view"];
        }
    }
}