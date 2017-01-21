using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Backend.Models.EntityModels;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    public class ObjectFormatsController : Controller
    {
        private readonly GTiHubContext _dbContext;

        public ObjectFormatsController(GTiHubContext _dbContext)
        {
            this._dbContext = _dbContext;
        }

        // DELETE api/ObjectFormats/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var objectFormat = this._dbContext.ObjectFormats.Find(id);
            if (objectFormat == null) return this.NotFound();

            this._dbContext.ObjectFormats.Remove(objectFormat);
            this._dbContext.SaveChanges();
            return new NoContentResult();
        }

        // GET: api/ObjectFormats
        [HttpGet]
        public IEnumerable<ObjectFormat> Get()
        {
            return this._dbContext.ObjectFormats.ToList();
        }

        // GET api/ObjectFormats/5
        [HttpGet("{id}", Name = "GetObjectFormat")]
        public IActionResult Get(int id)
        {
            var objectFormat = this._dbContext.ObjectFormats.Find(id);
            if (objectFormat == null) return this.NotFound();

            return new ObjectResult(objectFormat);
        }

        // POST api/ObjectFormats
        [HttpPost]
        public IActionResult Post([FromBody] ObjectFormat objectFormat)
        {
            if (objectFormat == null) return this.BadRequest();

            this._dbContext.ObjectFormats.Add(objectFormat);
            this._dbContext.SaveChanges();
            return this.CreatedAtRoute("GetObjectFormat", new { id = objectFormat.ObjectFormatId }, objectFormat);
        }

        // PUT api/ObjectFormats/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] ObjectFormat objectFormat)
        {
            if ((objectFormat == null) || (objectFormat.ObjectFormatId != id)) return this.BadRequest();

            var updatedObjectFormat = this._dbContext.ObjectFormats.Find(id);

            if (updatedObjectFormat == null) return this.NotFound();



            this._dbContext.SaveChanges();

            return new ObjectResult(updatedObjectFormat);
        }
    }
}
