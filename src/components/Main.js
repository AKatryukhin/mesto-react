import React from 'react';
import api from '../utils/Api.js';

function Main(props) {
const [userName, setUserName] = React.useState('');
const [userDescription, setUserDescription] = React.useState('');
const [userAvatar, setUserAvatar] = React.useState('');
const [cards, setCards] = React.useState([]);

React.useEffect(() => {
  api.getProfileInfo()
.then((res) => {
  setUserName(res.name);
  setUserDescription(res.about);
  setUserAvatar(res.avatar);
})
.catch((err) => console.log(err)); 
});

React.useEffect(() => {
api.getInitialCards()
  .then((res) => {
  setCards(res);
  })
  .catch((err) => {
    console.log(err);
  });

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
        >
        {cards.map((item) => {
          return (
            <article className="photo" key={item._id}>
                <figure className="photo__element">
                    <button className="photo__trash" type="button" aria-label="Кнопка для Удаления"></button>
                    <img src={item.link} alt={item.name} className="photo__image" />
                    <figcaption className="photo__title">
                        <h2 className="photo__name">{item.name}</h2>
                        <div className="photo__like-container">
                            <button className="photo__like" type="button" aria-label="Кнопка для Лайков"></button>
                            <p className="photo__like-total">{item.likes.length}</p>
                        </div>
                    </figcaption>
                </figure>
             </article>
          )}
          )}
          </section>
      </main>
    </>
  );


}

export default Main;
