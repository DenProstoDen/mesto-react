export default function Card ({card, onCardClick}){
    return(
        <div className="card">
          <img 
          className="card__img" 
          src={card.link} 
          alt={card.name}
          onCardClick={() => onCardClick({link: card.link, name: card.name})}
          />
          <div className="card__description">
            <h2 className="card__text"></h2>
            <button className="card__like" type="button">
              <span className="card__like_numbers">2</span>
            </button> 
          </div>
          <button className="card__delete" type="button"></button>
        </div>
    )
}