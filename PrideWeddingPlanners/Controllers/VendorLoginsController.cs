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
    public class VendorLoginsController : ControllerBase
    {
        private readonly WeddingDBContext _context;

        public VendorLoginsController(WeddingDBContext context)
        {
            _context = context;
        }

        // GET: api/VendorLogins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VendorLogin>>> GetVendorLogin()
        {
            return await _context.VendorLogin.ToListAsync();
        }

        // GET: api/VendorLogins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VendorLogin>> GetVendorLogin(int id)
        {
            var vendorLogin = await _context.VendorLogin.FindAsync(id);

            if (vendorLogin == null)
            {
                return NotFound();
            }

            return vendorLogin;
        }

        // PUT: api/VendorLogins/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVendorLogin(int id, VendorLogin vendorLogin)
        {
            if (id != vendorLogin.ID)
            {
                return BadRequest();
            }

            _context.Entry(vendorLogin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VendorLoginExists(id))
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

        // POST: api/VendorLogins
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<VendorLogin>> PostVendorLogin(VendorLogin vendorLogin)
        {
            _context.VendorLogin.Add(vendorLogin);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVendorLogin", new { id = vendorLogin.ID }, vendorLogin);
        }

        // DELETE: api/VendorLogins/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<VendorLogin>> DeleteVendorLogin(int id)
        {
            var vendorLogin = await _context.VendorLogin.FindAsync(id);
            if (vendorLogin == null)
            {
                return NotFound();
            }

            _context.VendorLogin.Remove(vendorLogin);
            await _context.SaveChangesAsync();

            return vendorLogin;
        }

        private bool VendorLoginExists(int id)
        {
            return _context.VendorLogin.Any(e => e.ID == id);
        }
    }
}
