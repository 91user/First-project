"use strict";

alert('Привет');

let numberofFilms = "Сколько фильмов вы уже посмотрели?";

const personalmovieDB = {
    count: prompt(numberofFilms),
    movies: {},
    actors: {},
    genres: [],
    privat: "false"

};

personalmovieDB.movies[prompt('Один из последних фильмов?')] = prompt('На сколько оцените его?');
personalmovieDB.movies[prompt('Какой ещё смотрел фильм за последнее время?')] = prompt('На сколько оценишь его?');

console.log(personalmovieDB);






    