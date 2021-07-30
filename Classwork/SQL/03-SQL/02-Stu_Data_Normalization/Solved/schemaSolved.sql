CREATE TABLE pets (
    id SERIAL,
    owner VARCHAR(20) NOT NULL,
    pet_name VARCHAR(20) NOT NULL,
    pet_type VARCHAR(20) NOT NULL,
    service VARCHAR (20) NOT NULL
);
INSERT INTO pets
VALUES (1.0, 'Sally', 'Zeus, Fido', 'Dog, Dog', 'Walk, Walk'),
    (2.0, 'Charles', 'Kevin', 'Dog', 'Walk'),
    (3.0, 'Angela', 'Sprinkles', 'Cat', 'Feed'),
    (4.0, 'Kelly', 'Jumper', 'Cat', 'Feed'),
    (5.0, 'Sam', 'Hoppy', 'Rabbit', 'Hop'),
    (6.0,'Cassie','Rex, Carrot','Dog, Rabbit','Walk, Hop');
SELECT *
FROM pets;
INSERT INTO pets
VALUES (1.0, 'Sally', 'Zeus', 'Dog', 'Walk'),
    (2.0, 'Charles', 'Kevin', 'Dog', 'Walk'),
    (3.0, 'Angela', 'Sprinkles', 'Cat', 'Feed'),
    (4.0, 'Kelly', 'Jumper', 'Cat', 'Feed'),
    (5.0, 'Sam', 'Knibbles', 'Rabbit', 'Hop'),
    (6.0, 'Cassie', 'Rex', 'Dog', 'Walk'),
    (6.0, 'Cassie', 'Carrot', 'Rabbit', 'Hop'),
    (1.0, 'Sally', 'Fido', 'Dog', 'Walk');
SELECT *
FROM pets;