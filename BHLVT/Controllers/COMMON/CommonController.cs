//using BHLVT.Data;
using BHLVT.Models.UtilEntities;
using BHLVTBLL.IdentityModel;
using BHLVTDAL.Data;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BHLVT.Controllers
{
    
    public class CommonController : Controller
    {
        public LVTDBContext db;
        //private static LVTDBContext _db;
       
        public CommonController() {
            db = new LVTDBContext();
            //_db = new LVTDBContext();
            
        }
        public void InitialSession() {
            System.Web.HttpContext.Current.Session["user"] = UserManager.Identity.username as String;
        }

        public void Success(string message, bool dismissable = false)
        {
            AddAlert(AlertStyles.Success, message, dismissable);
        }

        public void Information(string message, bool dismissable = false)
        {
            AddAlert(AlertStyles.Information, message, dismissable);
        }

        public void Warning(string message, bool dismissable = false)
        {
            AddAlert(AlertStyles.Warning, message, dismissable);
        }

        public void Danger(string message, bool dismissable = false)
        {
            AddAlert(AlertStyles.Danger, message, dismissable);
        }

        private void AddAlert(string alertStyle, string message, bool dismissable)
        {
            var alerts =  TempData.ContainsKey(Alert.TempDataKey)
                ? (List<Alert>)TempData[Alert.TempDataKey]
                : new List<Alert>();

            alerts.Add(new Alert
            {
                AlertStyle = alertStyle,
                Message = message,
                Dismissable = dismissable
            });

            TempData[Alert.TempDataKey] = alerts;
        }
       /* public ActionResult CommonRedirectToAction(String controller,String action) {
            return RedirectToAction(controller, action);
        }*/




    }
}