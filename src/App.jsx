import { useState } from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import PopupImage from './components/PopupImage.jsx';
import PopupWithForm from './components/PopupWithForm.jsx';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isImagePopup, setImagePopup ] = useState(false)

  function closePopups() {
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setEditAvatarPopupOpen(false)
    setImagePopup(false)
  }

  function handleProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handlePlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function handleAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
    setImagePopup(true)
  }

  return (
    <div className="page">


    <Header />

    <Main
      onEditProfile = {handleProfileClick}
      onAddPlace ={handlePlaceClick}
      onEditAvatar = {handleAvatarClick}
      onCardClick = {handleCardClick}
    />

    <Footer />

    <PopupWithForm 
        name='edit-profile' 
        title='Редактировать профиль'
        isOpen = {isEditProfilePopupOpen}
        onClose = {closePopups}
      >
        <input
          id="username"
          type="text"
          name="name"
          className="popup__input popup__input_type_name"
          required=""
          placeholder="Ваше имя"
          minLength={2}
          maxLength={40}
        />
        <span id="name-error" className="error" />
        <input
          id="info"
          type="text"
          name="job"
          className="popup__input popup__input_type_info"
          required=""
          placeholder="Расскажите о себе"
          minLength={2}
          maxLength={200}
        />
        <span id="job-error" className="error" />
      </PopupWithForm>

      <PopupWithForm 
        name='add-card' 
        title='Новое место'
        titleButton='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose = {closePopups}
      >
        <input
          id="place-name"
          type="text"
          className="popup__input popup__input_type_place"
          name="placeName"
          required=""
          placeholder="Место"
          minLength={2}
          maxLength={30}
        />
        <span id="placeName-error" className="error" />
        <input
          id="place-link"
          type="url"
          className="popup__input popup__input_type_link"
          name="placeLink"
          required=""
          placeholder="Ссылка"
        />
        <span id="placeLink-error" className="error" />
      </PopupWithForm>


    <div className="popup popup_place-add">
      <div className="popup__container">
        <button type="button" className="popup__close-button"></button>
        <h2 className="popup__header">Новое место</h2>
        <form id="formEditPlace" className="popup__form popup__form_place" name="personInformation">
          <input
            minLength="2"
            maxLength="30"
            id="place-name"
            className="popup__input popup__input_type_place"
            type="text"
            placeholder="Место"
            name="placeName"
            required
          />
          <span id="placeName-error" className="error"></span>
          <input
            id="place-link"
            className="popup__input popup__input_type_link"
            type="url"
            placeholder="Ссылка"
            name="placeLink"
            required
          />
          <span id="placeLink-error" className="error"></span>
          <button type="submit" className="popup__save-button">Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup-image img-add">
      <div className="popup-image__container">
        <button type="button" className="popup__close-button"></button>
        <img src="." alt="." className="popup-image__picture"/>
        <h2 className="popup-image__text"></h2>
      </div>
    </div>
    <div className="popup popup-avatar">
      <div className="popup__container">
        <button type="button" className="popup__close-button"></button>
        <h2 className="popup__header">Обновить аватар</h2>
        <form id="formEditAvatar" className="popup__form popup__form_avatar" name="personAvatar">
          <input className="popup__input popup__input_type_avatar" type="url" placeholder="Ссылка" name="avatar" required/>
          <span id="avatar-error" className="error"></span>
          <button type="submit" className="popup__save-button" name="submitAva">Сменить</button>
        </form> 
      </div>
    </div>
    <div className="popup popup-delete">
        <div className="popup__container">
        <button type="button" className="popup__close-button"></button>
        <h2 className="popup__header">Вы уверены?</h2>
        <form name="cardDelete" className="popup__form popup__form_delete">
          <button type="submit" className="popup__save-button popup__delete-btn">Да</button>
        </form> 
      </div>
    </div>
  </div>
  )
}

export default App
