function ImagePopup() {
  return (
    <>
      <section className='popup popup_type_image'>
        <div className='popup__container-image'>
          <button
            type='button'
            className='popup__close popup__close_type_image'
            aria-label='Кнопка для закрытия окна'
          ></button>
          <figure className='popup__element-image'>
            <img src='#' alt='Катринка' className='popup__image' />
            <figcaption className='popup__title-image'>
              <h2 className='popup__name-image'>Название</h2>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
