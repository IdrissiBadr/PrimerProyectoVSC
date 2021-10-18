 db.inventory.deleteMany({})
 db.inventory.insertMany(
    [
        { title: "Cadena perpetua", rating: 9.2, director: "Frank Darabont", year: 1994},
        { title: "El Padrino", rating: 9.1, director: "Francis Ford Coppola", year: 1972},
        { title: "El Padrino Parte 2", rating: 9, director: "Francis Ford Coppola", year: 1974},
        { title: "El Caballero Oscuro", rating: 9, director: "Christopher Nolan", year: 2008 },
        { title: "12 Hombres Sin Piedad", rating: 8.9, director: "Sidney Lumet", year: 1957 },
        { title: "La Lista De Schindler", rating: 8.9, director: "Steven Spielberg", year: 1993},
        { title: "El Senor De Los Anillos : El Retorno Del Rey", rating: 8.9, director: "Peter Jackson", year: 2003 },
        { title: "Pulp Fiction", rating: 8.8, director: "Quentin Tarantino", year: 1994 },
        { title: "El Bueno , El Feo y El Malo", rating: 8.8, director: "Sergio Leone", year: 1966},
        { title: "El Senor De Los Anillos : La Comunidad Del Anillo", rating: 8.8, director: "Peter Jackson", year: 2001},
    
    ]
)