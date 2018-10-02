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
    public class LstExchangeRateController : ApiController
    {
        APILstExChangeRateController apiLExChangeRate = new APILstExChangeRateController()
        {
            Request = new HttpRequestMessage()
            {
                Properties = {{
                    HttpPropertyKeys.HttpConfigurationKey,
                        new HttpConfiguration() }}
            }
        };
        [HttpPost]
        public async Task<IHttpActionResult> GetExChangeRatePOST(HttpRequestMessage Request)
        {
            return await apiLExChangeRate.GetExchangeRateByMaCtPost(Request);
        }
    }
}
