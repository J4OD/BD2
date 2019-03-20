using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Npgsql;

namespace Taller2_CS
{
    class DBConnection
    {
        string connection = "Server=Localhost;Port=5432;Database=taller2;User Id=postgres;Password=admin";
        NpgsqlConnection conn;

        public NpgsqlConnection Connection()
        {
            conn = new NpgsqlConnection(connection);
            conn.Open();

            return conn;
        }
    }
}
