import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

function Main({onEditAvatar,onAddPlace,onEditProfile,onCardClick}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getProfileInfo()])
      .then(([cardsArray, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
      <main className='content container'>
        <section className='profile content__profile container'>
          <div className='profile__avatar' onClick={onEditAvatar}>
            <img
              className='profile__image'
              src={userAvatar}
              alt='Картинка Аватар'
            />
          </div>
          <div className='profile__info'>
            <div className='profile__editcase'>
              <h1 className='profile__name'>{userName}</h1>
              <button
                type='button'
                className='profile__edit'
                aria-label='Кнопка открытия окна редактирования профиля'
                onClick={onEditProfile}
              ></button>
            </div>
            <p className='profile__job'>{userDescription}</p>
          </div>
          <button
            className='profile__add'
            type='button'
            aria-label='Кнопка добавления фото'
            onClick={onAddPlace}
          ></button>
        </section>
        <section className='galery content__galery' aria-label='Фото мест'>
          {cards.map((card) => {
            return (
              <Card
                name={card.name}
                link={card.link}
                likes={card.likes}
                key={card._id}
                onCardClick={onCardClick}
                card={card}
              />
            );
          })}
        </section>
      </main>
  );
}

export default Main;
