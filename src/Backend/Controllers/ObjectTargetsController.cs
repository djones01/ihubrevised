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
    public class ObjectTargetsController : Controller
    {
        private readonly GTiHubContext _dbContext;

        public ObjectTargetsController(GTiHubContext _dbContext)
        {
            this._dbContext = _dbContext;
        }

        // DELETE api/ObjectTargets/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var objectTarget = this._dbContext.ObjectTargets.Find(id);
            if (objectTarget == null) return this.NotFound();

            this._dbContext.ObjectTargets.Remove(objectTarget);
            this._dbContext.SaveChanges();
            return new NoContentResult();
        }

        // GET: api/ObjectTargets
        [HttpGet]
        public IEnumerable<ObjectTarget> Get()
        {
            return this._dbContext.ObjectTargets.ToList();
        }

        // GET api/ObjectTargets/5
        [HttpGet("{id}", Name = "GetObjectTarget")]
        public IActionResult Get(int id)
        {
            var objectTarget = this._dbContext.ObjectTargets.Find(id);
            if (objectTarget == null) return this.NotFound();

            return new ObjectResult(objectTarget);
        }

        // POST api/ObjectTargets
        [HttpPost]
        public IActionResult Post([FromBody] ObjectTarget objectTarget)
        {
            if (objectTarget == null) return this.BadRequest();

            this._dbContext.ObjectTargets.Add(objectTarget);
            this._dbContext.SaveChanges();
            return this.CreatedAtRoute("GetObjectTarget", new { id = objectTarget.ObjectTargetId }, objectTarget);
        }

        // PUT api/ObjectTargets/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] ObjectTarget objectTarget)
        {
            if ((objectTarget == null) || (objectTarget.ObjectTargetId != id)) return this.BadRequest();

            var updatedObjectTarget = this._dbContext.ObjectTargets.Find(id);

            if (updatedObjectTarget == null) return this.NotFound();



            this._dbContext.SaveChanges();

            return new ObjectResult(updatedObjectTarget);
        }
    }
}
