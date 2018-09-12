//using BHLVTDAL.DataCF;
using BHLVT.ConfigProgram;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
//using System.IO;

namespace BHLVT.Controllers.CRM.GENERAL
{
    public class TestGController : Controller
    {
        // GET: TestG
        public ActionResult Index()
        {
            try
            {
                /*var connstr = ConfigurationManager.ConnectionStrings[XWebConfig.ConnectStringName].ConnectionString;
                
                SqlConnection sc = new SqlConnection(connstr);
                using (SqlCommand cmd = new SqlCommand("IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = N'soph1') SELECT 1 AS res ELSE SELECT 0 AS res;", sc))
                {
                    sc.Open();
                    var b = cmd.ExecuteScalar();
                    sc.Close();
                }*/

                var connstr = ConfigurationManager.ConnectionStrings[XWebConfig.ConnectStringName].ConnectionString;
                var filePath = Server.MapPath("~/Database/CRM/db.sql");
                SqlConnection sc = new SqlConnection(connstr);
                string script = System.IO.File.ReadAllText(filePath);
                /*var script = " CREATE TABLE [tblanswerlv] ("+
                   "[answerid] tinyint NOT NULL,"+
                   "[title] nvarchar(100) DEFAULT NULL,"+
                   "[content] ntext ,"+
                   "[note] ntext )";*/
                using (SqlCommand cmd = new SqlCommand(script, sc))
                {
                    sc.Open();
                    cmd.ExecuteNonQuery();
                    sc.Close();
                }
            }
            catch (Exception e)
            {

            }
            return View();
        }
    }
}