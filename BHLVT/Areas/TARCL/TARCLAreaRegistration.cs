using System.Web.Mvc;

namespace BHLVT.Areas.TARCL
{
    public class TARCLAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "TARCL";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "TARCL_default",
                "TARCL/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }, 
                new[] { "BHLVT.Areas.TARCL.Controllers" }
            );
        }
    }
}