using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    public class ExtractController : Controller
    {
        // POST api/values
        [HttpPost("extract")]
        public void Post([FromBody]string value)
        {
        }
    }
}
