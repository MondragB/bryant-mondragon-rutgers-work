-- 1. What is the average cost to rent a film in the stores?
SELECT AVG(rental_rate) AS "Average Rental" FROM film

-- 2. What is the average rental cost of films by rating? On average, what is the cheapest rating of films to rent? Most expensive?
SELECT AVG(rental_rate) AS "Average Rental Per Rating" FROM film
GROUP BY rating


-- 3. How much would it cost to replace all the films in the database?
SELECT SUM(replacement_cost) AS "Total Film Cost" from film

-- 4. How much would it cost to replace all the films in each ratings category?
SELECT SUM(replacement_cost) AS "Total Film Cost" from film
GROUP BY rating

-- 5. How long is the longest movie in the database? The shortest?
SELECT MAX(length) AS "Longest Film" FROM film

SELECT MIN(length) AS "Shortest Film" FROM film