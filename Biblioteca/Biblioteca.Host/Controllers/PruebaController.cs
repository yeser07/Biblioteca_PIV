﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Biblioteca.Host.Controllers
{
    public class PruebaController : ApiController
    {
        [Route("api/prueba/Buscar/{nombre}")]
       [HttpGet]
       //[HttpPost]
        public IEnumerable<string> BuscarPorNombre(string nombre)
        {
            return new string[] { "nombre1", "nombre2",nombre };
        }


        // GET: api/Prueba
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Prueba/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Prueba
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Prueba/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Prueba/5
        public string Delete(int id)
        {
            return "eliminado";
        }
    }
}
