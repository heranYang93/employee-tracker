INSERT INTO departments
VALUES ("Sales"),("Engineering"),("Finance"),("Legal");

INSERT INTO roles
VALUES
    (1, "Salesperson",80000,1),
    (2, "Lead Engineer",150000,2),
    (3, "Software Engineer",120000,2),
    (4, "Account Manager",160000,3),
    (5, "Accountant",125000,3),
    (6, "Legal Team Lead",250000,4),
    (7, "Lawyer",190000,4);

INSERT INTO employees 
VALUES
    (2, "Mike","Chan",1,NULL),
    (3, "Ashley","Rodriguez",2,NULL),
    (4, "Kevin","Tupik",2,3),
    (5, "Kunal","Sign",3,NULL),
    (6, "Malia","Brown",3,5),
    (7, "Sarah","Lourd",4,NULL),
    (8, "Tom","Allen",4,7);