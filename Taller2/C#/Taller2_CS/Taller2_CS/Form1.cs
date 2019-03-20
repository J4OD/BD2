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
    }
}
