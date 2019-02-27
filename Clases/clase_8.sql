SELECT COUNT(*) FROM instructor WHERE salary > 55000 AND salary<65000;
SELECT COUNT(*) FROM instructor WHERE salary BETWEEN 55000 AND 65000;
SELECT COUNT(*) FROM student WHERE tot_cred > 80;   

SELECT course_id,semester,year,sec_id,avg(tot_cred)
FROM takes NATURAL JOIN student
WHERE year = 2009
GROUP BY course_id,semester,year,sec_id
HAVING COUNT(ID) >=300; 

SELECT DISTINCT course_id
FROM section
WHERE semester = 'Fall' AND year = 2005 AND course_id IN (
    SELECT course_id 
    FROM section
    WHERE semester = 'Fall' AND year = 2007
);

SELECT COUNT(id)
FROM takes
WHERE course_id IN (
    SELECT course_id
    FROM teaches
    WHERE id = (
        SELECT id
        FROM instructor
        WHERE name = 'lembr'
    )
);

    SELECT name 
    FROM instructor
    WHERE salary > SOME(
    SELECT salary
    FROM instructor
    WHERE dept_name = 'Physics'
    );