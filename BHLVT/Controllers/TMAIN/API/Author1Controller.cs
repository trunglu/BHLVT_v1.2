using BHLVTBLL.Services.TAuthorlization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Hosting;

namespace BHLVT.Controllers.TMAIN.API
{
    public class Author1Controller : ApiController
    {
        TAuthorlizationController tAuthor = new TAuthorlizationController() {
            Request = new HttpRequestMessage()
            {
                Properties = {{
                    HttpPropertyKeys.HttpConfigurationKey,
                        new HttpConfiguration() }}
            }
        };
        public IHttpActionResult GetMaCt(HttpRequestMessage Request) {
            return tAuthor.GetMaCt(Request);
        }
    }
}
