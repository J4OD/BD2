    CREATE OR REPLACE function inst_depart(pdept_name character varying(20))
        returns integer as $$
        DECLARE
        d_count integer;
        begin
            select count(*) into d_count
            from instructor
            WHERE instructor.dept_name=pdept_name;
            return d_count;
        end
        $$ LANGUAGE plpgsql;

    SELECT inst_depart('Physics');

    SELECT dept_name,budget
    FROM department
    WHERE inst_depart(dept_name)>4;

    CREATE function instructors_of (pdept_name VARCHAR(20) )
    returns SETOF record AS $BODY$
        DECLARE
        tabla record;
        begin                   
        FOR tabla IN
                SELECT id,name,dept_name,salary
                FROM instructor
                WHERE instructor.dept_name=pdept_name
        LOOP
            return next tabla;
            END LOOP;
        END;
    $BODY$
    LANGUAGE plpgsql;

SELECT *
FROM instructors_of('Physics')AS record(id varchar(5),name varchar(20),dept_name varchar(20),salary numeric(8,2));
            
/* escribir 10 funciones para diferentes tareas  */