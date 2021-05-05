import React from 'react';
import api from '../utils/Api.js';

function Main(props) {
const [userName, setUserName] = React.useState('');
const [userDescription, setUserDescription] = React.useState('');
const [userAvatar, setUserAvatar] = React.useState('');

React.useEffect(() => {
  api.getProfileInfo()
.then((res) => {
  setUserName(res.name);
  setUserDescription(res.about);
  setUserAvatar(res.avatar);
})
.catch((err) => console.log(err)); 
});

return (
    <>
      <main className='content container'>
        <section className='profile content__profile container'>
          <div className='profile__avatar' onClick={props.onEditAvatar}>
            <img className='profile__image' src={userAvatar} alt='Картинка Аватар' />
          </div>
          <div className='profile__info'>
            <div className='profile__editcase'>
              <h1 className='profile__name'>{userName}</h1>
              <button
                type='button'
                className='profile__edit'
                aria-label='Кнопка открытия окна редактирования профиля'
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className='profile__job'>{userDescription}</p>
          </div>
          <button
            className='profile__add'
            type='button'
            aria-label='Кнопка добавления фото'
            onClick={props.onAddPlace}
          ></button>
        </section>
        <section
          className='galery content__galery'
          aria-label='Фото мест'
        ></section>
      </main>
    </>
  );


}

export default Main;
