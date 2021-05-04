import App from './App.js';

function Main(props) {
  return (
    <>
      <main className='content container'>
        <section className='profile content__profile container'>
          <div className='profile__avatar' onClick={props.onEditAvatar}>
            <img className='profile__image' src='' alt='Картинка Аватар' />
          </div>
          <div className='profile__info'>
            <div className='profile__editcase'>
              <h1 className='profile__name'>Жак-Ив Кусто</h1>
              <button
                type='button'
                className='profile__edit'
                aria-label='Кнопка открытия окна редактирования профиля'
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className='profile__job'>Исследователь океана</p>
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