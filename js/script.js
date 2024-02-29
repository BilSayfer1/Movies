/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Чупакабра у которого батя ушел за хлебом",
        "Скотт Пилигрим против..."
    ]
};

let promo = document.querySelectorAll('.promo__adv img')
promo.forEach(a => {
    a.remove()
})

let promo__genre = document.querySelector(".promo__genre")
promo__genre.innerHTML = "Драмма"

let pormo__bg = document.querySelector(".promo__bg")

pormo__bg.style.background = "url(./img/bg.jpg)"

let dialog = document.querySelector('dialog')
let logan = document.querySelector('.promo__interactive-item')
let closes = document.querySelector('.close button')
let ss = document.querySelectorAll('.promo__interactive-item')

logan.onclick = () => {
    dialog.showModal()
}
closes.onclick = () => {
    dialog.close()
}
ss.forEach((a, b) => {
    let ch = a.innerHTML = movieDB.movies[b]

    console.log(ch);
})