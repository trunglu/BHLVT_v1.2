using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BHLVTBLL.Attributes;
using BHLVT.Models;
using BHLVTDAL.Data;
using System.Data.SqlClient;
using System.Web.Script.Serialization;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Core.Objects;
using System.Data;
using System.Configuration;
using BHLVT.ConfigProgram;
using BHLVTBLL.Services.Report;
using BHLVTBLL.ModelsBLL.ViewModel;

namespace BHLVT.Controllers
{
    [VTAuthorize]
    public class BCDPSReportController : Controller
    {
        BCCDPSController bc = new BCCDPSController();
        // GET: BCDPS
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Search() {
            BCDPSSEARCHModel _model = new BCDPSSEARCHModel();
            return View(_model);
        }

        [HttpPost]
        public ActionResult Search(BCDPSSEARCHModel _model)
        {
            var connstr = ConfigurationManager.ConnectionStrings[XWebConfig.ConnectStringName].ConnectionString;

            return (PartialViewResult)bc.SearchPost(_model, connstr)["view"];
            
        }

        [HttpPost]
        public ActionResult PreviewReport(BCDPSSEARCHModel _model) {
            var connstr = ConfigurationManager.ConnectionStrings[XWebConfig.ConnectStringName].ConnectionString;

            return (PartialViewResult)bc.Preview(_model, connstr)["view"];
        }
    }
}