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
        string connection = "Server=Localhost;5432;Username=postgres;password=;Database=taller2";
        NpgsqlConnection conn;

        public NpgsqlConnection Connection()
        {
            conn = new NpgsqlConnection(connection);
            conn.Open();

            return conn;
        }
    }
}
