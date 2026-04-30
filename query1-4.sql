SELECT DISTINCT address
    FROM ((sakila.film INNER JOIN sakila.inventory ON sakila.film.film_id = sakila.inventory.film_id)
    INNER JOIN sakila.store ON sakila.inventory.store_id = sakila.store.store_id)
    INNER JOIN sakila.address ON sakila.store.address_id = sakila.address.address_id
    WHERE sakila.film.title = "TWISTED PIRATES";