import React from 'react';
import Header from './landing/Header.js';
import Footer from './landing/Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';


function App() {

  // переменные состояния, отвечающие за видимость попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
 // переменная состояния, отвечающая за данные пользователя
  const [currentUser, setCurrentUser] = React.useState('');

React.useEffect(() => {
  api.getProfileInfo()
    .then((currentUserData) => {
      setCurrentUser(currentUserData);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);


   // переменная состояния, значением которой задается ссылка на карточку
  const [selectedCard, setSelectedCard] = React.useState(undefined);

//  обработчики для стейтовых переменных
  function handleCardClick(card) {
    setSelectedCard(card);
  }
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
    setSelectedCard(undefined);
  }

  function handleUpdateUser({name, about}) {
    api.setProfileInfo({name, about})
    .then((currentUserData) => {
      setCurrentUser(currentUserData);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleUpdateAvatar({avatar}) {
    api.setUserAvatar({avatar})
      .then(({avatar}) => {
        currentUser.avatar = avatar;
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
    }
  


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <PopupWithForm
          name='place_form'
          title='Новое место'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonTitle='Создать'
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
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <PopupWithForm
          name='confirm_form'
          title='Вы уверены?'
          onClose={closeAllPopups}
          buttonTitle='Да'
        >
        </PopupWithForm>
        <ImagePopup
          onClose={closeAllPopups}
          card={selectedCard}
        />
      </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
