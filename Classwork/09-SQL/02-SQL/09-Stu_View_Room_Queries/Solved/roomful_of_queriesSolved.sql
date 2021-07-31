CREATE VIEW title_count AS
SELECT title,
    (
        SELECT COUNT(inventory.film_id)
        FROM inventory
        WHERE film.film_id = inventory.film_id
    ) AS "Number of Copies"
FROM film;
SELECT *
FROM title_count
WHERE "Number of Copies" = 7;