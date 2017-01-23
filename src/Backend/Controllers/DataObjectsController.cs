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
    public class DataObjectsController : Controller
    {
        private readonly GTiHubContext _dbContext;

        public DataObjectsController(GTiHubContext _dbContext)
        {
            this._dbContext = _dbContext;
        }

        // DELETE api/DataObjects/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var dataObject = this._dbContext.DataObjects.Find(id);
            if (dataObject == null) return this.NotFound();

            this._dbContext.DataObjects.Remove(dataObject);
            this._dbContext.SaveChanges();
            return new NoContentResult();
        }

        // GET: api/DataObjects
        [HttpGet]
        public IEnumerable<DataObject> Get()
        {
            return this._dbContext.DataObjects.ToList();
        }

        // GET api/DataObjects/GetObjectFormats/5
        [HttpGet("GetObjectFormats/{id}")]
        public IEnumerable<ObjectFormat> GetObjectFormats(int id)
        {
            var dataObjectFormats = this._dbContext.DataObjectFormats.Where(x => x.DataObjectId == id);
            var objectFormats = new List<ObjectFormat>();
            foreach(var dataObjectFormat in dataObjectFormats)
            {
                objectFormats.Add(this._dbContext.ObjectFormats.Find(dataObjectFormat.ObjectFormatId));
            }
            return objectFormats;
        }

        // GET api/DataObjects/GetObjectTargets/5
        [HttpGet("GetObjectTargets/{id}")]
        public IEnumerable<ObjectTarget> GetObjectTargets(int id)
        {
            var dataObjectTargets = this._dbContext.DataObjectTargets.Where(x => x.DataObjectId == id);
            var objectTargets = new List<ObjectTarget>();
            foreach (var dataObjectTarget in dataObjectTargets)
            {
                objectTargets.Add(this._dbContext.ObjectTargets.Find(dataObjectTarget.ObjectTargetId));
            }
            return objectTargets;
        }

        // GET api/DataObjects/5
        [HttpGet("{id}", Name = "GetDataObject")]
        public IActionResult Get(int id)
        {
            var dataObject = this._dbContext.DataObjects.Find(id);
            if (dataObject == null) return this.NotFound();

            return new ObjectResult(dataObject);
        }

        // POST api/DataObjects
        [HttpPost]
        public IActionResult Post([FromBody] DataObject dataObject)
        {
            if (dataObject == null) return this.BadRequest();

            this._dbContext.DataObjects.Add(dataObject);
            this._dbContext.SaveChanges();
            return this.CreatedAtRoute("GetDataObject", new { id = dataObject.DataObjectId }, dataObject);
        }

        // PUT api/DataObjects/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] DataObject dataObject)
        {
            if ((dataObject == null) || (dataObject.DataObjectId != id)) return this.BadRequest();

            var updatedDataObject = this._dbContext.DataObjects.Find(id);

            if (updatedDataObject == null) return this.NotFound();

            

            this._dbContext.SaveChanges();

            return new ObjectResult(updatedDataObject);
        }
    }
}
