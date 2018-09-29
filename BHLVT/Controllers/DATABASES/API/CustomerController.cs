using BHLVTBLL.Services.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Hosting;

namespace BHLVT.Controllers
{
    public class CustomerController : ApiController
    {
        private APICustomerController api_cus = new APICustomerController()
        { Request = new HttpRequestMessage()
        { Properties = { { HttpPropertyKeys.HttpConfigurationKey, new HttpConfiguration() } } } };

        [HttpGet]
        public async Task<IHttpActionResult> SearchCustomerByName() {
            var a = Request;
            //return Ok(Request.RequestUri.AbsolutePath);
            return await api_cus.SearchCustomerByName(Request);
        }

        [HttpPost]
        public async Task<IHttpActionResult> SearchCustomerByNamePost()
        {
            var a = Request;
            //return Ok(Request.RequestUri.AbsolutePath);
            return await api_cus.SearchCustomerByNamePost(Request);
        }
    }
}
