using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Npgsql;

namespace Taller2_CS
{
    public partial class Form1 : Form
    {
        private DataSet ds = new DataSet();
        private DataTable dt = new DataTable();
        private Instructor instructor = new Instructor();
        public Form1()
        {
            InitializeComponent();
        }

        private void obtenerInstructoresToolStripMenuItem_Click(object sender, EventArgs e)
        {
            try
            {
                NpgsqlDataReader dr = instructor.GetInstructor();
                ds.Reset();
                dt.Clear();
                dt.Load(dr);
                dataGridView1.DataSource = dt;
            }
            catch (Exception err)
            {
                MessageBox.Show(err.ToString());
            }
        }

        private void ObtenerDato(string id)
        {
            try
            {
                NpgsqlDataReader dr = instructor.GetInstructorByID(id);
                dt.Clear();
                ds.Reset();
                dt.Load(dr);
                dataGridView1.DataSource = dt;
            }catch(Exception err)
            {
                MessageBox.Show(err.ToString());
            }
        }

        private void crearInstrutorToolStripMenuItem_Click(object sender, EventArgs e)
        {
            btnCreate.Enabled = true;
        }

        private void actualizarInstructorToolStripMenuItem_Click(object sender, EventArgs e)
        {
            btnUpdate.Enabled = true;
        }

        private void btnUpdate_Click(object sender, EventArgs e)
        {
            btnUpdate.Enabled = false;
            try
            {
                string id = txtId.Text.ToString();
                if (txtName.Text != null) {
                    string name = txtName.Text.ToString();
                    instructor.UpdateInstructorNameByID(id, name);
                }
                if (txtDeptName.Text != null)
                {
                    string deptName = txtDeptName.Text.ToString();
                    instructor.UpdateInstructorDeptNameByID(id, deptName);
                }
                if(txtSalary.Text != null)
                {
                    double salary = Convert.ToDouble(txtSalary.Text);
                    instructor.UpdateInstructorSalaryByID(id, salary);
                }
                ObtenerDato(id);
            }catch(Exception err)
            {
                MessageBox.Show(err.ToString());
            }
        }

        private bool Validar()
        {
            if(txtId.Text == null || txtId.Text == "")
            {
                errorProvider1.SetError(txtId, "El Id debe ser diferente de vacio");
                return false;
            }
            if(txtName.Text ==null || txtName.Text == "")
            {
                errorProvider2.SetError(txtName, "El nombre debe ser diferente de vacio");
                return false;
            }
            if(txtDeptName.Text == null|| txtDeptName.Text == "")
            {
                errorProvider3.SetError(txtDeptName, "El nombre del departamente debe ser diferente de vacio");
                return false;
            }
            return (true);
        }

        private void btnCreate_Click(object sender, EventArgs e)
        {
            btnCreate.Enabled=false;
            if (Validar())
            {
                try
                {
                    string id = txtId.Text.ToString();
                    string name = txtName.Text.ToString();
                    string deptName = txtName.Text.ToString();
                    double salary = Convert.ToDouble(txtSalary.Text);
                    instructor.InsertInstructor(id, name, deptName, salary);
                    ObtenerDato(id);
                }catch(Exception err)
                {
                    MessageBox.Show(err.ToString());
                }
            }
        }
    }
}
