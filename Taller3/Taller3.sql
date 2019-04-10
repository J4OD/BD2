/* Taller No.3 
Crear funciones para:
1.  Informar el Prom de edades de los estudiantes.
2.  Menor salario de los instructores.
3.  Mayor salario de los instructores.
4.  Total de estudiantes con notas B.
5.  Presupuesto total de los departamentos cuyo nombre incluya una i
 */

/* 1. */
CREATE OR REPLACE function prom_est_edad()
    RETURNS INTEGER AS $$
    DECLARE
    prom_est INTEGER;
    BEGIN
        SELECT ROUND(AVG(edad),2) INTO prom_est
        FROM student;
        RETURN prom_est;
    END
    $$ LANGUAGE plpgsql;

/* 2 */
CREATE OR REPLACE function min_salary_instructor()
    RETURNS INTEGER AS $$
    DECLARE
    min_salary INTEGER;
    BEGIN
        SELECT MIN(salary) INTO min_salary
        FROM instructor;
        RETURN min_salary;
    END
    $$ LANGUAGE plpgsql;

SELECT min_salary_instructor();

/* 3 */
CREATE OR REPLACE function max_salary_instructor()
    RETURNS INTEGER AS $$
    DECLARE
    max_salary INTEGER;
    BEGIN
        SELECT max(salary) INTO max_salary
        FROM instructor;
        RETURN max_salary;
    END
    $$ LANGUAGE plpgsql;

SELECT max_salary_instructor();

/* 4 */
/* Opción1 */
CREATE OR REPLACE function tot_est_grade()
    RETURNS SETOF record AS $BODY$
    DECLARE
    tabla record;
    BEGIN
        FOR tabla IN
            SELECT *
            FROM student AS s
            INNER JOIN takes AS t ON s.id = t.id
            WHERE t.grade = 'B '
            ORDER BY s.name
        LOOP 
            RETURN next tabla;
        END LOOP;
    END
    $BODY$
    LANGUAGE plpgsql;  
/* Opcion 2 */
CREATE OR REPLACE function tot_est_notas()
    RETURNS INTEGER AS $$
    DECLARE
    tot_est_grade INTEGER;
    BEGIN 
        SELECT COUNT(t.grade) INTO tot_est_grade
        FROM student as s 
        INNER JOIN takes as t ON t.id=s.id
        WHERE t.grade='B ';
        RETURN tot_est_grade;
    END
    $$ LANGUAGE plpgsql;
SELECT tot_est_notas();

/* 5 */
CREATE OR REPLACE function tot_est_notas(aux_grade VARCHAR(2))
    RETURNS INTEGER AS $$
    DECLARE
    tot_est_grade INTEGER;
    BEGIN 
        SELECT COUNT(t.grade) INTO tot_est_grade
        FROM student as s 
        INNER JOIN takes as t ON t.id=s.id
        WHERE t.grade=aux_grade;
        RETURN tot_est_grade;
    END
    $$ LANGUAGE plpgsql;

SELECT tot_est_notas();





