using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Npgsql;

namespace Taller2_CS
{
    class Instructor
    {
        DBConnection conn = new DBConnection();
        NpgsqlCommand cmd;

        //INICIAR CRUD

        //READ

        public NpgsqlDataReader GetInstructor()
        {
            string sql = "SELECT id,name as nombre,dept_name as NombreDepartamento, salary as Salario FROM instructor ORDER BY name";
            cmd = new NpgsqlCommand(sql, conn.Connection());
            NpgsqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                return reader;
            }
            return null;
        }
        public NpgsqlDataReader GetInstructorByID(string id)
        {
            string sql = String.Format("SELECT id,name as nombre,dept_name as NombreDepartamento, salary as Salario FROM instructor WHERE id ={0};", id);
            cmd = new NpgsqlCommand(sql, conn.Connection());
            NpgsqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                return reader;
            }
            return null;
        }
        public NpgsqlDataReader GetInstructorByName(string name)
        {
            string sql = String.Format("SELECT id,name as nombre,dept_name as NombreDepartamento, salary as Salario FROM instructor WHERE name ={0};", name);
            cmd = new NpgsqlCommand(sql, conn.Connection());
            NpgsqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                return reader;
            }
            return null;
        }
        public NpgsqlDataReader GetInstructorByDeptName(string deptName)
        {
            string sql = String.Format("SELECT id,name as nombre,dept_name as NombreDepartamento, salary as Salario FROM instructor WHERE dept_name ={0};", deptName);
            cmd = new NpgsqlCommand(sql, conn.Connection());
            NpgsqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                return reader;
            }
            return null;
        }
        public NpgsqlDataReader GetInstructorBySalary(double salary)
        {
            string sql = String.Format("SELECT id,name as nombre,dept_name as NombreDepartamento, salary as Salario FROM instructor WHERE salary ={0};", salary);
            cmd = new NpgsqlCommand(sql, conn.Connection());
            NpgsqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                return reader;
            }
            return null;
        }
        
        //CREATE

        public void InsertInstructor(string id, string name, string deptName, double salary)
        {
            cmd.Connection = conn.Connection();
            cmd.CommandText = "Insert INTO instructor VALUES(@id,@name,@deptName,@salary)";
            cmd.Parameters.AddWithValue("id", id);
            cmd.Parameters.AddWithValue("name", name);
            cmd.Parameters.AddWithValue("deptName", deptName);
            cmd.Parameters.AddWithValue("salary", salary);
            cmd.ExecuteNonQuery();
        }

        //UPDATE
        public void UpdateInstructorNameByID(string id, string name)
        {
            cmd.Connection = conn.Connection();
            cmd.CommandText = "UPDATE instructor SET name=@name WHERE id=@id)";
            cmd.Parameters.AddWithValue("id", id);
            cmd.Parameters.AddWithValue("name", name);
            cmd.ExecuteNonQuery();
        }
        public void UpdateInstructorDeptNameByID(string id, string deptName)
        {
            cmd.Connection = conn.Connection();
            cmd.CommandText = "UPDATE instructor SET dept_name=@deptName WHERE id=@id)";
            cmd.Parameters.AddWithValue("id", id);
            cmd.Parameters.AddWithValue("deptName", deptName);
            cmd.ExecuteNonQuery();
        }
        public void UpdateInstructorSalaryByID(string id, double salary)
        {
            cmd.Connection = conn.Connection();
            cmd.CommandText = "UPDATE instructor SET salary=@sal WHERE id=@id)";
            cmd.Parameters.AddWithValue("id", id);
            cmd.Parameters.AddWithValue("sal", salary);
            cmd.ExecuteNonQuery();
        }

    }
}
