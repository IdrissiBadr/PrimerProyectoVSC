/*
Usamos este find para encontrar todas las peliculas en las que Peter Jackson es el director
*/
db.inventory.find( { director: "Peter Jackson" } )
/*
Usamos este find para encontrar las peliculas que tengan el Rating mayor que o igual a 8.9
*/
db.inventory.find ( { rating: {$gte: 8,9} } )
/*
Usamos este find para encontrar todas las peliculas estrenadas antes del 2000 en esta lista
*/
db.inventory.find ({year: {$lt: 2000}})
/*
Usamos este find para encontrar todos los directores que  sean Francis Ford Copolla
*/
db.inventory.find (director:"Francis Ford Copolla")