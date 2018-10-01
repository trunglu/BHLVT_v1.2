using BHLVTBLL.Services.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Hosting;

namespace BHLVT.Controllers.DATABASES.API
{
    public class SysStatusController : ApiController
    {
        private APISysStatusController apiSStatus = new APISysStatusController()
        {
            Request = new HttpRequestMessage()
            { Properties = { { HttpPropertyKeys.HttpConfigurationKey,
                        new HttpConfiguration() } } }
        };

        [HttpPost]
        public async Task<IHttpActionResult> GetAllStatusPOST(HttpRequestMessage Request) {
            return await apiSStatus.GetAllStatusByMaCtPost(Request);
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetAllStatusGET(HttpRequestMessage Request) {
            return await apiSStatus.GetAllStatusByMaCtGet(Request);
        }
    }
}
