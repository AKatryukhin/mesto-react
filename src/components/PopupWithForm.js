function PopupWithForm(props) {
  return (
    <>
      <section
        className={`popup popup_type_${props.name} ${
          props.isOpen ? 'popup_opened' : ''
        }`}
      >
        <div className='popup__container'>
          <button
            type='button'
            className='popup__close'
            aria-label='Кнопка для закрытия'
            onClick={props.onClose}
          ></button>
          <h2 className='popup__title'>{props.title}</h2>
          <form className='popup__form' name={`${props.name}_form`} noValidate>
            {props.children}
            <button
              className='popup__save'
              type='submit'
              aria-label='Кнопка Сохранить'
            >
              Сохранить
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
export default PopupWithForm;
