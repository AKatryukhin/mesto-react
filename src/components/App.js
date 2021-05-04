import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
// import ImagePopup from './ImagePopup.js';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
      }
      
      function handleEditProfileClick() {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
      }
      
      function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
      }


  return (
      <>
    <body className="page">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
        <Footer />
        <PopupWithForm name="prof_form" title="Редактировать профиль" isOpen={isEditProfilePopupOpen}>
        <fieldset className="popup__fild">
                        <input type="text" className="popup__input popup__input_type_name" id="name-input" name="name" value="" required minLength="2" maxLength="40" />
                        <span className="popup__input-error name-input-error"></span>
                        <input type="text" className="popup__input popup__input_type_descr" id="about-input" name="about" value="" required minLength="2" maxLength="200" />
                        <span className="popup__input-error about-input-error"></span>
                    </fieldset>
        </PopupWithForm>
        <PopupWithForm name="place_form" title="Новое место" isOpen={isAddPlacePopupOpen}>
        <fieldset className="popup__fild">
                        <input type="text" className="popup__input popup__input_type_name" id="place-input" name="name" value="" placeholder="Название" required minLength="2" maxLength="30" />
                        <span className="popup__input-error place-input-error"></span>
                        <input type="url" className="popup__input popup__input_type_descr" id="link-input" name="link" value="" placeholder="Ссылка на картинку" required />
                        <span className="popup__input-error link-input-error"></span>
                    </fieldset>
        </PopupWithForm>
        <PopupWithForm name="avatar_form" title="Обновить аватар" isOpen={isEditAvatarPopupOpen}>
        <fieldset className="popup__fild">
                        <input type="url" className="popup__input popup__input_type_descr popup__input-avatar" id="avatar-link-input" name="link" value="" placeholder="Ссылка на аватар" required />
                        <span className="popup__input-error avatar-link-input-error"></span>
                    </fieldset>
        </PopupWithForm>


        {/* <section className="popup popup_type_prof">
            <div className="popup__container">
                <button type="button" className="popup__close" aria-label="Кнопка для закрытия окна редактирования"></button>
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="popup__form form-prof" name="prof_form" noValidate>
                    <fieldset className="popup__fild">
                        <input type="text" className="popup__input popup__input_type_name" id="name-input" name="name" value="" required minLength="2" maxLength="40" />
                        <span className="popup__input-error name-input-error"></span>
                        <input type="text" className="popup__input popup__input_type_descr" id="about-input" name="about" value="" required minLength="2" maxLength="200" />
                        <span className="popup__input-error about-input-error"></span>
                    </fieldset>
                    <button className="popup__save" type="submit" aria-label="Кнопка Сохранить">Сохранить</button>
                </form>
            </div>
        </section> */}
        {/* <section className="popup popup_type_place">
            <div className="popup__container">
                <button type="button" className="popup__close" aria-label="Кнопка для закрытия окна редактирования"></button>
                <h2 className="popup__title">Новое место</h2>
                <form className="popup__form form-place" name="place_form" noValidate>
                    <fieldset className="popup__fild">
                        <input type="text" className="popup__input popup__input_type_name" id="place-input" name="name" value="" placeholder="Название" required minLength="2" maxLength="30" />
                        <span className="popup__input-error place-input-error"></span>
                        <input type="url" className="popup__input popup__input_type_descr" id="link-input" name="link" value="" placeholder="Ссылка на картинку" required />
                        <span className="popup__input-error link-input-error"></span>
                    </fieldset>
                    <button className="popup__save" type="submit" aria-label="Кнопка Создать">Создать</button>
                </form>
            </div>
        </section> */}
        {/* <section className="popup popup_type_avatar">
            <div className="popup__container">
                <button type="button" className="popup__close" aria-label="Кнопка для закрытия окна редактирования"></button>
                <h2 className="popup__title">Обновить аватар</h2>
                <form className="popup__form form-avatar" name="avatar_form" noValidate>
                    <fieldset className="popup__fild">
                        <input type="url" className="popup__input popup__input_type_descr popup__input-avatar" id="avatar-link-input" name="link" value="" placeholder="Ссылка на аватар" required />
                        <span className="popup__input-error avatar-link-input-error"></span>
                    </fieldset>
                    <button className="popup__save" type="submit" aria-label="Кнопка Сохранить">Сохранить</button>
                </form>
            </div>
        </section> */}
        <section className="popup popup_type_confirm">
            <div className="popup__container">
                <button type="button" className="popup__close" aria-label="Кнопка для закрытия окна редактирования"></button>
                <h2 className="popup__title popup__title_type_confirm">Вы уверены?</h2>
                <form className="popup__form" name="confirm_form">
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
                        <h2 className="photo__name">Заголовок</h2>
                        <div className="photo__like-container">
                            <button className="photo__like" type="button" aria-label="Кнопка для Лайков"></button>
                            <p className="photo__like-total">0</p>
                        </div>
                    </figcaption>
                </figure>
            </article>
        </template>
    </body>
    </>
  );






}

export default App;