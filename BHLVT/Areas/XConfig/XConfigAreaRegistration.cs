using System.Web.Mvc;

namespace BHLVT.Areas.XConfig
{
    public class XConfigAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "XConfig";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "XConfig_default",
                "XConfig/{controller}/{action}/{id}",
                new { action = "Index",controller="Home", id = UrlParameter.Optional }
            );
        }
    }
}