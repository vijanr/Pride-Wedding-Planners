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
    public class VendorRegistrationsController : ControllerBase
    {
        private readonly WeddingDBContext _context;

        public VendorRegistrationsController(WeddingDBContext context)
        {
            _context = context;
        }

        // GET: api/VendorRegistrations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VendorRegistration>>> GetVendorTable()
        {
            return await _context.VendorTable.ToListAsync();
        }

        // GET: api/VendorRegistrations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VendorRegistration>> GetVendorRegistration(int id)
        {
            var vendorRegistration = await _context.VendorTable.FindAsync(id);

            if (vendorRegistration == null)
            {
                return NotFound();
            }

            return vendorRegistration;
        }

        // PUT: api/VendorRegistrations/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVendorRegistration(int id, VendorRegistration vendorRegistration)
        {
            if (id != vendorRegistration.ID)
            {
                return BadRequest();
            }

            _context.Entry(vendorRegistration).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VendorRegistrationExists(id))
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

        // POST: api/VendorRegistrations
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<VendorRegistration>> PostVendorRegistration(VendorRegistration vendorRegistration)
        {
            _context.VendorTable.Add(vendorRegistration);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVendorRegistration", new { id = vendorRegistration.ID }, vendorRegistration);
        }

        // DELETE: api/VendorRegistrations/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<VendorRegistration>> DeleteVendorRegistration(int id)
        {
            var vendorRegistration = await _context.VendorTable.FindAsync(id);
            if (vendorRegistration == null)
            {
                return NotFound();
            }

            _context.VendorTable.Remove(vendorRegistration);
            await _context.SaveChangesAsync();

            return vendorRegistration;
        }

        private bool VendorRegistrationExists(int id)
        {
            return _context.VendorTable.Any(e => e.ID == id);
        }
    }
}
