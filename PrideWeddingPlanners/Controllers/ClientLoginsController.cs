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
    public class ClientLoginsController : ControllerBase
    {
        private readonly WeddingDBContext _context;

        public ClientLoginsController(WeddingDBContext context)
        {
            _context = context;
        }

        // GET: api/ClientLogins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClientLogin>>> GetClientLogin()
        {
            return await _context.ClientLogin.ToListAsync();
        }

        // GET: api/ClientLogins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClientLogin>> GetClientLogin(int id)
        {
            var clientLogin = await _context.ClientLogin.FindAsync(id);

            if (clientLogin == null)
            {
                return NotFound();
            }

            return clientLogin;
        }

        // PUT: api/ClientLogins/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClientLogin(int id, ClientLogin clientLogin)
        {
            if (id != clientLogin.ID)
            {
                return BadRequest();
            }

            _context.Entry(clientLogin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientLoginExists(id))
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

        // POST: api/ClientLogins
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ClientLogin>> PostClientLogin(ClientLogin clientLogin)
        {
            _context.ClientLogin.Add(clientLogin);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClientLogin", new { id = clientLogin.ID }, clientLogin);
        }

        // DELETE: api/ClientLogins/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ClientLogin>> DeleteClientLogin(int id)
        {
            var clientLogin = await _context.ClientLogin.FindAsync(id);
            if (clientLogin == null)
            {
                return NotFound();
            }

            _context.ClientLogin.Remove(clientLogin);
            await _context.SaveChangesAsync();

            return clientLogin;
        }

        private bool ClientLoginExists(int id)
        {
            return _context.ClientLogin.Any(e => e.ID == id);
        }
    }
}
