using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using BHLVTDAL.Data;

namespace BHLVT.Controllers
{
    public class arkhsController : Controller
    {
        private LVTDBContext db = new LVTDBContext();

        // GET: arkhs
        public ActionResult Index()
        {
            return View(db.arkhs.ToList());
        }

        // GET: arkhs/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            arkh arkh = db.arkhs.Find(id);
            if (arkh == null)
            {
                return HttpNotFound();
            }
            return View(arkh);
        }

        // GET: arkhs/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: arkhs/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ma_cty,ma_kh,loai,ten_kh,ma_so_thue,dia_chi,tel,fax,email,home_page,nguoi_gd,so_tk_nh,ten_nh,tinh_tp_nh,tk,ma_plkh1,ma_plkh2,ma_plkh3,ma_nhkh,ma_tt,gh_no,ghi_chu,tinh_dt_nb,khoa_no,isKh,isNcc,isNv,username,sd,cdate,cuser,ldate,luser,ma_duong,ma_phuong,ma_quan,ma_tp,so_nha,ten_dd,chuc_vu_dd,cmnd_hc,ngay_cap,noi_cap,muc_han_tt,dtdd")] arkh arkh)
        {
            if (ModelState.IsValid)
            {
                db.arkhs.Add(arkh);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(arkh);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public String CreateAjax([Bind(Include = "ma_cty,ma_kh,loai,ten_kh,ma_so_thue,dia_chi,tel,fax,email,home_page,nguoi_gd,so_tk_nh,ten_nh,tinh_tp_nh,tk,ma_plkh1,ma_plkh2,ma_plkh3,ma_nhkh,ma_tt,gh_no,ghi_chu,tinh_dt_nb,khoa_no,isKh,isNcc,isNv,username,sd,cdate,cuser,ldate,luser,ma_duong,ma_phuong,ma_quan,ma_tp,so_nha,ten_dd,chuc_vu_dd,cmnd_hc,ngay_cap,noi_cap,muc_han_tt,dtdd")] arkh arkh)
        {
            /*var _arkh = new arkh();
            _arkh.ma_kh = arkh.ma_kh;
            _arkh.ten_kh = arkh.ten_kh;
            _arkh.email = arkh.email;
            _arkh.ghi_chu=arkh.*/
            try {
                if (ModelState.IsValid) {
                    db.arkhs.Add(arkh);
                    db.SaveChanges();
                    return new JavaScriptSerializer().Serialize(new { Success = true, message = "Thêm thành công. " });
                }
                else {
                    return new JavaScriptSerializer().Serialize(new { Success = false, message = "Không thể thêm khách hàng "});
                }
            } catch (Exception e) {
                return new JavaScriptSerializer().Serialize(new { Success = false, message = "Không thể thêm khách hàng :"+e.Message });
            }
        }

        public ActionResult CreatePartial() {

            return PartialView("_CreateInOrder");
        }



        // GET: arkhs/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            arkh arkh = db.arkhs.Find(id);
            if (arkh == null)
            {
                return HttpNotFound();
            }
            return View(arkh);
        }

        // POST: arkhs/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ma_cty,ma_kh,loai,ten_kh,ma_so_thue,dia_chi,tel,fax,email,home_page,nguoi_gd,so_tk_nh,ten_nh,tinh_tp_nh,tk,ma_plkh1,ma_plkh2,ma_plkh3,ma_nhkh,ma_tt,gh_no,ghi_chu,tinh_dt_nb,khoa_no,isKh,isNcc,isNv,username,sd,cdate,cuser,ldate,luser,ma_duong,ma_phuong,ma_quan,ma_tp,so_nha,ten_dd,chuc_vu_dd,cmnd_hc,ngay_cap,noi_cap,muc_han_tt,dtdd")] arkh arkh)
        {
            if (ModelState.IsValid)
            {
                db.Entry(arkh).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(arkh);
        }

        // GET: arkhs/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            arkh arkh = db.arkhs.Find(id);
            if (arkh == null)
            {
                return HttpNotFound();
            }
            return View(arkh);
        }

        // POST: arkhs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            arkh arkh = db.arkhs.Find(id);
            db.arkhs.Remove(arkh);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
