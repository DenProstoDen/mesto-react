import { useEffect, useState} from "react";
import Card from './Cards.jsx';
import Api from '../utils/Api.js';

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUserName] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [cards, setCards] = useState([])
  
    useEffect(() => {
      Promise.all([Api.getName(), Api.getCards()])
        .then(([userData, dataCards]) => {
          setUserName(userData.name)
          setUserDescription(userData.about)
          setUserAvatar(userData.avatar)
          dataCards.forEach(data => data.myid = userData._id)
          setCards(dataCards)
        })
    }, [])

    return(
      <main>
        <section className="profile">
          <button type="button" className="profile__avatar-button" onClick={onEditAvatar}>
            <img
            className="profile__avatar"
            alt="Аватар"
            src={userAvatar}
            />
          </button>
          <div className="profile__info">
            <div className="profile__id">
              <h1 className="profile__name">{userName}</h1>
              <p className="profile__specialization">{userDescription}</p>
            </div>
            <button className="profile__pencil" type="button" onClick={onEditProfile}></button>
          </div>
          <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
        </section>
        <section id="elements" className="elements">
          {cards.map(data => {
            return (
              <div key = {data._id}>
                <Card card={data} onCardClick={onCardClick}/>
              </div>
            )
          })}
        </section>
      </main>
    )
}