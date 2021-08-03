-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.
CREATE TABLE "Departments" (
    "dept_no" text NOT NULL,
    "dept_name" text NOT NULL,
    CONSTRAINT "pk_Departments" PRIMARY KEY ("dept_no")
);
CREATE TABLE "Dept_Emp" (
    "emp_no" int NOT NULL,
    "dept_no" text NOT NULL,
    CONSTRAINT "pk_Dept_Emp" PRIMARY KEY ("emp_no", "dept_no")
);
CREATE TABLE "Dept_Manager" (
    "dept_no" text NOT NULL,
    "emp_no" int NOT NULL,
    CONSTRAINT "pk_Dept_Manager" PRIMARY KEY ("emp_no")
);
CREATE TABLE "Employee" (
    "emp_no" int NOT NULL,
    "emp_title_id" text NOT NULL,
    "birth_date" text NOT NULL,
    "first_name" text NOT NULL,
    "last_name" text NOT NULL,
    "sex" char NOT NULL,
    "hire_data" text NOT NULL,
    CONSTRAINT "pk_Employee" PRIMARY KEY ("emp_no")
);
CREATE TABLE "Salaries" (
    "emp_no" int NOT NULL,
    "salary" int NOT NULL,
    CONSTRAINT "pk_Salaries" PRIMARY KEY ("emp_no")
);
CREATE TABLE "Titles" (
    "title_id" text NOT NULL,
    "title" text NOT NULL,
    CONSTRAINT "pk_Titles" PRIMARY KEY ("title_id")
);
ALTER TABLE "Departments"
ADD CONSTRAINT "fk_Departments_dept_no" FOREIGN KEY("dept_no") REFERENCES "Dept_Emp" ("dept_no");
ALTER TABLE "Dept_Emp"
ADD CONSTRAINT "fk_Dept_Emp_emp_no_dept_no" FOREIGN KEY("emp_no", "dept_no") REFERENCES "Dept_Manager" ("emp_no", "dept_no");
ALTER TABLE "Dept_Manager"
ADD CONSTRAINT "fk_Dept_Manager_emp_no" FOREIGN KEY("emp_no") REFERENCES "Employee" ("emp_no");
ALTER TABLE "Employee"
ADD CONSTRAINT "fk_Employee_emp_no" FOREIGN KEY("emp_no") REFERENCES "Salaries" ("emp_no");
ALTER TABLE "Employee"
ADD CONSTRAINT "fk_Employee_emp_title_id" FOREIGN KEY("emp_title_id") REFERENCES "Titles" ("title_id");
CREATE INDEX "idx_Departments_dept_name" ON "Departments" ("dept_name");