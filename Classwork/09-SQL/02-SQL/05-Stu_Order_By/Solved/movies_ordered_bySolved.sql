SELECT first_name,
    COUNT(first_name) AS "Actor Count"
FROM actor
GROUP BY first_name
ORDER BY "Actor Count" DESC;
SELECT rating,
    ROUND(AVG(rental_duration), 2) AS "Average Duration Per Rating"
FROM film
GROUP BY rating
ORDER BY "Average Duration Per Rating" ASC;
SELECT length,
    ROUND(AVG(replacement_cost), 2) AS "Cost for Replacement"
FROM film
GROUP BY length
ORDER by "Cost for Replacement" DESC
LIMIT 10;