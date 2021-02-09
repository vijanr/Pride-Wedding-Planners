using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PrideWeddingPlanners.Data;
using PrideWeddingPlanners.Models;

namespace PrideWeddingPlanners.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientRegistrationsController : ControllerBase
    {
        private readonly WeddingDBContext _context;

        public ClientRegistrationsController(WeddingDBContext context)
        {
            _context = context;
        }

        // GET: api/ClientRegistrations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClientRegistration>>> GetClientTable()
        {
            return await _context.ClientTable.ToListAsync();
        }

        // GET: api/ClientRegistrations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClientRegistration>> GetClientRegistration(int id)
        {
            var clientRegistration = await _context.ClientTable.FindAsync(id);

            if (clientRegistration == null)
            {
                return NotFound();
            }

            return clientRegistration;
        }

        // PUT: api/ClientRegistrations/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClientRegistration(int id, ClientRegistration clientRegistration)
        {
            if (id != clientRegistration.ID)
            {
                return BadRequest();
            }

            _context.Entry(clientRegistration).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientRegistrationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ClientRegistrations
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ClientRegistration>> PostClientRegistration(ClientRegistration clientRegistration)
        {
            _context.ClientTable.Add(clientRegistration);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClientRegistration", new { id = clientRegistration.ID }, clientRegistration);
        }

        // DELETE: api/ClientRegistrations/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ClientRegistration>> DeleteClientRegistration(int id)
        {
            var clientRegistration = await _context.ClientTable.FindAsync(id);
            if (clientRegistration == null)
            {
                return NotFound();
            }

            _context.ClientTable.Remove(clientRegistration);
            await _context.SaveChangesAsync();

            return clientRegistration;
        }

        private bool ClientRegistrationExists(int id)
        {
            return _context.ClientTable.Any(e => e.ID == id);
        }
    }
}
