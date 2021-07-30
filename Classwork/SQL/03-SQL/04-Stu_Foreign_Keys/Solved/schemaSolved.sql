CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);
CREATE TABLE customer_email (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    customer_id INTEGER NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customer (id)
);
SELECT *
FROM customer;
SELECT *
FROM customer_email;