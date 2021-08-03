-- List the following details of each employee: employee number, last name, first name, sex, and salary.
SELECT emp_no,
    last_name,
    first_name,
    sex,
    (
        SELECT salary
        FROM public."Salaries"
        WHERE public."Employee".emp_no = public."Salaries".emp_no
    ) AS salary
FROM public."Employee";