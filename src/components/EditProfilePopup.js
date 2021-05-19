import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name='prof_form'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      buttonTitle='Сохранить'
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
          value={name || ''}
          onChange={handleChangeName}
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
          value={description || ''}
          onChange={handleChangeDescription}
        />
        <span className='popup__input-error about-input-error'></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
