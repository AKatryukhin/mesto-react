import './index.css';
import logo from './images/header-logo.svg';

function App() {
  return (
    <body class="page">
        <header class="header page__header"><img class="header__logo" src={logo} alt="Логотип Место" /> --></header>
        <main class="content container">
            <section class="profile content__profile container">
                <div class="profile__avatar">
                    <img class="profile__image" src="" alt="Картинка Аватар" />
                </div>
                <div class="profile__info">
                    <div class="profile__editcase">
                        <h1 class="profile__name">Жак-Ив Кусто</h1>
                        <button type="button" class="profile__edit" aria-label="Кнопка открытия окна редактирования профиля"></button>
                    </div>
                    <p class="profile__job">Исследователь океана</p>
                </div>
                <button class="profile__add" type="button" aria-label="Кнопка добавления фото"></button>
            </section>
            <section class="galery content__galery" aria-label="Фото мест"></section>
        </main>
        <footer class="footer page__footer container">
            <p class="footer__copyright">&copy; 2020 Mesto Russia</p>
        </footer>
        <section class="popup popup_type_prof">
            <div class="popup__container">
                <button type="button" class="popup__close" aria-label="Кнопка для закрытия окна редактирования"></button>
                <h2 class="popup__title">Редактировать профиль</h2>
                <form class="popup__form form-prof" name="profform" novalidate>
                    <fieldset class="popup__fild">
                        <input type="text" class="popup__input popup__input_type_name" id="name-input" name="name" value="" required minlength="2" maxlength="40" />
                        <span class="popup__input-error name-input-error"></span>
                        <input type="text" class="popup__input popup__input_type_descr" id="about-input" name="about" value="" required minlength="2" maxlength="200" />
                        <span class="popup__input-error about-input-error"></span>
                    </fieldset>
                    <button class="popup__save" type="submit" aria-label="Кнопка Сохранить">Сохранить</button>
                </form>
            </div>
        </section>
        <section class="popup popup_type_place">
            <div class="popup__container">
                <button type="button" class="popup__close" aria-label="Кнопка для закрытия окна редактирования"></button>
                <h2 class="popup__title">Новое место</h2>
                <form class="popup__form form-place" name="placeform" novalidate>
                    <fieldset class="popup__fild">
                        <input type="text" class="popup__input popup__input_type_name" id="place-input" name="name" value="" placeholder="Название" required minlength="2" maxlength="30" />
                        <span class="popup__input-error place-input-error"></span>
                        <input type="url" class="popup__input popup__input_type_descr" id="link-input" name="link" value="" placeholder="Ссылка на картинку" required />
                        <span class="popup__input-error link-input-error"></span>
                    </fieldset>
                    <button class="popup__save" type="submit" aria-label="Кнопка Создать">Создать</button>
                </form>
            </div>
        </section>
        <section class="popup popup_type_avatar">
            <div class="popup__container">
                <button type="button" class="popup__close" aria-label="Кнопка для закрытия окна редактирования"></button>
                <h2 class="popup__title">Обновить аватар</h2>
                <form class="popup__form form-avatar" name="avatarform" novalidate>
                    <fieldset class="popup__fild">
                        <input type="url" class="popup__input popup__input_type_descr popup__input-avatar" id="avatar-link-input" name="link" value="" placeholder="Ссылка на аватар" required />
                        <span class="popup__input-error avatar-link-input-error"></span>
                    </fieldset>
                    <button class="popup__save" type="submit" aria-label="Кнопка Сохранить">Сохранить</button>
                </form>
            </div>
        </section>
        <section class="popup popup_type_confirm">
            <div class="popup__container popup__container_type_confirm">
                <button type="button" class="popup__close" aria-label="Кнопка для закрытия окна редактирования"></button>
                <h2 class="popup__title popup__title_type_confirm">Вы уверены?</h2>
                <form class="popup__form form-confirm">
                    <button class="popup__save" type="submit" aria-label="Кнопка Да">Да</button>
                </form>
            </div>
        </section>
        <section class="popup popup_type_image">
            <div class="popup__container-image">
                <button type="button" class="popup__close popup__close_type_image" aria-label="Кнопка для закрытия окна"></button>
                <figure class="popup__element-image">
                    <img src="#" alt="Катринка" class="popup__image" />
                    <figcaption class="popup__title-image">
                        <h2 class="popup__name-image">Название</h2>
                    </figcaption>
                </figure>
            </div>
        </section>
        <template class="photo-template">
            <article class="photo">
                <figure class="photo__element">
                    <button class="photo__trash" type="button" aria-label="Кнопка для Удаления"></button>
                    <img src="#" alt="Катринка" class="photo__image" />
                    <figcaption class="photo__title">
                        <h2 class="photo__name"></h2>
                        <div class="photo__like-container">
                            <button class="photo__like" type="button" aria-label="Кнопка для Лайков"></button>
                            <p class="photo__like-total">0</p>
                        </div>
                    </figcaption>
                </figure>
            </article>
        </template>
    </body>
  );
}

export default App;
