const employeeView =
  'SELECT emprm.id, emprm.first_name, emprm.last_name, emprm.title, departments.name AS "department_name", emprm.salary, emprm.manager_name FROM (SELECT empr.id, empr.first_name, empr.last_name, empr.title, empr.department_id, empr.salary, CONCAT(employees.first_name," ",employees.last_name) AS manager_name FROM (SELECT employees.id, employees.first_name, employees.last_name, employees.manager_id, roles.title, roles.salary, roles.department_id FROM employees JOIN roles ON employees.role_id = roles.id) AS empr LEFT JOIN employees ON empr.manager_id = employees.id) AS emprm JOIN departments ON emprm.department_id = departments.id;';

const employeeSimpleView =
  'SELECT employees.id, CONCAT (employees.first_name, " ", employees.last_name) AS full_name FROM employees';

const departmentView =
  "SELECT departments.id, departments.name FROM departments";

const rolesView =
  "SELECT roles.title, roles.id AS role_id, roles.salary, departments.name AS department_name FROM roles JOIN departments ON roles.department_id = departments.id";

const updateDepartment = "SELECT roles.id, roles.title FROM departments";

const addRole =
  "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?) ";

const addDepartment = "INSERT INTO departments (name) VALUES (?) ";

const addEmployee =
  "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?) ";

const updateEmployee = "UPDATE employees SET role_id = ? WHERE id = ?";

module.exports = {
  employeeView,
  employeeSimpleView,
  updateDepartment,
  departmentView,
  rolesView,
  addRole,
  addDepartment,
  addEmployee,
  updateEmployee,
};
