-- Es lo mismo
SELECT * FROM student, takes WHERE id = takes.id;
-- Pero este da buenas practicas
SELECT * FROM student INNER JOIN takes ON student.id = takes.id ;

SELECT s.name, c.title,t.year,t.grade 
FROM student as s  
INNER JOIN takes as t ON s.id = t.id 
INNER JOIN course as c ON c.course_id = t.course_id 
ORDER BY s.name;

-- inserciones para mostrar LEFT y RIGHT JOINs
INSERT INTO student values(933,'test','Physics');

SELECT * FROM instructor as i
RIGHT JOIN department as d ON d.dept_name = i.dept_name
WHERE i.id is null;

SELECT *
FROM course WHERE dept_name = 'Math';

SELECT i.id,i.name,i.dept_name,t.id
FROM teaches as t
INNER JOIN instructor as i  ON i.id = t.id 
WHERE course_id IN(SELECT course_id
				  FROM course WHERE dept_name = 'Math');