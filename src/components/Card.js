import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick}) {

  const currentUser = React.useContext(CurrentUserContext);

// Определяем, являемся ли мы владельцем текущей карточки
const isOwn = card.owner._id === currentUser._id;

// Создаём переменную, которую после зададим в `className` для кнопки удаления
const cardDeleteButtonClassName = (
  `photo__trash ${isOwn ? 'photo__trash_type_visible' : ''}`
); 
  function handleClick() {
    onCardClick(card);
  }

  return (
      <article className='photo'>
        <figure className='photo__element'>
          <button
            className={cardDeleteButtonClassName}
            type='button'
            aria-label='Кнопка для Удаления'
          ></button>
          <img
            src={card.link}
            alt={card.name}
            className='photo__image'
            onClick={handleClick}
          />
          <figcaption className='photo__title'>
            <h2 className='photo__name'>{card.name}</h2>
            <div className='photo__like-container'>
              <button
                className='photo__like'
                type='button'
                aria-label='Кнопка для Лайков'
              ></button>
              <p className='photo__like-total'>{card.likes.length}</p>
            </div>
          </figcaption>
        </figure>
      </article>
  );
}
export default Card;
