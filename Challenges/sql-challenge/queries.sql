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
-- List first name, last name, and hire date for employees who were hired in 1986.
SELECT last_name,
    first_name,
    hire_data
FROM public."Employee"
WHERE public."Employee".hire_data LIKE '%1986';
--List the manager of each department with the following information: department number, department name, the manager's employee number, last name, first name.
SELECT dept_no AS "Department Number",
    (
        SELECT dept_name
        FROM public."Departments"
        WHERE public."Dept_Manager".dept_no = public."Departments".dept_no
    ) AS "Department Name",
    emp_no AS "Employee Number",
    (
        SELECT last_name
        FROM public."Employee"
        WHERE public."Dept_Manager".emp_no = public."Employee".emp_no
    ) AS "Last Name",
    (
        SELECT first_name
        FROM public."Employee"
        WHERE public."Dept_Manager".emp_no = public."Employee".emp_no
    ) AS "First Name"
FROM public."Dept_Manager";
--List the department of each employee with the following information: employee number, last name, first name, and department name.
SELECT public."Dept_Emp".emp_no AS "Employee Number",
    public."Employee".last_name AS "Last Name",
    public."Employee".first_name AS "First Name",
    public."Departments".dept_name AS "Department Name"
FROM public."Dept_Emp"
    JOIN public."Employee" ON public."Dept_Emp".emp_no = public."Employee".emp_no
    JOIN public."Departments" ON public."Dept_Emp".dept_no = public."Departments".dept_no;
--List first name, last name, and sex for employees whose first name is "Hercules" and last names begin with "B."
SELECT first_name AS "First Name",
    last_name AS "Last Name",
    sex AS "Sex"
FROM public."Employee"
WHERE first_name = 'Hercules'
    AND last_name LIKE 'B%';
--List all employees in the Sales department, including their employee number, last name, first name, and department name.
SELECT public."Dept_Emp".emp_no AS "Employee Number",
    public."Employee".last_name AS "Last Name",
    public."Employee".first_name AS "First Name",
    public."Departments".dept_name AS "Department Name"
FROM public."Dept_Emp"
    JOIN public."Employee" ON public."Dept_Emp".emp_no = public."Employee".emp_no
    JOIN public."Departments" ON public."Dept_Emp".dept_no = public."Departments".dept_no
WHERE public."Departments".dept_name = 'Sales';
--List all employees in the Sales and Development departments, including their employee number, last name, first name, and department name.
SELECT public."Dept_Emp".emp_no AS "Employee Number",
    public."Employee".last_name AS "Last Name",
    public."Employee".first_name AS "First Name",
    public."Departments".dept_name AS "Department Name"
FROM public."Dept_Emp"
    JOIN public."Employee" ON public."Dept_Emp".emp_no = public."Employee".emp_no
    JOIN public."Departments" ON public."Dept_Emp".dept_no = public."Departments".dept_no
WHERE public."Departments".dept_name = 'Sales'
    OR public."Departments".dept_name = 'Development';
--In descending order, list the frequency count of employee last names, i.e., how many employees share each last name.
SELECT last_name AS "Last Name",
    COUNT(last_name) AS "Frequency"
FROM public."Employee"
GROUP BY public."Employee".last_name
ORDER BY "Frequency" DESC;
--Epilogue
SELECT *
FROM public."Employee"
WHERE emp_no = 499942