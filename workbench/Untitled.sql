USE hr_db;

SELECT
    emprm.id,
    emprm.first_name,
    emprm.last_name,
    emprm.title,
    departments.name AS "department_name",
    emprm.salary,
    emprm.manager_name
FROM
(SELECT
	empr.id,
    empr.first_name,
    empr.last_name,
    empr.title,
    empr.department_id,
    empr.salary,
    CONCAT(employees.first_name," ",employees.last_name) AS manager_name
FROM
(SELECT
	employees.id,
    employees.first_name,
    employees.last_name,
    employees.manager_id,
    roles.title,
    roles.salary,
    roles.department_id
FROM employees
JOIN roles
ON employees.role_id = roles.id) AS empr
LEFT JOIN employees
ON empr.manager_id = employees.id) AS emprm
JOIN departments
ON emprm.department_id = departments.id