-- Create tables for raw data to be loaded into
CREATE TABLE premise (
    id INT PRIMARY KEY,
    premise_name TEXT,
    county_id INT
);
CREATE TABLE county (
    id INT PRIMARY KEY,
    county_name TEXT,
    license_count INT,
    county_id INT
);
-- Join tables
SELECT premise.id,
    premise.premise_name,
    premise.county_id
FROM premise
    JOIN county ON premise.id = county.id;