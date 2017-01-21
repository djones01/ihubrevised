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
    public class FieldsController : Controller
    {
        private readonly GTiHubContext _dbContext;

        public FieldsController(GTiHubContext _dbContext)
        {
            this._dbContext = _dbContext;
        }

        // DELETE api/Fields/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var field = this._dbContext.Fields.Find(id);
            if (field == null) return this.NotFound();

            this._dbContext.Fields.Remove(field);
            this._dbContext.SaveChanges();
            return new NoContentResult();
        }

        // GET: api/Fields
        [HttpGet]
        public IEnumerable<Field> Get()
        {
            return this._dbContext.Fields.ToList();
        }

        // GET api/Fields/5
        [HttpGet("{id}", Name = "GetField")]
        public IActionResult Get(int id)
        {
            var field = this._dbContext.Fields.Find(id);
            if (field == null) return this.NotFound();

            return new ObjectResult(field);
        }

        // POST api/Fields
        [HttpPost]
        public IActionResult Post([FromBody] Field field)
        {
            if (field == null) return this.BadRequest();

            this._dbContext.Fields.Add(field);
            this._dbContext.SaveChanges();
            return this.CreatedAtRoute("GetField", new { id = field.FieldId }, field);
        }

        // PUT api/Fields/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Field field)
        {
            if ((field == null) || (field.FieldId != id)) return this.BadRequest();

            var updatedField = this._dbContext.Fields.Find(id);

            if (updatedField == null) return this.NotFound();



            this._dbContext.SaveChanges();

            return new ObjectResult(updatedField);
        }
    }
}
