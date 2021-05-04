import Header from './Header.js';

function App() {
  return (
    <body className="page">
        <Header />
        <main className="content container">
            <section className="profile content__profile container">
                <div className="profile__avatar">
                    <img className="profile__image" src="" alt="Картинка Аватар" />
                </div>
                <div className="profile__info">
                    <div className="profile__editcase">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button type="button" className="profile__edit" aria-label="Кнопка открытия окна редактирования профиля"></button>
                    </div>
                    <p className="profile__job">Исследователь океана</p>
                </div>
                <button className="profile__add" type="button" aria-label="Кнопка добавления фото"></button>
            </section>
            <section className="galery content__galery" aria-label="Фото мест"></section>
        </main>
        <footer className="footer page__footer container">
            <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
        </footer>
        <section className="popup popup_type_prof">
            <div className="popup__container">
                <button type="button" className="popup__close" aria-label="Кнопка для закрытия окна редактирования"></button>
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="popup__form form-prof" name="profform" novalidate>
                    <fieldset className="popup__fild">
                        <input type="text" className="popup__input popup__input_type_name" id="name-input" name="name" value="" required minlength="2" maxlength="40" />
                        <span className="popup__input-error name-input-error"></span>
                        <input type="text" className="popup__input popup__input_type_descr" id="about-input" name="about" value="" required minlength="2" maxlength="200" />
                        <span className="popup__input-error about-input-error"></span>
                    </fieldset>
                    <button className="popup__save" type="submit" aria-label="Кнопка Сохранить">Сохранить</button>
                </form>
            </div>
        </section>
        <section className="popup popup_type_place">
            <div className="popup__container">
                <button type="button" className="popup__close" aria-label="Кнопка для закрытия окна редактирования"></button>
                <h2 className="popup__title">Новое место</h2>
                <form className="popup__form form-place" name="placeform" novalidate>
                    <fieldset className="popup__fild">
                        <input type="text" className="popup__input popup__input_type_name" id="place-input" name="name" value="" placeholder="Название" required minlength="2" maxlength="30" />
                        <span className="popup__input-error place-input-error"></span>
                        <input type="url" className="popup__input popup__input_type_descr" id="link-input" name="link" value="" placeholder="Ссылка на картинку" required />
                        <span className="popup__input-error link-input-error"></span>
                    </fieldset>
                    <button className="popup__save" type="submit" aria-label="Кнопка Создать">Создать</button>
                </form>
            </div>
        </section>
        <section className="popup popup_type_avatar">
            <div className="popup__container">
                <button type="button" className="popup__close" aria-label="Кнопка для закрытия окна редактирования"></button>
                <h2 className="popup__title">Обновить аватар</h2>
                <form className="popup__form form-avatar" name="avatarform" novalidate>
                    <fieldset className="popup__fild">
                        <input type="url" className="popup__input popup__input_type_descr popup__input-avatar" id="avatar-link-input" name="link" value="" placeholder="Ссылка на аватар" required />
                        <span className="popup__input-error avatar-link-input-error"></span>
                    </fieldset>
                    <button className="popup__save" type="submit" aria-label="Кнопка Сохранить">Сохранить</button>
                </form>
            </div>
        </section>
        <section className="popup popup_type_confirm">
            <div className="popup__container popup__container_type_confirm">
                <button type="button" className="popup__close" aria-label="Кнопка для закрытия окна редактирования"></button>
                <h2 className="popup__title popup__title_type_confirm">Вы уверены?</h2>
                <form className="popup__form form-confirm">
                    <button className="popup__save" type="submit" aria-label="Кнопка Да">Да</button>
                </form>
            </div>
        </section>
        <section className="popup popup_type_image">
            <div className="popup__container-image">
                <button type="button" className="popup__close popup__close_type_image" aria-label="Кнопка для закрытия окна"></button>
                <figure className="popup__element-image">
                    <img src="#" alt="Катринка" className="popup__image" />
                    <figcaption className="popup__title-image">
                        <h2 className="popup__name-image">Название</h2>
                    </figcaption>
                </figure>
            </div>
        </section>
        <template className="photo-template">
            <article className="photo">
                <figure className="photo__element">
                    <button className="photo__trash" type="button" aria-label="Кнопка для Удаления"></button>
                    <img src="#" alt="Катринка" className="photo__image" />
                    <figcaption className="photo__title">
                        <h2 className="photo__name"></h2>
                        <div className="photo__like-container">
                            <button className="photo__like" type="button" aria-label="Кнопка для Лайков"></button>
                            <p className="photo__like-total">0</p>
                        </div>
                    </figcaption>
                </figure>
            </article>
        </template>
    </body>
  );
}

export default App;
