using BHLVTBLL.Attributes;
using BHLVTDAL.Data;
using CRMLVTBLLmd.Models.ViewModel;
using CRMLVTBLLmd.Services.Customer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BHLVT.Areas.CRM.Controllers
{
    [VTAuthorize]
    public class CusController : Controller
    {
        CustomerController cc = new CustomerController();
        // GET: CRM/Customer
        public ActionResult Index(tblcustomerSearchView modelSearch)
        {
            //var db = new LVTDBContext();
            //var a = db.tblcustomers.ToList();

            return (ActionResult)cc.Index(modelSearch, Request)["view"];
        }

        public ActionResult Create() {
            return (ActionResult)cc.Create()["view"];
        }

        public ActionResult Update() {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Post(tblcustomerView model) {

            return (ActionResult)cc.Post(Request,model)["view"];
        }

        public ActionResult Infor() {

            return (ActionResult)cc.Infor(Request)["view"];
        }
        public ActionResult Pps() {

            return (ActionResult)cc.PpsIndex(Request)["view"];
        }
        /*public ActionResult Conts()
        {

            return (ActionResult)cc.ContsIndex(Request)["view"];
        }*/
        public ActionResult Prcs()
        {

            return View();
        }
        public ActionResult Cons1()
        {

            return View();
        }
        public ActionResult Mis1()
        {

            return View();
        }
        public ActionResult Cas1()
        {

            return View();
        }
        public ActionResult Schs()
        {

            return View();
        }
        public ActionResult Funs()
        {

            return View();
        }
        public ActionResult Reqs()
        {

            return View();
        }
        public ActionResult Mbar(string t,string _id) {
            

            return (ActionResult)cc.Mbar(t,_id)["view"];
        }


    }
}