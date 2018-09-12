using BHLVTBLL.Attributes;
using BHLVTDAL.Data;
using CRMLVTBLLmd.Models.ViewModel;
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
    public class EmpsController : Controller
    {
        LVTDBContext db = new LVTDBContext();
        EmployeesController ec = new EmployeesController();

        // GET: CRM/Emps
        public ActionResult Index()
        {
            return (ActionResult)ec.Index(Request)["view"];
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Post(tblemployeeView model) {
            /*  var e = db.tblemployees.FirstOrDefault(x => x.username == model.username);
              e.firstname = "trung abc";
              try {
                  e.lastname = model.lastname;
                  e.firstname = model.firstname;
                  e.department = model.department;
                  e.birthday = model.birthday;
                  e.mission = model.mission;
                  e.mobile = model.mobile;
                  e.sex = model.sex;
                  e.workday = model.workday;
                  db.Entry(e).State = EntityState.Modified;
                  db.SaveChanges();
              } catch (Exception _e) {

              }*/
            
            

            return (ActionResult)ec.Post(Request,model)["view"]; 
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteSeleted() {
            return null;
        }

        public ActionResult MPermission() {
            return (ActionResult)ec.MakeAPerM(Request)["view"];
        }
        public ActionResult Create() {
            return (ActionResult)ec.Create()["view"];
        }
        public ActionResult Update() {
            return (ActionResult)ec.Update(Request)["view"];
        }

        /*[HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(tblemployee model) {

            return RedirectToAction("Index");
        }*/

    }
}