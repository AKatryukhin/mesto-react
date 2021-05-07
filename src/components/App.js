import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  // переменные состояния, отвечающие за видимость попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  // const [isEditConfirmPopupOpen, setIsEditConfirmPopupOpen] = React.useState(false);

   // переменная состояния, значением которой задается ссылка на карточку
  const [selectedCard, setSelectedCard] = React.useState(false);

//  обработчики для стейтовых переменных
  function handleCardClick(card) {
    setSelectedCard(card);

  }
  // function handleEditConfirmClick() {
  //   setIsEditConfirmPopupOpen(true);
  // }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  // функция закрытия попапов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
      <div className='page'>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          // onConfirmClick={handleEditConfirmClick}
        />
        <Footer />
        <PopupWithForm
          name='prof_form'
          title='Редактировать профиль'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className='popup__fild'>
            <input
              type='text'
              className='popup__input popup__input_type_name'
              id='name-input'
              name='name'
              required
              minLength='2'
              maxLength='40'
              placeholder='имя'
            />
            <span className='popup__input-error name-input-error'></span>
            <input
              type='text'
              className='popup__input popup__input_type_descr'
              id='about-input'
              name='about'
              required
              minLength='2'
              maxLength='200'
              placeholder='описание'
            />
            <span className='popup__input-error about-input-error'></span>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm
          name='place_form'
          title='Новое место'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className='popup__fild'>
            <input
              type='text'
              className='popup__input popup__input_type_name'
              id='place-input'
              name='name'
              placeholder='Название'
              required
              minLength='2'
              maxLength='30'
            />
            <span className='popup__input-error place-input-error'></span>
            <input
              type='url'
              className='popup__input popup__input_type_descr'
              id='link-input'
              name='link'
              placeholder='Ссылка на картинку'
              required
            />
            <span className='popup__input-error link-input-error'></span>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm
          name='avatar_form'
          title='Обновить аватар'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className='popup__fild'>
            <input
              type='url'
              className='popup__input popup__input_type_descr popup__input-avatar'
              id='avatar-link-input'
              name='link'
              placeholder='Ссылка на аватар'
              required
            />
            <span className='popup__input-error avatar-link-input-error'></span>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm
          name='confirm_form'
          title='Вы уверены?'
          // isOpen={isEditConfirmPopupOpen}
          onClose={closeAllPopups}
        >
        </PopupWithForm>
        <ImagePopup
          onClose={closeAllPopups}
          card={selectedCard}
        />
      </div>
  );
}

export default App;
