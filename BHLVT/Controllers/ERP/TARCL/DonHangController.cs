using BHLVT.Const;
using BHLVT.Models;
using BHLVTBLL.Attributes;
using BHLVTBLL.ModelsBLL.ViewModel;
using BHLVTBLL.Services.ARCL;
using BHLVTBLL.Services.Utils;
using BHLVTBLL.UtilModel;
using BHLVTDAL.Data;
using PagedList;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Validation;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace BHLVT.Controllers
{
   
    [VTAuthorize]
    public class DonHangController : CommonController {

        private OrderController oc = new OrderController();
        //
        // GET: /DonHang/
        //[VTAuthorize]
        public ActionResult Index()
        {
            try {
                var rs_index = oc.Index(Request);
                if ((bool)rs_index["success"]) {
                    return (ActionResult)rs_index["view"];
                }
                else  {
                    return RedirectToAction("ServerError", "Exception", new { error = (string)rs_index["message"] });
                }
            } catch (Exception e) {
                return RedirectToAction("ServerError", "Exception", new { error = e.Message });
            }
           
           
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(FormCollection _form) {
            try {
                
                var rs_indexp = oc.IndexPost(_form);
                return (ActionResult)rs_indexp["view"];
            }
            catch (Exception e) {
                return RedirectToAction("ServerError", "Exception", new { error = e.Message });
            }
            
        }
        
        public String CreateCus(FormCollection _form) {
            if (_form["insertcus"] != null) {

            }
            return "";
        }

        public ActionResult SearchSoph1(StatisticViewModel statistic)
        {
            PartialViewResult view = new PartialViewResult();
            try {
                var rs_search = oc.SearchSoph1(Request, statistic);
                if ((bool)rs_search["success"]) {
                    return (PartialViewResult)oc.SearchSoph1(Request, statistic)["view"];
                }
                else {
                    return RedirectToAction("ServerError", "Exception", new { error = (string)rs_search["message"] });
                }
                
            } catch (Exception e) {
                return RedirectToAction("ServerError", "Exception", new { error = e.Message });
            }
            
        }

      

        [HttpPost]
        public ActionResult UpdateSoPhAjax() {
            /*var bill = new BillViewModel();
            if (Request["stt_rec"]!=null) {
                var _soph1 = db.soph1.ToList().Where(x => x.stt_rec == Request["stt_rec"].ToString()).FirstOrDefault();
                var _lsoct1 = db.soct1.ToList().Where(x => x.stt_rec == Request["stt_rec"]).OrderBy(x=>x.stt_rec0).ToList();
                bill.soph1 = _soph1;
                bill.lsoct1 = _lsoct1;
            }*/
            // return PartialView("~/Views/Shared/_PartialView/_UpdateSoPhAjax.cshtml",bill);
            return null;
        }


        public ActionResult ListDH(StatisticViewModel _statistic) {
            return oc.ListDH(_statistic);
        }


        public ActionResult Receipt() {
            return (ViewResult)oc.Receipt(Request)["view"];
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public String DeleteAll() {
            return oc.DeleteAll(Request);
        }
        public String TestProcedure() {

            var a = db.Database.ExecuteSqlCommand("EXEC [dbo].[spSoPh1Get] @pMa_cty, @pMa_ct, @pUsername, @pUser_filter, @pStt_rec",
                new SqlParameter("@pMa_cty", "DHS"), new SqlParameter("@pMa_ct", "SO1"), new SqlParameter("@pUsername", "ADMIN"),
                new SqlParameter("@pUser_filter", "1"), new SqlParameter("@pStt_rec", "DHSxSO1000000002519"));
            var b = db.Database.SqlQuery<spSoPh1Get_Result>("exec spSoPh1Get @pMa_cty, @pMa_ct, @pUsername, @pUser_filter, @pStt_rec",
                new SqlParameter("@pMa_cty", "DHS"), new SqlParameter("@pMa_ct", "SO1"), new SqlParameter("@pUsername", "ADMIN"),
                new SqlParameter("@pUser_filter", "1"), new SqlParameter("@pStt_rec", "DHSxSO10000000025195")).ToList<spSoPh1Get_Result>();

            return "";
        }

        [HttpPost]
        public String PostData(FormCollection _form, InputData[] _input) {
            var a = _form["input[]"];
            return "";
        }

        public ActionResult InputData()
        {
            return View();
        }
    }
}