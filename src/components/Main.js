function Main() {
  return (
    <>
      <main className='content container'>
        <section className='profile content__profile container'>
          <div className='profile__avatar' onClick={handleEditAvatarClick}>
            <img className='profile__image' src='' alt='Картинка Аватар' />
          </div>
          <div className='profile__info'>
            <div className='profile__editcase'>
              <h1 className='profile__name'>Жак-Ив Кусто</h1>
              <button
                type='button'
                className='profile__edit'
                aria-label='Кнопка открытия окна редактирования профиля'
                onClick={handleEditProfileClick}
              ></button>
            </div>
            <p className='profile__job'>Исследователь океана</p>
          </div>
          <button
            className='profile__add'
            type='button'
            aria-label='Кнопка добавления фото'
            onClick={handleAddPlaceClick}
          ></button>
        </section>
        <section
          className='galery content__galery'
          aria-label='Фото мест'
        ></section>
      </main>
    </>
  );


function handleEditAvatarClick() {
  document.querySelector('.popup_type_avatar').classList.add('popup_opened');
 
}

function handleEditProfileClick() {
  document.querySelector('.popup_type_prof').classList.add('popup_opened');
}

function handleAddPlaceClick() {
  document.querySelector('.popup_type_place').classList.add('popup_opened');
}

}

export default Main;
