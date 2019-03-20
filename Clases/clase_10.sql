-- Vistas como copia virtual de tabla o consulta
CREATE VIEW estudiante as 
SELECT id,name,dept_name,tot_cred,edad FROM student;

SELECT * FROM estudiante

CREATE VIEW department_total_salary(dept_name,total_salary) as
SELECT dept_name,sum(salary) FROM instructor GROUP BY dept_name;