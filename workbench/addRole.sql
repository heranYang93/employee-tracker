USE hr_db;
DELETE FROM roles
WHERE department_id IS NULL;

SELECT * FROM roles;