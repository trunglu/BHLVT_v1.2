using BHLVTBLL.Attributes;
using BHLVTBLL.ModelsBLL.ViewModel;
using BHLVTDAL.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace BHLVT.Areas.PO.Controllers.Figures
{
    [VTAuthorize]
    public class PhieuNhapController : Controller
    {
        LVTDBContext db = new LVTDBContext();
        // GET: PO/PhieuNhap
        public ActionResult Index() {
            var b = new POViewModel();
            return View(b);
        }
        public ActionResult TestGrid() {
            //var 
            var l_e = db.tblemployees.ToList();
            
            return View(l_e);
        }
        public List<tblemployee> ReadStudentsFromFile()
        {
            var lines = db.tblemployees.ToList();
            List<tblemployee> result = new List<tblemployee>(); //Tạo một list trống

            foreach (var line in lines)
            {
                tblemployee student = line;
                result.Add(student); //Thêm student vào list
            }
            return result; // Trả list ra
        }

        public IEnumerable<tblemployee> YieldReadStudentsFromFile()
        {
            var lines = db.tblemployees.ToList();
            foreach (var line in lines)
            {
                tblemployee em = line;
                yield return em;
            }
        }
        public string GetListEmployees() {
            var a = YieldReadStudentsFromFile();
            return new JavaScriptSerializer().Serialize(a);
        }
    }
    
}