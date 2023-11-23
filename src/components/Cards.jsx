import { userContext } from "react"
import CurrentUserContext from "../context/CurentUserContext.js"

export default function Card ({card, onCardClick}){
    return(
        <div className="card">
          <img 
          className="card__img" 
          src={card.link} 
          alt={card.name}
          onClick={() => onCardClick({name: card.name, link: card.link})}
          />
          <div className="card__description">
            <h2 className="card__text">{card.name}</h2>
            <button className="card__like" type="button">
              <span className="card__like_numbers">2</span>
            </button> 
          </div>
          <button className="card__delete" type="button"></button>
        </div>
    )
}