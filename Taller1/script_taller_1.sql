/* Taller 1 */
/* SCRIPTS */
-- a)
SELECT * FROM department
-- b)
SELECT * FROM course WHERE dept_name = 'Physics'
-- c)
SELECT * FROM student WHERE tot_cred > 50 ORDER BY tot_cred
-- d)
SELECT * FROM course WHERE credits = 3 ORDER BY dept_name, course_id
-- e)
SELECT * FROM department WHERE budget < 350000 ORDER BY dept_name
