/* Taller 1 */
/* SCRIPTS */
-- a)
SELECT * FROM department;
-- b)
SELECT * FROM course WHERE dept_name = 'Physics';
SELECT id FROM takes WHERE course_id IN (SELECT course_id FROM course WHERE dept_name = 'Physics');
-- c)
SELECT * FROM student WHERE tot_cred > 50 ORDER BY tot_cred;
-- d)
SELECT * FROM course WHERE credits = 3 ORDER BY dept_name, course_id;
-- e)
SELECT * FROM department WHERE budget < 350000 ORDER BY dept_name;
/* Estos fueron vistos en clase */
-- todos los nombres de departament que tienen en alguna posición la letra i
SELECT dept_name FROM departament WHERE dept_name LIKE '%i%';
-- todos los nombres de los estudiantes que inician con a o terminan con a
SELECT DISTINCT name FROM student WHERE name LIKE 'a%' OR  name LIKE '%a' OR name LIKE '%A' OR name LIKE 'A%' ORDER BY name
-- Todos los docentes que su salario este entre 80000 y 101000
SELECT name FROM instructor WHERE salary BETWEEN 80000 AND 101000