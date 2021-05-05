function Card(props) {
  return(
    <>
    <article className="photo">
                <figure className="photo__element">
                    <button className="photo__trash" type="button" aria-label="Кнопка для Удаления"></button>
                    <img src={props.link} alt={props.name} className="photo__image" />
                    <figcaption className="photo__title">
                        <h2 className="photo__name">{props.name}</h2>
                        <div className="photo__like-container">
                            <button className="photo__like" type="button" aria-label="Кнопка для Лайков"></button>
                            <p className="photo__like-total">{props.likes.length}</p>
                        </div>
                    </figcaption> 
                </figure>
             </article>
     </>
  )
}
export default Card