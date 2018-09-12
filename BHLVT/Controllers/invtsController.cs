using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
//using BHLVT.Data;
using BHLVTDAL.Data;

namespace BHLVT.Controllers
{
    public class invtsController : Controller
    {
        private LVTDBContext db = new LVTDBContext();

        // GET: invts
        public ActionResult Index()
        {
            return View(db.invts.ToList());
        }

        // GET: invts/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            invt invt = db.invts.Find(id);
            if (invt == null)
            {
                return HttpNotFound();
            }
            return View(invt);
        }

        // GET: invts/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: invts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ma_cty,ma_vt,ten_vt,part_no,dvt,dvt_ban,hs_dvtban,dvt_mua,hs_dvtmua,ton_kho,gia_ton,ma_vt_vo,tk_vt,tk_dt,tk_dtnb,tk_gv,tk_tl,tk_ck,tk_dt_vo,tk_coc_vo,tinh_gt,ma_nhvt,nhom_vat,sl_min,sl_max,thue_nk,thue_gtgt,thue_xk,thue_ttdb,ma_kho,ma_vitri,barcode_fifo,ghi_chu,han_bh_ncc,han_bh,ma_nt,gia_mua,gia_ban,sd,cUser,cDate,lUser,lDate,Loai,Anh,tao_sku,trong_luong,postvo,dvt_ban2,hs_dvtban2,ma_kh,file_pdf,xuat_xu,quy_cach")] invt invt)
        {
            if (ModelState.IsValid)
            {
                db.invts.Add(invt);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(invt);
        }

        // GET: invts/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            invt invt = db.invts.Find(id);
            if (invt == null)
            {
                return HttpNotFound();
            }
            return View(invt);
        }

        // POST: invts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ma_cty,ma_vt,ten_vt,part_no,dvt,dvt_ban,hs_dvtban,dvt_mua,hs_dvtmua,ton_kho,gia_ton,ma_vt_vo,tk_vt,tk_dt,tk_dtnb,tk_gv,tk_tl,tk_ck,tk_dt_vo,tk_coc_vo,tinh_gt,ma_nhvt,nhom_vat,sl_min,sl_max,thue_nk,thue_gtgt,thue_xk,thue_ttdb,ma_kho,ma_vitri,barcode_fifo,ghi_chu,han_bh_ncc,han_bh,ma_nt,gia_mua,gia_ban,sd,cUser,cDate,lUser,lDate,Loai,Anh,tao_sku,trong_luong,postvo,dvt_ban2,hs_dvtban2,ma_kh,file_pdf,xuat_xu,quy_cach")] invt invt)
        {
            if (ModelState.IsValid)
            {
                db.Entry(invt).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(invt);
        }

        // GET: invts/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            invt invt = db.invts.Find(id);
            if (invt == null)
            {
                return HttpNotFound();
            }
            return View(invt);
        }

        // POST: invts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            invt invt = db.invts.Find(id);
            db.invts.Remove(invt);
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
