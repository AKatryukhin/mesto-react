function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }

  return (
      <article className='photo'>
        <figure className='photo__element'>
          <button
            className='photo__trash'
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
