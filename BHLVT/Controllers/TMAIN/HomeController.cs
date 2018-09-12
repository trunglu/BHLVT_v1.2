//using BHLVT.Attributes;

using BHLVTBLL.Attributes;
using BHLVTBLL.Services.Master;
using BHLVTDAL.Data;
//using LVTUtils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;

namespace BHLVT.Controllers
{
    [VTAuthorize]
    public class HomeController : Controller
    {
        public LVTDBContext db = new LVTDBContext();
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            /*var soph1 = new soph1();
            var soct1 = new soct1();
            /*Type typeOfMyObject = soph1.GetType();
            PropertyInfo[] properties = typeOfMyObject.GetProperties();*/
            // var _text_g_class = UtilsHepler.GetStringGenarateConstructorDBHtml(soct1);
            /*var _text_g_class = "";
            ViewBag.data = _text_g_class;*/

           // MathLVT.Add(1, 2);
           // var c = Database.CountUser();

            ViewBag.CountOrderToday = Dashboard.CountOrderToday();
            ViewBag.CountCustomer = Dashboard.CountCustomer();
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult RenderLeftSide() {

            
            return PartialView("~/Views/Shared/_PartialView/_LeftSide.cshtml");
        }
    }
}