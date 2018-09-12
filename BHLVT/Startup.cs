using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BHLVT.Startup))]
namespace BHLVT
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
